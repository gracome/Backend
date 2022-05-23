module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Agent', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        
      },
      login: {
        type: DataTypes.STRING,
        unique: {
          msg: 'Le login est déjà pris.',
          allowNull: false,
          validate:{
            isSTRING:{msg: "Utulisez uniquement des chaines de caractère"},
            notNULL:{msg: "le login est une propriété requise"}
          }
        }
    },
      
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          isSTRING: { msg: "Utulisez uniquement des lettres"},
          notNULL:{msg: "le password est une propriété requise"}
        }
        },
       
    })
  }
  
  



  