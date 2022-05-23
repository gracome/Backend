module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Client', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
      },
      adress: {
        type: DataTypes.STRING
      }
    })
  }
  