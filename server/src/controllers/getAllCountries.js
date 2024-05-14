const axios = require("axios");
const { Country, Activity } = require("../../src/db")


const getAllCountries = async () => {
    try {
        let res = await axios.get('http://localhost:5000/countries');
        res = res.data;
        let newDB = await res.map(e =>
        ({
            id: e.cca3.toString(),
            name: e.name.common,
            imgBandera: e.flags.png,
            continente: e.continents[0],
            capital: e.capital,
            subregion: e.subregion,
            area: `${e.area} km2`,
            poblacion: e.population
        }))
        let getDB = await Country.findAll();
        if (!getDB.length) {
            await Country.bulkCreate(newDB);
            console.log("Se guardaron los datos correctamente");
        }
        let dbActivities = await Country.findAll({
            include: [
                {
                    model: Activity,
                    as: "countryActivities",
                },
            ],
        });
        // if (getDB.length) {
        //     getDB = await getDB?.filter(e => e.name !== 'French Southern and Antarctic Lands')
        // }
        return dbActivities;
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = { getAllCountries };