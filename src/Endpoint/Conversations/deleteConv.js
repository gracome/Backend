const sequelize = require('../../db/sequelise')
const auth = require('../../auth/auth')
const _= require('lodash')
/*

module.exports = (app) => {
  app.delete('/api/users/:id', (req, res) => {
    Conversation.findByPk(req.params.id)
      .then(Conversation => {        
        if(Conversation === null) {
          const message = `La conversation n'existe pas. Réessayez avec un autre identifiant.`
          return res.status(404).json({ message })
        }

        return Conversation.destroy({ where: { id: Conversation.id } })
        .then(_ => {
          const message = `La conversation avec l'identifiant n°${Conversation.id} a bien été supprimé.`
          res.json({message, data: Conversation })
        })
      })
      .catch(error => {
        const message = `La conversation n'a pas pu être supprimé. Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
      })
  })
}
*/

module.exports = (app) => {
  app.delete('/api/conversation/:id', async (req, res) => {
    const message = `Une erreur s'est produite veuillez réessayez .`

    try {
      const message = `La conversation ${req.params.id} a bien été supprimer.`
      var records= await sequelize.query(`DELETE FROM conversations  WHERE conversations.id= $1 ` ,
      {
       bind:[ req.params.id]
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