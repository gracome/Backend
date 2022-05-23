const sequelize= require('../../db/sequelise')
const { ValidationError, UniqueConstraintError } = require('sequelize')
const auth = require('../../auth/auth')
const _= require('lodash')

/*
module.exports = (app) => {
  app.post('/api/conversation',  (req, res) => {
    Conversation.create(req.body)
      .then(Conversation => {
        const message = `La conversation ${req.body.id} a bien été crée.`
        res.json({ message, data: Conversation })
      })
      .catch(error => {
        if(error instanceof ValidationError) {
          return res.status(400).json({ message: error.message, data: error });
        }
        if(error instanceof UniqueConstraintError) {
          return res.status(400).json({ message: 'error.message', data: error });
        }
        const message = `La conversation n'a pas pu être ajouté. Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
      })
  })
}
*/

module.exports = (app) => {
  app.post('/api/conversation', async (req, res) => {
    const message = `Une erreur s'est priduite veuillez réessayez .`

    try {
      const message = `La conversation a bien été créer.`
      var records= await sequelize.query(`INSERT INTO conversations (Nbre_mess,Blocked) VALUES ($1,$2)` ,
      {
        bind: [req.body.Nbre_mess, req.body.Blocked],
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
      return message
    }
  })
 
}