import cv2
import numpy as np


def extract_features(processed_image):
    """
    Extract basic handwriting features.
    """

    # Count white pixels
    white_pixels = np.sum(processed_image == 255)

    # Count black pixels
    black_pixels = np.sum(processed_image == 0)

    # Image size
    height, width = processed_image.shape

    total_pixels = height * width

    ink_density = white_pixels / total_pixels

    # Find contours
    contours, _ = cv2.findContours(
        processed_image,
        cv2.RETR_EXTERNAL,
        cv2.CHAIN_APPROX_SIMPLE,
    )

    contour_count = len(contours)

    return {
        "height": height,
        "width": width,
        "inkDensity": round(float(ink_density), 4),
        "contours": contour_count,
    }