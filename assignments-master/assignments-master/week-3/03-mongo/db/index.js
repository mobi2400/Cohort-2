import mongoose from 'mongoose';
import {z} from 'zod';

// Connect to MongoDB
mongoose.connect('mongodb+srv://mobi:1234@cluster0.o2i01ql.mongodb.net/test');

// Define schemas

 const AdminSchema = z.object({
     username:z.string(),
     password:z.string()
     
 })

const UserSchema = z.object(
    {
    // Schema definition here
    username: String,
    password: String,
    purachasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
}
)
const CourseSchema = z.object({
    // Schema definition here
    title: String,
    description: String,
    imageLink: String,
    price: Number
})

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}