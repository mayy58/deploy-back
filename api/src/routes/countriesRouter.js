const { Router } = require("express");
const {
  getAllCountries,
  getCountryById,
} = require("../handlers/contriesHandler");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const countriesRouter = Router();

countriesRouter.get("/", getAllCountries);

countriesRouter.get("/:id", getCountryById);

module.exports = countriesRouter;
