
from tensorflow.keras.models import load_model

MODEL_PATH = "../Model/plant_model.h5"
CLASS_NAMES_PATH = "model_loader/class_names.txt"

def load_model_and_classes():
    model = load_model(MODEL_PATH)

    with open(CLASS_NAMES_PATH, "r") as f:
        class_names = [line.strip() for line in f.readlines()]

    return model, class_names
