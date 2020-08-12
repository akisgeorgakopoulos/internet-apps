const express = require('express');


// Initialize express server
const server = express();


// Fetch routes
//const home = require('./routes/home');
const medicine = require('./routes/medicine');


// Use Routes
//server.use('/', home);
server.use('/Medicine', medicine);

server.get('/',(req,res)=> {

    //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
    res.send("Home");

});

// Configure port
const port = 5000;

// Listen to specified port
server.listen(port, () => {
	console.log(`Express_Server listening on port: ${port}`);
});