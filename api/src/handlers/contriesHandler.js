const {
  countryByName,
  getDetailById,
} = require("../controllers/contriesController");

const getAllCountries = async (req, res) => {
  const { name } = req.query;

  try {
    const result = await countryByName(name);
    res.status(200).send(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getCountryById = async (req, res) => {
  const { id } = req.params;
  if (!id) res.status(404).json({ error: error.message });
  try {
    const result = await getDetailById(id);
    res.status(200).send(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { getAllCountries, getCountryById };
