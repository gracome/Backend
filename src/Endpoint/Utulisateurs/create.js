const sequelize = require('../../db/sequelise')
const { ValidationError, UniqueConstraintError } = require('sequelize')
const auth = require('../../auth/auth')
const _=require('lodash') 
const users = require('./users')
/*

module.exports = (app) => {
  app.post('/api/users',  (req, res) => {
    users.create(req.body)
      .then(users => {
        const message = `L'utulisateur ${req.body.username} a bien été crée.`
        res.json({ message, data: users })
      })
      .catch(error => {
        if(error instanceof ValidationError) {
          return res.status(400).json({ message: error.message });
        }
        if(error instanceof UniqueConstraintError) {
          return res.status(400).json({ message: 'error.message', data: error });
        }
        const message = `L'utulisateur n'a pas pu être ajouté. Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
      })
  })

   
}
*/

module.exports = (app) => {
  app.post('/api/users', async (req, res) => {
    
    const message = `Une erreur s'est produite veuillez réessayez .`

    try {
      const message = `L'utulisateur ${req.body.username} a bien été crée.`
      var records= await sequelize.query(`INSERT INTO users (username,password) VALUES ($1,$2)` ,
      {
        bind: [req.body.username, req.body.password],
      }
      );
    if(_.isArray(records) ){
      res.json({ message, data: records })
    }else{
      res.json({ error:message })
    }
    
     
    } catch (error) {
      if(error instanceof ValidationError) {
        return res.status(400).json({ message: error.message });
    }
    if(error instanceof UniqueConstraintError) {
      return res.status(400).json({ message: error.message});
    }
    const message = `L'utulisateur n'a pas pu être ajouté. Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
  }
  })
 
}