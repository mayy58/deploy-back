const { Activity, Country } = require("../db");

const createActivityDb = async (
  name,
  difficulty,
  duration,
  season,
  country
) => {
  const [newActivity, created] = await Activity.findOrCreate({
    where: { name: name },
    defaults: {
      difficulty: difficulty,
      duration: duration,
      season: season,
    },
  });
  if (created) {
    const countries = await Country.findAll({ where: { name: country } });
    if (!countries) {
      throw new Error("Country not found");
    }
    await newActivity.addCountry(countries);
    return newActivity;
  } else {
    throw new Error("The activity already exists");
  }
};

const getActivities = async () => {
  const activities = await Activity.findAll({
    include: {
      model: Country,
      attributes: ["id", "name", "capital", "subregion"],
      through: { attributes: [] },
    },
  });
  if (activities.length === 0) {
    throw new Error("No se encontraron actividades.");
  }
  return activities;
};

module.exports = { createActivityDb, getActivities };
