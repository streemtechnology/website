import proxy from "express-http-proxy";
import passport from "passport";
import url from "url";
const ROOT = "http://46.101.241.38:8080";

const options = {
  proxyReqPathResolver: req => url.parse(req.url).pathname
};

export default function proxyRoutes(app) {
  app.post(
    "/api/encode",
    passport.authenticate("apikey-local", { failureRedirect: "/api" }),
    proxy(ROOT, options)
  );
  app.get(
    "/api/status/poll/:id",
    passport.authenticate("apikey-local", { failureRedirect: "/api" }),
    proxy(ROOT, options)
  );
}
