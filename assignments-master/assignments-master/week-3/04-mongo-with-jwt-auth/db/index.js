const mongoose = require('mongoose');
import {z} from 'zod';

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URI);

// Define schemas
const AdminSchema = z.object({
     username:z.string(),
     password:z.string()
});

const UserSchema = z.object({
    username:z.string(),
    password:z.string(),
    purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});

const CourseSchema = z.object({
    // Schema definition here
    title: z.string(),
    description: z.string(),
    price: z.number(),
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}