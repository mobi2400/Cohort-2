/* mongoDB
In each DB,it lets you create databases
In each table,it lets you dump JSON DATA
It is Schemaless
It scales well and is a decent choice for most use cases
*/
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mobi:<password>@cluster0.o2i01ql.mongodb.net/test');

const User = mongoose.model('User', { name: String,email:String,password:String }); // Define a model

const user = new User({ name: 'Zildjian',email:'yKU7M@example.com',password:'1234' }); // Create a user
user.save().then(() => {
    console.log('User saved successfully'); });

