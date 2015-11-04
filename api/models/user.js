'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    type: DataTypes.STRING,
    status: {
      type: DataTypes.STRING,
      defaultValue: 'applicant'
    }
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Availability);
      }
    }
  });
  return User;
};
