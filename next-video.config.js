/** @type {import('next-video').NextVideoConfig} */
const nextVideo = {
  provider: 'vercel-blob',
  folder: 'videos',
  // Use local files instead of Mux
  providerConfig: {
    'vercel-blob': {
      // This will use local files
    }
  }
};

export default nextVideo;
