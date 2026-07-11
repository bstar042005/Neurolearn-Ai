import cv2


def preprocess_image(image_path):
    """
    Preprocess the uploaded handwriting image.
    """

    # Read image
    image = cv2.imread(image_path)

    if image is None:
        raise Exception("Could not read image.")

    # Resize image
    image = cv2.resize(image, (600, 400))

    # Convert to grayscale
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    # Apply Gaussian Blur
    blurred = cv2.GaussianBlur(gray, (5, 5), 0)

    # Apply Binary Threshold
    _, threshold = cv2.threshold(
        blurred,
        150,
        255,
        cv2.THRESH_BINARY_INV
    )

    return threshold