module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Conversation', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Nbre_mess: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
          isInt:{msg: "veillez utulisez des entiers"}
        }
      },
      Blocked: {
        type: DataTypes.BOOLEAN
      }
    })
  }
  