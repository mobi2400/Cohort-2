const { Admin } = require("../db");
function adminMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;
    Admin.findOne({ username: username, password: password })
        .then(admin => {
            if (admin) {
                next();
            } else {
                res.status(403).json({ msg: "Admin doesnt exist" });
            }
        });
}

module.exports = adminMiddleware;