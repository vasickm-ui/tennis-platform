const express = require("express");

const userRoutes = require("./routes/userRoutes");

const app = express();


// middleware
app.use(express.json());


// routes
app.use("/users", userRoutes);


// health check
app.get("/", (req, res) => {
    res.send("User service running");
});


module.exports = app;