const userRepository = require("../repositories/userRepository")

const getUsers = () => {
    userRepository.findAll();
}

module.exports = {
    getUsers
};