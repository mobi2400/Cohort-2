const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
import { Admin, Course } from "../db/index.js";
const jwt = require("jsonwebtoken");

// Admin Routes
router.post('/signup',  (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    User.findOne({ username: username, password: password })
        .then(async admin => {
            if (admin) {
                res.status(403).json({ msg: "Admin already exists" });
            } else{
               await Admin.create({ username: username, password: password })
                .then(admin => {
                    res.json({ msg: "Admin created successfully" });
                })
            }
    })

});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
     const user = await User.findOne({ username: username, password: password });
     if(user){
        const token = jwt.sign({username: username}, 'JWT_SECRET', {expiresIn: '1h'});
        res.json({
            token: token
        })
     }
     else{
        res.status(403).json({
            message: 'User does not exist'
        })
     }

});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;