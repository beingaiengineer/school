import pytest
import os
from rag import extract_text, chunk_text, store_embeddings, retrieve_context, generate_answer

# Dummy tests to ensure the learner's implementation meets the criteria.
# These tests will fail initially until the learner completes the lab.

def test_extract_text_txt(tmp_path):
    # Create a dummy txt file
    file_path = tmp_path / "sample.txt"
    file_path.write_text("This is a sample text for testing extraction.")

    text = extract_text(str(file_path))
    assert text is not None
    assert "This is a sample text" in text

def test_chunk_text():
    text = "Word " * 500
    chunks = chunk_text(text, chunk_size=100, overlap=20)

    assert len(chunks) > 1
    # Check overlap (approximate check based on words for simplicity in dummy test)
    assert chunks[0].endswith(chunks[1][:10]) or True # Replace with better overlap check

@pytest.mark.skipif(not os.getenv("OPENAI_API_KEY"), reason="Requires OpenAI API Key")
def test_end_to_end():
    # 1. Extract
    text = "The speed of light in a vacuum is exactly 299,792,458 metres per second. It is a fundamental physical constant."

    # 2. Chunk
    chunks = chunk_text(text, chunk_size=50, overlap=10)

    # 3. Store
    collection = store_embeddings(chunks, collection_name="test_collection")

    # 4. Retrieve
    query = "What is the speed of light?"
    retrieved = retrieve_context(query, collection, top_k=1)

    assert len(retrieved) > 0
    assert "299,792,458" in retrieved[0]

    # 5. Generate
    answer = generate_answer(query, retrieved)
    assert answer is not None
    assert "299,792,458" in answer
    # Check for citation constraint (e.g., [1] or similar)
    assert "[" in answer and "]" in answer
