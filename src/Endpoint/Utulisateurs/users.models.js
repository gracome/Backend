const sequelize = require('../../db/sequelise')
const { ValidationError, UniqueConstraintError } = require('sequelize')
const auth = require('../../auth/auth')
const _=require('lodash') 
const message = `Une erreur s'est produite veuillez réessayez .`

module.exports.create = async(data) => {
      try {
        const message = `L'utulisateur ${data.username} a bien été crée.`
        var records= await sequelize.query(`INSERT INTO users (username,password) VALUES ($1,$2)` ,
        {
          bind: [data.username, data.password],
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
        const message = `L'utulisateur ${data.id} a bien été supprimer.`
        var records= await sequelize.query(`DELETE FROM users  WHERE users.id= $1 ` ,
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
  
  

  module.exports.update = async(data) => {
      try {
        const message = `L'utulisateur a bien été modifier.`
        var records= await sequelize.query(`UPDATE users SET username = $1 WHERE users.id= $2 ` ,
        {
          bind: [data.username, data.id ]
        }
        
        );
        return records;
      } catch (error) {
          console.error(error);
          throw error;
      }
  };
  
  

  module.exports.findAll =async(data)=>{
      try {
        const message = `la liste des utulisateurs a bien été retrouver.`
        var records= await sequelize.query(`SELECT * FROM users` );
       
        return records;
      } catch (error) {
          console.error(error);
          throw error;
      }
  };
  
  module.exports.findBypk = async(data) => {
      try {
        const message = `un utulisateur a bien été retrouver.`
        var records= await sequelize.query(`SELECT * FROM users WHERE users.id = $1 ` ,
      
        {
          bind:[data.id]
        }
        );
       return records;
    } catch (error) {
        console.error(error);
        throw error;
    }
  }