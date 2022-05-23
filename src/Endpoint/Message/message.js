module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Message', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      new_mess: {
        type: DataTypes.STRING,
      }
     
    })
  }

  