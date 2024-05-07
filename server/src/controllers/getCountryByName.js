const { getAllCountries } = require("./getAllCountries");

const getCountryByName = async (name) => {
    // try {
    //     const countriesList = await getAllCountries();
    //     const matchedCountry = countriesList.filter(country =>
    //         country.name.toLowerCase().includes(name.toLowerCase()));
    //     if (matchedCountry === 0) {
    //         console.log("No se encontró el país buscado")
    //         return null;
    //     }
    //     return matchedCountry;
    // } catch (error) {
    //     console.log(error.message)
    // }
    try {
        const { name } = req.query;
        const matchedCountry = await getAllCountries.findAll({
            where: { name: { [Op.iLike]: `%${name}%` } },
        });
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = { getCountryByName }