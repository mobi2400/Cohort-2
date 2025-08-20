const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
import { User , Course } from "../db/index.js";

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
     const username = req.body.username;
     const password = req.body.password;
     User.findOne({ username: username, password: password })
        .then( user =>{
            if(user){
                res.status(403).json({ msg: "User already exists" });
            }
            else{
                User.create({ username: username, password: password })
                .then(user => {
                    res.json({ msg: "User created successfully" });
                })
            }
        }
        ).catch(
            err => {
                res.status(500).json({ msg: "Internal server error" });
            }
            )
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    const username = req.headers.username;
    const password = req.headers.password;
    User.findOne({ username: username, password: password })
        .then(user => {
            if (user) {
                res.json({
                    courses: user.courses
                })
            } else {
                res.status(403).json({ msg: "User doesnt exist" });
            }
        });
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
     res.json({
         message: "Course purchased successfully"
     })
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    Course.find({ _id: req.user.purachasedCourses })
        .then(courses => {
            res.json({
                courses: courses
            })
        })
});

module.exports = router