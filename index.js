const connectToMongo = require('./db');
const express = require('express');
const event_routes = require("./routes/event.js");
const bodyParser = require("body-parser");
connectToMongo();

const app = express()
const port = 5000

app.use(express.json())

app.use(bodyParser.json());
app.use("/",event_routes);


app.listen(port, ()=>{
    console.log(`first project listening on port http://localhost:${port}`)
})
