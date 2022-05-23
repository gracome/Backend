const sequelize = require('../../db/sequelise')
const { ValidationError, UniqueConstraintError } = require('sequelize')
const auth = require('../../auth/auth')
const _= require('lodash')
const message = `Une erreur s'est produite veuillez réessayez .`

module.exports.create = async (data) => {
   
      try {
        const message = `Le message a bien été crée.`
        var records= await sequelize.query(`INSERT INTO messages (new_mess) VALUES ($1)` ,
        {
          bind: [ data.new_mess],
        }
        );
        return records;
      } catch (error) {
          console.error(error);
          throw error;
      }
  };
  
  

  module.exports.delete = async(data) => {
      try {
        const message = `Le message ${data.id} a bien été supprimer.`
        var records= await sequelize.query(`DELETE FROM messages  WHERE messages.id= $1 ` ,
        {
          bind:[data.id]
        }
        );
        return records;
      } catch (error) {
          console.error(error);
          throw error;
      }
  };
  
  
  module.exports.update = async(data) => {
      try {
        const message = `Le message a bien été modifier.`
        var records= await sequelize.query(`UPDATE messages SET new_mess = $1 WHERE messages.id= $2 ` ,
        {
          bind:[req.body.new_mess, req.params.id ]
        }
        
        );
        return records;
    } catch (error) {
        console.error(error);
        throw error;
    }
};


  module.exports.findAll = async(data) => {
      try {
        const message = `La liste des message a bien été récupérer.`
        var records= await sequelize.query(`SELECT * FROM messages ` ,
        
        );
        return records;
      } catch (error) {
          console.error(error);
          throw error;
      }
  };
  
  

      module.exports.findByPk = async(data) => {
          try {
            const message = `un message a bien été retrouver.`
            var records= await sequelize.query(`SELECT * FROM messages WHERE messages.id = $1 ` ,
          {
            bind: [data.id]
          }
            );
            return records;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

