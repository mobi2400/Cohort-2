import { Router } from "express";
const adminMiddleware = require("../middleware/admin");
const router = Router();
import { Admin } from "../db/index.js";
import { Course } from "../db/index.js";

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
//adminMiddleware checks if the admin is authenticated
router.post('/courses', adminMiddleware, (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const  price = req.body.price;
    const imageLink = req.body.imageLink;
    Course.create({ title: title, description: description, price: price, imageLink: imageLink })
        .then(course => {
            res.json({ msg: "Course created successfully" , courseId: newCourse._id });
        }).catch(
            err => {
                res.status(500).json({ msg: "Internal server error" });
            }
        )    
});

router.get('/courses', adminMiddleware, (req, res) => {
    course.find({},
        then( courses =>{
            res.json({
                courses: courses

            });
        })
    )

});

module.exports = router;