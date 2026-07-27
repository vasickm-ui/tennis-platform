const userRoutes = require("express").Router()
const controller = require("../controllers/userController")

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: List of users
 */
userRoutes.get("/", controller.getUsers)
module.exports = userRoutes