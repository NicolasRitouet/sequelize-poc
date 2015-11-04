'use strict';
module.exports = function(sequelize, DataTypes) {
  var Availability = sequelize.define('Availability', {
    dayOfWeek: DataTypes.STRING,
    hourOfDay: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Availability.belongsTo(models.User);
      }
    }
  });
  return Availability;
};
