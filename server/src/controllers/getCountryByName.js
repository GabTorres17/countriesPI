const { Op } = require("sequelize");
const { Country } = require("../../src/db");


const getCountryByName = async (name) => {
    try {
        let matchedCountry = await Country.findAll({
            where: { name: { [Op.iLike]: `%${name}%` } },
        });
        return matchedCountry;
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = { getCountryByName }