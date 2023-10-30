const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Driver', {
    id :{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len : [3, 20],
      }
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull:false,
      validate : {
        len : [3, 20],
      }
    },
    description : {
      type: DataTypes.TEXT,
      allowNull: false,
      validate : {
        len : [20, 500]
      }
    },
    image : {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        isUrl : true,
      }
    },
    nationality : {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        len : [3, 30],
      }
    },
    dateOfBirth : {
      type: DataTypes.DATE,
      allowNull: false,
      validate : {
        isDate : true,
      }
    },
  },
  {
    timestamps : false,
  });
};