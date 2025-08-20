import { User } from '../db';
function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;
    User.findOne({ username: username, password: password })
        .then(user => {
            if (user) {
                next();
            } else {
                res.status(403).json({ msg: "User doesnt exist" });
            }
        });
}

module.exports = userMiddleware;