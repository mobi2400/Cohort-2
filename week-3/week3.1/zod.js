import express from "express";
const app = express();
import {z} from "zod"; // Import the zod library
app.use(express.json()); // Parse JSON request bodies
port=3000;
const schema = z.array(zod.number()); // Define a schema for an array of numbers
/*
expecting this input from the user
{
    email:string => eamill
    password: atleest 8 characters
    country : "IN" or "US"
}
*/
// schema for the user input in zod 
const userSchema = z.object({
    email:z.string().email(), // email should be valid
    password:z.string().min(8), 
    country:z.enum(["IN","US"])

}) 

app.post('/healthycheckup', (req, res) => { 
    const kidney = req.body.kidney;
    const kidneyLength = kidney.length;
    // safeParse method validates the input and return the response as success or failure
    const response = schema.safeParse(kidney); // Validate the kidney array
    if (!response.success) {
        return res.status(400).send("Invalid kidney input");
    }
    res.send("you hvaed " + kidneyLength + " kidneys");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});