import os
import chromadb
from chromadb.utils import embedding_functions
from openai import OpenAI
from typing import List, Dict, Any

# =====================================================================
# BOILERPLATE CODE: DO NOT MODIFY UNLESS NECESSARY
# =====================================================================

def get_chroma_client():
    """Initializes and returns a ChromaDB client."""
    # Using ephemeral client for the lab; in production use PersistentClient
    return chromadb.EphemeralClient()

def get_openai_client():
    """Initializes and returns an OpenAI client."""
    # Ensure OPENAI_API_KEY is set in your environment
    return OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# =====================================================================
# LEARNER IMPLEMENTATION: COMPLETE THE FUNCTIONS BELOW
# =====================================================================

def extract_text(file_path: str) -> str:
    """
    Extracts text from a given PDF or TXT file.

    Args:
        file_path (str): Path to the document.

    Returns:
        str: Extracted text.
    """
    # TODO: Implement text extraction logic
    pass

def chunk_text(text: str, chunk_size: int = 1000, overlap: int = 200) -> List[str]:
    """
    Chunks the extracted text into smaller pieces with overlap.

    Args:
        text (str): The full text to chunk.
        chunk_size (int): Number of tokens/characters per chunk.
        overlap (int): Number of tokens/characters to overlap.

    Returns:
        List[str]: List of text chunks.
    """
    # TODO: Implement chunking logic (consider using tiktoken for token counting)
    pass

def store_embeddings(chunks: List[str], collection_name: str = "rag_collection") -> Any:
    """
    Generates embeddings for chunks and stores them in ChromaDB.

    Args:
        chunks (List[str]): Text chunks.
        collection_name (str): Name of the ChromaDB collection.

    Returns:
        Any: The created ChromaDB collection.
    """
    # TODO: Implement embedding and storage logic
    # Hint: Use get_chroma_client()
    pass

def retrieve_context(query: str, collection: Any, top_k: int = 3) -> List[str]:
    """
    Retrieves the top-k most relevant chunks for a given query.

    Args:
        query (str): The user's query.
        collection (Any): The ChromaDB collection.
        top_k (int): Number of chunks to retrieve.

    Returns:
        List[str]: List of retrieved text chunks.
    """
    # TODO: Implement retrieval logic
    pass

def generate_answer(query: str, context_chunks: List[str]) -> str:
    """
    Generates an answer using an LLM, given the query and retrieved context.
    Must include citations to the context chunks.

    Args:
        query (str): The user's query.
        context_chunks (List[str]): Retrieved context chunks.

    Returns:
        str: The generated answer with citations.
    """
    # TODO: Implement generation logic
    # Hint: Use get_openai_client() and construct a prompt that includes the context
    pass
