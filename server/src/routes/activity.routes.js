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

router.post('/', async (req, res) => {
    const { name, dificultad, duracion, temporada, countryId } = req.body;
    try {
        const newActivity = await Activity.create({ name, dificultad, duracion, temporada })
        //se asocia la nueva actividad con el pais
        await newActivity.addActivityCountries(countryId);
        // busca la actividad en la db
        const activityWithCountries = await Activity.findOne({
            where: { id: newActivity.id },
            include: [
                {
                    model: Country,
                    as: "activityCountries",
                },
            ],
        });
        res.status(200).send(activityWithCountries)
    } catch (error) {
        res.status(404).send(error)
    }
})

module.exports = router;