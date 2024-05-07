const { getAllCountries } = require("./getAllCountries")

const getCountryById = async (id) => {
    try {
        const countriesList = await getAllCountries()
        const countryById = countriesList.find(country => country.id === id);
        if (!countryById) {
            console.log("No se encontró el país buscado");
            return null;
        }
        return countryById;
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = { getCountryById }