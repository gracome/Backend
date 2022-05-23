const sequelize = require('../../db/sequelise')
const { ValidationError, UniqueConstraintError } = require('sequelize')
const auth = require('../../auth/auth')
const _= require('lodash')

/*
module.exports = (app) => {
  app.post('/api/message', (req, res) => {
    Message.create(req.body)
      .then(Message => {
        const message = 'Le message  a bien été crée.'
        res.json({ message, data: Message })
      })
      .catch(error => {
        if(error instanceof ValidationError) {
          return res.status(400).json({ message: error.message, data: error });
        }
        if(error instanceof UniqueConstraintError) {
          return res.status(400).json({ message: 'error.message', data: error });
        }
        const message = `Le message n'a pas pu être ajouté. Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
      })
  })
}
*/

module.exports = (app) => {
  app.post('/api/message', async (req, res) => {
    const message = `Une erreur s'est produite veuillez réessayez .`

    try {
      const message = `Le message a bien été crée.`
      var records= await sequelize.query(`INSERT INTO messages (new_mess) VALUES ($1)` ,
      {
        bind: [ req.body.new_mess],
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
    }
  })
 
}