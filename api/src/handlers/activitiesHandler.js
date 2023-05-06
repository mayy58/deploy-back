const {
  createActivityDb,
  getActivities,
} = require("../controllers/activitiesController");

const postCreateActivity = async (req, res) => {
  const { name, difficulty, duration, season, country } = req.body;
  try {
    if (!name || !difficulty || !duration || !season) {
      res.status(404).send("Faltan datos");
    } else {
      const result = await createActivityDb(
        name,
        difficulty,
        duration,
        season,
        country
      );
      res
        .status(200)
        .json({ message: "Actividad creada exitosamente", data: result });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const getAllActivities = async (req, res) => {
  try {
    const result = await getActivities();
    res.status(200).send(result);
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ error: error.message });
  }
};

module.exports = { postCreateActivity, getAllActivities };
