const userService = require("../services/userService");


const getUsers = async (req,res)=>{

    const users = await userService.getUsers();
    console.log(users);
    return res.json(users);

};


module.exports = {
    getUsers
};