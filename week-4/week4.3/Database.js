 /* Database usually allow 4 access to 4 primitive
 1. Create
 2. Read
 3. Update
 4. Delete
 Popularly known as CRUD
 */
 
 import express from "express";
 import mongoose from "mongoose";// eventually we will be using prisma as it is industry standard

 const app = express();
 const port = 3000;

 app.use(express.json());



/*
-> define a schema(though mongodb is schemaless)[but it is a good practice to define a schema in moogoose]

*/

// Create
 const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
 });
 const User = mongoose.model('User', userSchema);
 User.create({
   name: req.body.name,
   email: req.body.email,
   password: req.body.password
  
 })

 // Read
  User.findById('1');
  User.findOne({ // find only one user
    name:"mobi"
  })
  User.find({ // find all users with name mobi
    name:"mobi"
  
  })
 // update
  User.updateOne(
    {'id':'1'},
    {$push:{purchaseCourses:courseId}}
  )
  User.update( // update all users
    {},{
    premium : true}
  )
  //delete
   User.deleteMany({});
   User.deleteOne({name:"mobi"},
    {}
  );

  /*
  3 jargons to know in database
  1.Cluster -> a collection of databases and tables{seperate table    for each ttypes of data}
  2.Database
  3.table
  */