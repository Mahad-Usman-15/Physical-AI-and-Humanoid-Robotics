import sys
import os

# Add the project root to sys.path
script_dir = os.path.dirname(__file__)
project_root = os.path.abspath(os.path.join(script_dir, "..", ".."))
sys.path.insert(0, project_root)

from backend.src.database import create_tables

if __name__ == "__main__":
    print("Attempting to create database tables...")
    create_tables()
    print("Database tables creation process completed.")
