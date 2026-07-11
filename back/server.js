require("dotenv").config();

const express = require("express");
const db = require("./db");

const app = express();

const PORT = 3000;


app.get("/", (req, res) => {
    res.send("Backend ining");
});


// Test database connection
app.get("/test-db", async (req, res) => {

    try {
        const result = await db.query("SELECT NOW()");

        res.json({
            message: "Database connected",
            time: result.rows[0]
        });

    } catch(error) {

        console.error(error);
        res.status(500).json({
            error: "Database connection failed"
        });

    }

});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});