import { QdrantClient } from '@qdrant/js-client-rest';

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'

const client = new QdrantClient({
  url: 'https://127.0.0.1:6333',
  apiKey: 'sdlVp9fPBtj5ukN5hMYLBjaq5sw6QMhF'
});

try {
  const result = await client.getCollections();
  console.log('List of collections:', result.collections);
  // await client.api('collections').getCollections();
} catch (err) {
  console.error('Could not get collections:', err);
}

