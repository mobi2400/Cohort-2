function userMiddleware(req, res, next) {
    const token = req.headers.authorization;
    const words = token.split(' ');
    const jwtToken = words[1];
    const decodedValue = jwt.verify(jwtToken, secret.JWT_SECRET);
    if (decodedValue.username) {
        next();
    } else {
        res.status(403).json({
            msg: "You are not authenticated"
        })
    }

}

module.exports = userMiddleware;