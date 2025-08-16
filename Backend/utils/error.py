# utils/error.py

from fastapi import HTTPException
from starlette.status import HTTP_400_BAD_REQUEST
from PIL import Image, UnidentifiedImageError
import imghdr
import io

ALLOWED_IMAGE_TYPES = {"jpeg", "png", "jpg", "bmp", "webp"}

def validate_image_type(file_bytes: bytes):
    file_ext = imghdr.what(None, h=file_bytes)
    if file_ext not in ALLOWED_IMAGE_TYPES:
        raise HTTPException(
            status_code=HTTP_400_BAD_REQUEST,
            detail=f"Invalid image type: {file_ext}. Allowed types: {ALLOWED_IMAGE_TYPES}"
        )

def validate_file_size(file_bytes: bytes, max_size_mb: int = 5):
    if len(file_bytes) > max_size_mb * 1024 * 1024:
        raise HTTPException(
            status_code=HTTP_400_BAD_REQUEST,
            detail=f"File too large. Max size is {max_size_mb}MB."
        )

def validate_image_content(file_bytes: bytes):
    try:
        img = Image.open(io.BytesIO(file_bytes))
        img.verify()
    except (UnidentifiedImageError, Exception):
        raise HTTPException(
            status_code=HTTP_400_BAD_REQUEST,
            detail="Uploaded file is not a valid image or is corrupted."
        )
