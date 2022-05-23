const sequelize = require('../../db/sequelise');
const { ValidationError, UniqueConstraintError } = require('sequelize');
const auth = require('../../auth/auth');
const _ = require('lodash');
const message = `Une erreur s'est produite veuillez réessayez .`

module.exports.create = async(data) => {
      try {
        const message = `La conversation a bien été créer.`
        var records= await sequelize.query(`INSERT INTO conversations (Nbre_mess,Blocked) VALUES ($1,$2)` ,
        {
          bind: [data.Nbre_mess, data.Blocked],
        }
        );
        return records;
      } catch (error) {
          console.error(error);
          throw error;
      }
  };
  
  

module.exports.delete =async(app) => {   
   try {
        const message = `La conversation ${data.id} a bien été supprimer.`
        var records= await sequelize.query(`DELETE FROM conversations  WHERE conversations.id= $1 ` ,
        {
         bind:[ data.id]
        }
        );
        return records;
      } catch (error) {
          console.error(error);
          throw error;
      }
  };
  
  
module.exports.update =async (data) => {
      try {
        const message = `La conversation a bien été modifier.`
        var records= await sequelize.query(`UPDATE conversations SET Nbre_mess = $1 WHERE conversations.id= $2 ` ,
        
        {
          bind:[data.Nbre_mess, data.id]
        }
        );
        return records;
    } catch (error) {
        console.error(error);
        throw error;
    }
};



module.exports.findAll =async (data) => {
      try {
        const message = `La liste des conversations a bien été récupérer.`
        var records= await sequelize.query(`SELECT * FROM conversations ` ,
        
        );
        return records;
      } catch (error) {
          console.error(error);
          throw error;
      }
  };
  
  

module.exports.findByPk = async(data) => {
      try {
        const message = `une conversation a bien été retrouver.`
        var records= await sequelize.query(`SELECT * FROM conversations WHERE conversations.id = $1 ` ,
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

