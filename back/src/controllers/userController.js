const userService = require("../services/userService");


const getUsers = async (req,res)=>{

    const users = await userService.getUsers();
    return res.json(users);

};

const getUserById = async (req, res) => {
    const user = await userService.getUserById(req.params.id);
    return res.json(user)
}

const registerUser = async (req, res) => {
    try {
        const {
            email,
            password,
            first_name,
            last_name
        } = req.body

        console.log("REQUEST BODY: ", req.body);

        const user = await userService.registerUser({
            email,
            password,
            first_name,
            last_name
        });

        return res.status(201).json({
            message: "User registred successfully!",
            user: user
        });

    } catch(error) {
        console.error(error.stack);
        return res.status(400).json({
            message: error.message
        });
    }
}

const loginUser = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body;

        console.log("Request body: ", req.body)

        const user = await userService.loginUser({
            email,
            password
        })

        console.log("User we got from service: ", user)

        return res.status(200).json({
            message: "Login successful",
            user: user
        });



    } catch (error) {
        console.error(error.stack);
        return res.status(400).json({
            message: error.message
        });
    }
}

module.exports = {
    getUsers,
    getUserById,
    registerUser,
    loginUser
};