# app.py
from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse
from starlette.status import HTTP_500_INTERNAL_SERVER_ERROR
from fastapi.middleware.cors import CORSMiddleware

from model_loader.model_loader import load_model_and_classes
from model_loader.predictor import preprocess_image, predict

from utils.error import (
    validate_image_type,
    validate_file_size,
    validate_image_content
)

# Load model and class names
model, class_names = load_model_and_classes()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace with your frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def inital():
    return class_names


@app.post("/predict")
async def predict_image(file: UploadFile = File(...)):
    try:
        # Read file
        contents = await file.read()
        await file.seek(0)
        # === Validations ===
        validate_image_type(contents)
        validate_file_size(contents)
        validate_image_content(contents)

        # === Predict ===
        img_array = preprocess_image(contents)  # Now expects bytes
        result = predict(model, img_array, class_names)
        return result
    except HTTPException as e:
        raise e
    except ValueError as e:  # Catch preprocessing errors
        return JSONResponse(
            status_code=400,
            content={"error": f"Image processing error: {str(e)}"}
        )
    except RuntimeError as e:  # Catch prediction errors
        return JSONResponse(
            status_code=500,
            content={"error": f"Prediction error: {str(e)}"}
        )
    except Exception as e:  # General fallback
        return JSONResponse(
            status_code=500,
            content={"error": f"Unexpected error: {str(e)}"}
        )

 