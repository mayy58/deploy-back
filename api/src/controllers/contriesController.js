const { getAllCountriesDB } = require("../controllers/getApiController");
const { Country, Activity } = require("../db");

const countryByName = async (name) => {
  const countriesAll = await getAllCountriesDB();
  try {
    if (name) {
      const countryName = await countriesAll.filter(
        (country) =>
          country.name &&
          country.name.toLowerCase().includes(name.toLowerCase())
      );
      if (countryName.length === 0)
        throw new Error(`Country name ${name} not found`);
      return countryName;
    } else {
      return countriesAll;
    }
  } catch (error) {
    console.log(error);
  }
};

const getDetailById = async (id) => {
  const isValidId = /^[A-Za-z]{3}$/.test(id); // valida que id tenga exactamente 3 letras
  if (!isValidId) {
    throw new Error("El id debe tener exactamente tres letras.");
  }
  try {
    const detailCountry = await getAllCountriesDB();
    const iD = id.toUpperCase();
    return (countryById = await Country.findOne({
      where: { id: iD },
      include: {
        model: Activity,
        attributes: ["name", "difficulty", "duration", "season"],
        through: { atribbutes: [] },
      },
    }));
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  countryByName,
  getDetailById,
};
