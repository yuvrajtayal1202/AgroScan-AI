import os
from tensorflow.keras.models import load_model
from tensorflow.keras.layers import DepthwiseConv2D

# Custom layer to handle the 'groups' parameter issue
class CustomDepthwiseConv2D(DepthwiseConv2D):
    def __init__(self, *args, **kwargs):
        # Remove the unrecognized 'groups' argument if present
        kwargs.pop('groups', None)
        super().__init__(*args, **kwargs)

def load_model_and_classes():
    # Get the current directory of this script
    current_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Construct absolute paths
    MODEL_PATH = os.path.join(current_dir, "../../Model/plant_model_v1.h5")
    CLASS_NAMES_PATH = os.path.join(current_dir, "class_names.txt")
    
    # Load model with custom layer handler
    model = load_model(
        MODEL_PATH,
        custom_objects={'DepthwiseConv2D': CustomDepthwiseConv2D}
    )

    # Read class names
    with open(CLASS_NAMES_PATH, "r") as f:
        class_names = [line.strip() for line in f.readlines()]

    return model, class_names