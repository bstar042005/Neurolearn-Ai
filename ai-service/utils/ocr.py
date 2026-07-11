import easyocr

# Create OCR reader once
reader = easyocr.Reader(['en'], gpu=False)


def extract_text(image_path):
    """
    Extract handwritten text from image using EasyOCR.
    """

    result = reader.readtext(image_path)

    extracted_text = ""

    for item in result:
        extracted_text += item[1] + " "

    return extracted_text.strip()