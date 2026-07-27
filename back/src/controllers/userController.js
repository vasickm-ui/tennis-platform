const userService = require("../services/userService");


const getUsers = async (req,res)=>{

    const users = await userService.getUsers();
    return res.json(users);

};

const getUserById = async (req, res) => {
    const user = await userService.getUserById(req.params.id);
    return res.json(user)
}


module.exports = {
    getUsers,
    getUserById
};