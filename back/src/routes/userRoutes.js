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

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get user by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: User id
 *     responses:
 *       200:
 *         description: One user
 */
userRoutes.get("/:id", controller.getUserById)
module.exports = userRoutes