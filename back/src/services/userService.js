const userRepository = require("../repositories/userRepository")

const getUsers = async () => {
    return await userRepository.findAll();
}

const getUserById = async (id) => {
    return await userRepository.findById(id);
};

module.exports = {
    getUsers,
    getUserById
};