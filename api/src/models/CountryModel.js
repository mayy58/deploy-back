const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Country",
    {
      id: {
        type: DataTypes.CHAR(3), //(ID de tres letras del país)
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      flag: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      continent: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capital: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subregion: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      area: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      population: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      createdInDb: {
        //distincion entre lo creado en base de datos y lo que trae la API. los que cree en la db van a tener esta propiedad y el resto no
        type: DataTypes.BOOLEAN, //para saber si esta creado con la base de datos
        allowNull: false,
        defaultValue: true, //todos los que yo cree en la db van a tener el valor true por defatult
      },
    },
    {
      timestamps: false,
    }
  );
};
