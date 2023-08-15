// RequestType    Description
// GET	    Retrieve data from the server.
// POST	    Send data to the server for processing or to create/update.
// PUT	    Update or replace existing data on the server.
// DELETE	Remove data from the server.


// Server instantiation
const express = require('express'); // Import the Express framework
const app = express(); // Create an Express application instance

//use to parse request.body in express 
const bodyParser = require('body-parser');

// specifically parse json data and add it to request.body
app.use(bodyParser.json());

// Activate the server on port 3000
app.listen(3000, () => {
    console.log("Server Started at port no.3000"); // Start listening and log a message
});

// Routes

// GET route for the root URL '/'
app.get('/', (request, response) => {
    response.send("Namstey Dunia"); // Send "Namstey Dunia" as response
});

// POST route for '/api/cars'
app.post('/api/cars', (request, response) => {
    const { name, brand } = request.body; // Extract 'name' and 'brand' from request body
    console.log(name); // Log the 'name' to the console
    console.log(brand); // Log the 'brand' to the console
    response.send("Car Submitted Successfully"); // Send success response
});

const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost:27017/myDatabase",{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// })
mongoose.connect("mongodb://127.0.0.1/myDatabase",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
// mongoose.connect('mongodb://127.0.0.1/myDatabase')
.then(()=>{console.log("Connection Successful")})
.catch((error)=>{console.log("Received an error",error)})