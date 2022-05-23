const sequelize = require('../../db/sequelise')
 const { ValidationError, UniqueConstraintError } = require('sequelize')
const auth = require('../../auth/auth')
const _=require('lodash') 
/*
module.exports = (app) => {
  app.post('/api/Agent', auth, (req, res) => {
    Agent.create(req.body)
      .then(Agent => {
        const message = `L'agent ${req.body.name} a bien été crée.`
        res.json({ message, data: Agent })
      })
      .catch(error => {
        if(error instanceof ValidationError) {
          return res.status(400).json({ message: error.message, data: error });
        }
        if(error instanceof UniqueConstraintError) {
          return res.status(400).json({ message: 'error.message', data: error });
        }
        const message = `L'agent n'a pas pu être ajouté. Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
      })
  })
}
*/

module.exports = (app) => {
  app.post('/api/agent', async (req, res) => {
    const message = `Une erreur s'est produite veuillez réessayez .`

    try {
      const message = `L'agent ${req.body.login} a bien été crée.`
      var records= await sequelize.query(`INSERT INTO agents (login,password) VALUES ($1,$2)` ,
      {
        bind: [req.body.login, req.body.password],
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

      
     
    }
  })
 
}
