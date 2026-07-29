const userRepository = require("../repositories/userRepository")
const bcrypt = require("bcrypt")

const getUsers = async () => {
    return await userRepository.findAll();
}

const getUserById = async (id) => {
    return await userRepository.findById(id);
};

const registerUser = async (userData) => {
    console.log("User data sent to service from controller", userData)
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

const loginUser = async (loginData) => {

    console.log("Service got this data from controller: ", loginData)

    const user = await userRepository.findByEmail(loginData.email);
    if(!user){
        throw Error("User with this email does not exists!");
        return;
    }

    console.log("Service is processing this data: ", user)
    console.log("This is what bcrypt compares ", loginData.password, user.password_hash)

    const correctPassword = await bcrypt.compare(
        loginData.password,
        user.password_hash
    )

    if(!correctPassword){
        throw Error("Incorrect password!");
        return;
    }

    return user;
}



module.exports = {
    getUsers,
    getUserById, 
    registerUser,
    loginUser
};