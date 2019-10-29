// import the express package
const express = require("express");

// initalise the server app
const app = express();


// serve automatically all files in the './public' folder
app.use(express.static("public"));

// serve the index.html file when visiting the homepage
app.get("/", (request, response) => response.sendFile(__dirname + "/index.html"));


// port to listen on
const port = process.env.PORT || 3000;

// start the server on the given port
app.listen(port, () => console.log(`server listening on port ${port}`));