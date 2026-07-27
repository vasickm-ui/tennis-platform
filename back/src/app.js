const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const userRoutes = require("./routes/userRoutes");

const app = express();


// middleware
app.use(express.json());


// Swagger config
const swaggerSpec = swaggerJsdoc({
    definition: {
        openapi: "3.0.0",
        info: {
            title: "User Service API",
            version: "1.0.0",
        },
    },
    apis: ["src/routes/*.js"],
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// routes
app.use("/users", userRoutes);


// health check
app.get("/", (req, res) => {
    res.send("User service running");
});

BigInt.prototype.toJSON = function () {
    return Number(this);
}


module.exports = app;