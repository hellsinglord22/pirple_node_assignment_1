const http = require('http');

module.exports = {  

  createApp: () => {
    const routeCache = {};

    const server = http.createServer((request, response) => {
      const { method, url } = request;
      const routeCacheKey = generateCacheKey(method, url);
      const handler = routeCache[routeCacheKey] || notFoundHandler;
      handler(request, response);
    });

    return {

      get: (url, handler) => {
        const method = 'GET';
        const routeCacheKey = generateCacheKey(method, url);
        routeCache[routeCacheKey] = handler;
      },

      post: (url, handler) => {
        const method = 'POST';
        const routeCacheKey = generateCacheKey(method, url);
        routeCache[routeCacheKey] = handler;
      },

      listen: (port, callback) => {
        server.listen(port, callback);
      }

    }

  }

}

function generateCacheKey(method, url) {
  return `${method}.${url}`;
}

function notFoundHandler(req, res) {
  res.writeHead(404);
  res.end('Not Found!!!');
}


// 1. unit test
// 2. no duplication 
// 3. send the intent of the programer 
// 4. reduce the number of entities ( classes, methods, variable )