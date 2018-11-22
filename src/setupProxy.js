const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  const target = process.env.WEBPACK_PROXY;
  if (target === undefined) {
    return;
  }

  app.use(
    proxy(
      (pathname, req) => {
        return (
          req.method !== "GET" ||
          (req.headers.accept &&
            req.headers.accept.indexOf("*/*") === -1 &&
            req.headers.accept.indexOf("text/html") === -1)
        );
      },
      {
        target,
        logLevel: "silent",
        onProxyReq: proxyReq => {
          // Browers may send Origin headers even with same-origin
          // requests. To prevent CORS issues, we have to change
          // the Origin to match the target URL.
          if (proxyReq.getHeader("origin")) {
            proxyReq.setHeader("origin", target);
          }
        },
        secure: false,
        changeOrigin: true,
        ws: true,
        xfwd: true
      }
    )
  );
};
