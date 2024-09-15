export default ({ config }) => ({
    ...config,
    extra: {
      ENDPOINT: process.env.ENDPOINT || 'https://your-api-url.com',
    },
  });
  