// importing packages into server-side
const express = require('express');
// importing path module (sends back the react build from server and builds)
const path = require('path')

// define a PORT for our server to run
const PORT = 8000;

// initialize an express application
const app = express();

// host react app as static files
app.use(express.static(path.resolve(__dirname, '../client/build')))

// define some routes
// const HTTPMETHODS = ["GET", "POST", "PUT", "PATCH", "DELETE"];
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})
app.get('/api', (req, res) => {
    // do something when client requests this route
    // send message back to client
    res.json({message: "Yo yo from the server!"});
})

// start app at PORT
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});


