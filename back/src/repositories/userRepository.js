const prisma = require("../config/prisma")

const findAll = async () => {
    return prisma.person.findMany();
};

const findById = async (id) => {
    return prisma.person.findUnique({
        where : {
            id: BigInt(id)
        }
    });
};

module.exports = {
    findAll,
    findById
}