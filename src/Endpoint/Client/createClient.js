const sequelize = require('../../db/sequelise')
const { ValidationError, UniqueConstraintError } = require('sequelize')
const auth = require('../../auth/auth')
const _=require('lodash') 

/*
module.exports = (app) => {
  app.post('/api/client', (req, res) => {
    Client.create(req.body)
      .then(Client => {
        const message = `Le client ${req.body.name} a bien été crée.`
        res.json({ message, data: Client })
      })
      .catch(error => {
        if(error instanceof ValidationError) {
          return res.status(400).json({ message: error.message, data: error });
        }
        if(error instanceof UniqueConstraintError) {
          return res.status(400).json({ message: 'error.message', data: error });
        }
        const message = `Le client n'a pas pu être ajouté. Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
      })
  })
}
*/

module.exports = (app) => {
  app.post('/api/client', async (req, res) => {
    const message = `Une erreur s'est priduite veuillez réessayez .`

    try {
      const message = `Le client ${req.body.name} a bien été crée.`
      var records= await sequelize.query(`INSERT INTO clients (name,adress) VALUES ($1,$2)` ,
      {
        bind: [req.body.name, req.body.adress],
      }
      );
    if(_.isArray(records) ){
      res.json({ message, data: records })
    }else{
      res.json({ error:message })
    }
     
    } catch (error) {
      console.error(error)
      res.status(500).json({ error:message })

      if(error instanceof ValidationError) {
        return res.status(400).json({ message: error.message, data: error });
      }
      if(error instanceof UniqueConstraintError) {
        return res.status(400).json({ message: 'error.message', data: error });
      }
      const message = `Le client n'a pas pu être ajouté. Réessayez dans quelques instants.`
      res.status(500).json({ message, data: error })
    }
  })
 
}