const userRepository = require("../repositories/userRepository")

const getUsers = async () => {
    return await userRepository.findAll();
}

module.exports = {
    getUsers
};