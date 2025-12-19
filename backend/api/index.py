import sys
from pathlib import Path

# Add project root to Python path
ROOT_DIR = Path(__file__).parent.parent
sys.path.append(str(ROOT_DIR))

# Import FastAPI app
from api.main import app  # 👈 THIS LINE IS IMPORTANT
