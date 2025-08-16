# model_loader/predictor.py
import numpy as np
from PIL import Image

def preprocess_image(file, target_size=(224, 224)):
    image = Image.open(file).convert("RGB")
    image = image.resize(target_size)
    image_array = np.array(image) / 255.0
    return np.expand_dims(image_array, axis=0)

def predict(model, img_array, class_names):
    predictions = model.predict(img_array)
    predicted_index = np.argmax(predictions[0])
    return {
        "predicted_class": class_names[predicted_index],
        "confidence": float(predictions[0][predicted_index])
    }
