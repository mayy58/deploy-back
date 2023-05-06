const { Router } = require("express");
const countriesRouter = require("./countriesRouter");
const activitiesRouter = require("./activitiesRouter");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const mainRouter = Router();

mainRouter.use("/countries", countriesRouter);
mainRouter.use("/activities", activitiesRouter);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = mainRouter;
