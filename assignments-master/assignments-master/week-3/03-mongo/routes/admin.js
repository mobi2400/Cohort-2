import { Router } from "express";
const adminMiddleware = require("../middleware/admin");
const router = Router();
import { Admin } from "../db/index.js";

router.post('/signup', (req, res) => {
   const username = req.body.username;
   const password = req.body.password;
    Admin.findOne({ username: username, password: password })
        .then(admin => {
            if (admin) {
                res.status(403).json({ msg: "Admin already exists" });
            } else{
                Admin.create({ username: username, password: password })
                .then(admin => {
                    res.json({ msg: "Admin created successfully" });
                })
            }
    }).catch(err => {
        res.status(500).json({ msg: "Internal server error" });
    });

});

router.post('/courses', adminMiddleware, (req, res) => {
    
});

router.get('/courses', adminMiddleware, (req, res) => {

});

module.exports = router;