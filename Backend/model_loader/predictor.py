import numpy as np
from PIL import Image
from io import BytesIO
from tensorflow.keras.applications.mobilenet_v2 import preprocess_input

def preprocess_image(contents, target_size=(96, 96)):
    """
    Preprocess image bytes for model prediction
    :param contents: Raw image bytes
    :param target_size: Target image size (height, width)
    :return: Preprocessed numpy array
    """
    try:
        # Convert bytes to image
        img = Image.open(BytesIO(contents))
        
        # Convert to RGB (handles PNG alpha channels)
        if img.mode != 'RGB':
            img = img.convert('RGB')
            
        # Resize and convert to array
        img = img.resize(target_size)
        img_array = np.array(img)
        
        # Add batch dimension and apply MobileNetV2 preprocessing
        img_array = np.expand_dims(img_array, axis=0)
        return preprocess_input(img_array)
    
    except Exception as e:
        raise ValueError(f"Image processing failed: {str(e)}")

def predict(model, img_array, class_names):
    """
    Make prediction using the model
    :param model: Loaded Keras model
    :param img_array: Preprocessed image array
    :param class_names: List of class names
    :return: Dictionary with prediction results
    """
    try:
        # Make prediction
        predictions = model.predict(img_array)
        predicted_index = np.argmax(predictions[0])
        confidence = float(predictions[0][predicted_index])
        
        return {
            "class": class_names[predicted_index],
            "confidence": confidence,
            "all_predictions": [
                {"class": name, "confidence": float(conf)}
                for name, conf in zip(class_names, predictions[0])
            ]
        }
    except Exception as e:
        raise RuntimeError(f"Prediction failed: {str(e)}")