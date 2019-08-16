'use strict';
module.exports = (sequelize, DataTypes) => {
  const outfit = sequelize.define('outfit', {
    color: DataTypes.STRING,
    size: DataTypes.FLOAT,
    type: DataTypes.STRING,
    material: DataTypes.STRING,
    dinoId: DataTypes.INTEGER
  }, {});
  outfit.associate = function(models) {
    // associations can be defined here
    models.outfit.belongsTo(models.dino);
  };
  return outfit;
};
