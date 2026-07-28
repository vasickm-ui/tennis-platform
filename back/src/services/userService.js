const userRepository = require("../repositories/userRepository")
const bcrypt = require("bcrypt")

const getUsers = async () => {
    return await userRepository.findAll();
}

const getUserById = async (id) => {
    return await userRepository.findById(id);
};

const registerUser = async (userData) => {
    console.log("User data sent to service from controller:", userData)
    const existingUser = await userRepository.findByEmail(userData.email);

    if (existingUser) {
        throw Error("User with this email adress already exists!");
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const newUser = await userRepository.registerUser({
        first_name: userData.first_name,
        last_name: userData.last_name,
        email: userData.email,
        password_hash: hashedPassword
    });

    return newUser;

}



module.exports = {
    getUsers,
    getUserById, 
    registerUser
};