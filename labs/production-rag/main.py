import os
from rag import extract_text, chunk_text, store_embeddings, retrieve_context, generate_answer

def main():
    print("Welcome to the Production RAG Lab!")

    # Example workflow (learner should complete the functions in rag.py)
    # text = extract_text("sample.txt")
    # chunks = chunk_text(text)
    # collection = store_embeddings(chunks)
    # query = "What is the main topic?"
    # context = retrieve_context(query, collection)
    # answer = generate_answer(query, context)
    # print(f"Answer: {answer}")

if __name__ == "__main__":
    # Ensure environment variables are loaded
    from dotenv import load_dotenv
    load_dotenv()
    main()
