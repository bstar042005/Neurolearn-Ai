from difflib import SequenceMatcher


EXPECTED_TEXT = "The quick brown fox jumps over the lazy dog."


def analyze_text(extracted_text):

    similarity = SequenceMatcher(
        None,
        EXPECTED_TEXT.lower(),
        extracted_text.lower()
    ).ratio()

    accuracy = round(similarity * 100, 2)

    expected_words = EXPECTED_TEXT.lower().split()
    extracted_words = extracted_text.lower().split()

    missing_words = [
        word for word in expected_words
        if word not in extracted_words
    ]

    extra_words = [
        word for word in extracted_words
        if word not in expected_words
    ]

    return {
        "accuracy": accuracy,
        "missingWords": missing_words,
        "extraWords": extra_words
    }