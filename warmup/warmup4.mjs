function logMethod(req, res, next) {
  const method = req.method;
  const url = req.url;
  console.log(method, url);
  next();
}

function notFound(req, res) {
  res.status(404).json({ error: "Not found" });
}
