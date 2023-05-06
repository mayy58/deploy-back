const axios = require("axios");
const { Country, Activity } = require("../db");

async function getApiData() {
  try {
    const response = await axios.get("https://restcountries.com/v3/all");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function saveApiData() {
  const countries = await getApiData();
  await Promise.all(
    countries.map(async (c) => {
      let {
        cca3,
        name,
        flags,
        continents,
        capital,
        subregion,
        area,
        population,
      } = c;
      await Country.findOrCreate({
        where: { id: cca3 },
        defaults: {
          name: name.common,
          flag: flags[0],
          continent: continents[0],
          capital: capital ? capital[0] : "Not found",
          subregion: subregion ? subregion : "Not found",
          area: area,
          population: population,
        },
      });
    })
  );
}

async function getDbInfo() {
  return await Country.findAll({
    include: {
      model: Activity,
      attributes: ["name", "difficulty", "duration", "season"],
      through: {
        attributes: [],
      },
    },
  });
}

async function getAllCountriesDB() {
  await saveApiData();
  const dbInfo = await getDbInfo();
  return dbInfo;
}

module.exports = { getAllCountriesDB };
