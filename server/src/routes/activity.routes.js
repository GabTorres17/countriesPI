const { Router } = require("express");
const router = Router();
const { Country, Activity } = require("../db")

router.get('/', async (req, res) => {
    try {
        let getAll = await Activity.findAll()
        res.send(getAll)
    } catch (error) {
        res.status(404).send(error)
    }
})

router.post('/', async (req, res) => {
    const { name, dificultad, duracion, temporada, countryId } = req.body;
    try {
        const newActivity = await Activity.create({ name, dificultad, duracion, temporada })
        const countryDB = await Country.findAll({
            where: { name: countryId }
        })
        await newActivity.addActivityCountries(countryDB)
        res.status(200).send("Activity created succesfully")
    } catch (error) {
        res.status(404).send(error)
    }
})

module.exports = router;