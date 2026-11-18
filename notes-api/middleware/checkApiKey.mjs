export function checkApiKey(req, res, next) {
    const key = req.headers['x-api-key']

    if (key !== process.env.API_KEY) {
        res.status(401).json({ error: "Unauthorized"})
        return
    }

    next()
}