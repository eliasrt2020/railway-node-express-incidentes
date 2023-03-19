const express = require("express");
const cors = require("cors");
const app = express();
const incident_routes = require ("./routes/incident")

app.use(cors());


app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/api", incident_routes);

module.exports = app;