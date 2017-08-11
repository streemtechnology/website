import proxy from "express-http-proxy";
import passport from "passport";
const ROOT = "http://46.101.241.38:8080";

export default function proxyRoutes(app) {
  app.post(
    "/api/encode",
    passport.authenticate("apikey-local", { failureRedirect: "/api" }),
    proxy(ROOT)
  );
  app.use(
    "/api/status/poll/:id",
    passport.authenticate("apikey-local", { failureRedirect: "/api" }),
    proxy(ROOT)
  );
}
