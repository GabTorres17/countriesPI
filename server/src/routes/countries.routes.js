const { Router } = require("express");
const { getAllCountries } = require("../controllers/getAllCountries");
const { getCountryById } = require("../controllers/getCountryById");
const { getCountryByName } = require("../controllers/getCountryByName");
const router = Router();
const { Country, id } = require('../models/Country');

router.get('/', async (req, res) => {
  try {
    const api = await getAllCountries();
    res.status(200).json(api);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    let getById = await getCountryById(id)
    if (!getById) {
      return res.status(404).json({ error: "No se encontró el país buscado" })
    }
    res.status(200).json(getById);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" })
  }
}
)

router.get('/', async (req, res) => {
  const { name } = req.query;
  try {
    // let getByName = await getCountryByName(name)
    // if (!getByName || !Array.isArray(getByName)) {
    //   return res.status(404).json({ error: "No se encontró el país buscado" })
    // }
    let getByName = await getCountryByName(name)
    if (!getByName) {
      return res.status(404).json({ error: "Country Not Found" })
    }
    res.status(200).json(getByName);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error " })
  }
})

module.exports = router;
