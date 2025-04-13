
from qdrant_client import QdrantClient
from qdrant_client.models import Distance, VectorParams

client = QdrantClient(url="https://pc.com:6333", verify=False, api_key="sdlVp9fPBtj5ukN5hMYLBjaq5sw6QMhF")

client.create_collection(
  collection_name="test_collection",
  vectors_config=VectorParams(size=4, distance=Distance.DOT),
)
