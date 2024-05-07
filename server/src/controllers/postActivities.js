const { Country, Activity } = require("../db")

const postActivities = async (req, res) => {
    try {
        const { name, dificultad, duracion, temporada, countryId } = req.body;
        const newActivity = await Activity.create({
            name,
            dificultad,
            duracion,
            temporada,
            countryId
        })

        // await newActivity.addActivityCountries(countryId)
        // newDB.findAll({
        //     where: { id: newActivity.id },
        //     include: [
        //         {
        //             model: Country,
        //         },
        //     ],
        // });
        return newActivity;
    } catch (error) {
        console.log(error.message)
    }
};

module.exports = { postActivities }