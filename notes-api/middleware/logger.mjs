export function logger(req, res, next) {
    const start = Date.Now();
        res.on("finish", () => {
            console.log(req.method, req.url, res.statusCode, Date.Now() - start, "ms")
        })
        next()
}