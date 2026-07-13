const prisma = require("../config/prisma")

const findAll = async () => {
    return prisma.person.findMany();
};


module.exports = {
    findAll
}