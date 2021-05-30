const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/", (req, res) => {
    app.render(req, res, "/", req.query);
  });

  server.get("/posts", (req, res) => {
    app.render(req, res, "/posts", req.query);
  });

  server.get("/comments", (req, res) => {
    app.render(req, res, "/comments", req.query);
  });

  server.get("/users/:slug/posts", (req, res) => {
    app.render(req, res, "/users/[slug]/posts", req.query);
  });

  server.get("/users/:slug/albums", (req, res) => {
    app.render(req, res, "/users/[slug]/albums", req.query);
  });

  server.get("/starships/:id", (req, res) => {
    app.render(req, res, "/detail", { id: req.params.id });
  });

  server.get("*", (req, res) => {
    handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
