# Lab 1: Production RAG System

## Overview
This lab walks learners through building a production-ready Retrieval-Augmented Generation (RAG) system. The goal is to ingest documents, store embeddings, and retrieve accurate context for LLM generation while adhering to enterprise constraints.

## Architecture
- **Ingestion**: Extract text from PDF and TXT files.
- **Embedding & Storage**: Chunk the text and generate embeddings. Store them in a local Vector DB (e.g., ChromaDB or FAISS).
- **Retrieval**: Perform semantic search to retrieve the top-k relevant chunks.
- **Generation**: Pass the context and user query to an LLM (e.g., via OpenAI API or local model) to generate an answer.

## Acceptance Criteria
- System successfully ingests a provided sample PDF and text file.
- Text is chunked with appropriate overlap (e.g., 1000 tokens, 200 overlap).
- Vector database successfully stores and retrieves embeddings.
- Generation includes citations/references to the retrieved source chunks.
- All code is well-documented and modularized for educational purposes.

## Constraints
- **Budget**: Cost per query must be < $0.01.
- **Latency**: End-to-end response time must be < 2 seconds.
- **Scaffolding**: Boilerplate code is provided for the vector DB connection and LLM API calls, leaving the core RAG logic for the learner to implement.
