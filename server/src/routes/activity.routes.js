const { Router } = require("express");
const router = Router();
const { Country, Activity } = require("../db")

router.get('/', async (req, res) => {
    try {
        let getAll = await Activity.findAll({
            include:
                [
                    { model: Country, as: "activityCountries", attributes: ["id", "name"] },
                ],
        })
        res.send(getAll)
    } catch (error) {
        res.status(404).send(error)
    }
})

/* router.post('/', async (req, res) => {
    const { name, dificultad, duracion, temporada, countryId } = req.body;
    try {
        // Buscar la actividad por nombre
        let [existingActivity, created] = await Activity.findOrCreate({
            where: { name }, // Buscar por el nombre
            defaults: { dificultad, duracion, temporada }, // Valores por defecto si no existe
        });

        if (!created) {
            // Si la actividad ya existe, no la crea de nuevo y devuelve un mensaje de error
            return res.status(400).send({ message: "La actividad con este nombre ya existe." });
        }

        // Si la actividad es nueva, se asocia con el país
        await existingActivity.addActivityCountries(countryId);

        // Buscar la actividad en la base de datos con los países asociados
        const activityWithCountries = await Activity.findOne({
            where: { id: existingActivity.id },
            include: [
                {
                    model: Country,
                    as: "activityCountries",
                },
            ],
        });

        console.log("Hello World", activityWithCountries.name);
        res.status(200).send(activityWithCountries);
    } catch (error) {
        res.status(404).send(error);
    }
}); */

router.post('/', async (req, res) => {
    const { name, dificultad, duracion, temporada, countryId } = req.body;
    try {
        const existingActivity = await Activity.findOne({
            where: { name },
            include: [
                {
                    model: Country,
                    as: "activityCountries",
                    where: { id: countryId },
                },
            ],
        });
        if (existingActivity) {

            return res.status(400).send({ message: "Ya existe esta actividad para el país seleccionado." });
        }


        const newActivity = await Activity.create({ name, dificultad, duracion, temporada });
        await newActivity.addActivityCountries(countryId);


        const activityWithCountries = await Activity.findOne({
            where: { id: newActivity.id },
            include: [
                {
                    model: Country,
                    as: "activityCountries",
                },
            ],
        });
        res.status(200).send(activityWithCountries);
    } catch (error) {
        res.status(404).send(error);
    }
});

/* router.post('/', async (req, res) => {
    const { name, dificultad, duracion, temporada, countryId } = req.body;
    try {
        // Buscar la actividad por nombre
        let existingActivity = await Activity.findOne({
            where: { name },
            include: [
                {
                    model: Country,
                    as: "activityCountries",
                    where: { id: countryId }, // Filtro por el país seleccionado
                },
            ],
        });

        if (existingActivity) {
            // Si la actividad ya existe, verifica si el país está asociado
            const isCountryAssociated = existingActivity.activityCountries.some(country => country.id === countryId);
            if (!isCountryAssociated) {
                // Si el país no está asociado, añádelo
                await existingActivity.addActivityCountries(countryId);
            }
        } else {
            // Si la actividad no existe, créala y asóciala al país
            existingActivity = await Activity.create({ name, dificultad, duracion, temporada });
            await existingActivity.addActivityCountries(countryId);
        }

        // Buscar la actividad en la base de datos con los países asociados
        const activityWithCountries = await Activity.findOne({
            where: { id: existingActivity.id },
            include: [
                {
                    model: Country,
                    as: "activityCountries",
                },
            ],
        });
        res.status(200).send(activityWithCountries);
    } catch (error) {
        res.status(404).send(error);
    }
}); */

module.exports = router;

module.exports = router;