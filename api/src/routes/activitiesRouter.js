const { Router } = require("express");
const {
  postCreateActivity,
  getAllActivities,
} = require("../handlers/activitiesHandler");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const activitiesRouter = Router();

activitiesRouter.post("/create", postCreateActivity); //funcionando
activitiesRouter.get("/", getAllActivities);

module.exports = activitiesRouter;
