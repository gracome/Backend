const sequelize = require('../../db/sequelise')
const { ValidationError, UniqueConstraintError } = require('sequelize')
const auth = require('../../auth/auth')
const _= require('lodash')

/*

module.exports = (app) => {
  app.put('/api/conversation/:id', auth, (req, res) => {
    const id = req.params.id
    Conversation.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      return Conversation.findByPk(id).then(Conversation => {
        if(Conversation === null) {
          const message = `La conversation demandé n'existe pas. Réessayez avec un autre idetifiant.`
          return res.status(404).json({ message })
        }

        const message = `La conversation ${Conversation.id} a bien été modifié.`
        res.json({message, data: Conversation })
      })
    })
    .catch(error => {
      if(error instanceof ValidationError) {
        return res.status(400).json({ message: error.message, data: error });
      }
      if(error instanceof UniqueConstraintError) {
        return res.status(400).json({ message: 'error.message', data: error });
      }
      const message = `La conversation n'a pas pu être modifié. Réessayez dans quelques instants.`
      res.status(500).json({ message, data: error })
    })
  })
}
*/

module.exports = (app) => {
  app.put('/api/conversation/:id', async (req, res) => {
    const message = `Une erreur s'est produite veuillez réessayez .`


    try {
      const message = `La conversation a bien été modifier.`
      var records= await sequelize.query(`UPDATE conversations SET Nbre_mess = $1 WHERE conversations.id= $2 ` ,
      
      {
        bind:[req.body.Nbre_mess, req.params.id]
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
      if(records === null) {
        const message = `La conversation demandé n'existe pas. Réessayez avec un autre idetifiant.`
        return res.status(404).json({ message })
      }
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