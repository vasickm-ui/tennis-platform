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

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - first_name
 *               - last_name
 *               - email
 *               - password_hash
 *             properties:
 *               first_name:
 *                 type: string
 *                 example: Nikola
 *               last_name:
 *                 type: string
 *                 example: Vasic
 *               email:
 *                 type: string
 *                 example: nikola@gmail.com
 *               password_hash:
 *                 type: string
 *                 example: password123
 *     responses:
 *       201:
 *         description: User created successfully
 */
userRoutes.post("/register", controller.registerUser)

module.exports = userRoutes
