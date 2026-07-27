const prisma = require("../config/prisma")


const findByEmail = async (email) => {
    return await prisma.users.findUnique({
        where: {
            email: email
        }
    });
}

const registerUser = async (userData) => {
    return await prisma.users.create({
        data: {
            email: userData.email,
            password_hash: userData.password_hash,
            first_name: userData.first_name,
            last_name: userData.last_name
        }
    });
}

module.exports = {
    findByEmail,
    registerUser
}