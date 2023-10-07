import fs from 'fs';
const BASE_PATH = "./public";

function isDirectory(path: string) {
  try {
    const stats = fs.statSync(path);
    return stats.isDirectory();
  } catch (error) {
    return false;
  }
}

function generateDirectoryLinks(directoryPath: string) {
  try {
    const files = fs.readdirSync(BASE_PATH + directoryPath);

    return files.map((file: string) => `<a href="${directoryPath != '/' ? directoryPath + '/' : ''}${file}">${file}</a>`).join('\n');
  } catch (error) {
    console.error(`Error reading directory: ${error}`);
    return '';
  }
}

Bun.serve({
  async fetch(req) {
    const filePath = new URL(req.url).pathname;
    console.log('request received for:', BASE_PATH + filePath)
    if (process.env.DIR_LISTING == "true" && isDirectory(BASE_PATH + filePath)) {
      console.log('detected a request for a directory')
      return new Response(`
        <h1>BUNNN file server</h1>
        <pre>${generateDirectoryLinks(filePath)}</pre>`, {
        headers: {
          "Content-Type": "text/html",
        },
      });
    }
    const file = Bun.file(BASE_PATH + filePath);
    return new Response(file);
  },
  error() {
    return new Response(null, { status: 404 });
  },
});