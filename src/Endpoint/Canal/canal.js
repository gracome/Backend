module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Canal', {
      code: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      lib: {
        type: DataTypes.STRING,
        unique: {
          msg: 'Canal déjà enrégistrée.'
        },
        validate:{
          isString:{msg: "veillez utulisez des lettres"}
        }
      },
      Nbre_conv: {
        type: DataTypes.INTEGER,
        validate:{
          isInt:{msg: "veillez utulisez des entiers"}
        }
      },
      Total_mess: {
        type: DataTypes.INTEGER,
        validate:{
          isInt:{msg: "veillez utulisez des entiers"}
        }
    
      },
    })
  }
  