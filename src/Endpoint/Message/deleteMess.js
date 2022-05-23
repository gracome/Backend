const sequelize = require('../../db/sequelise')
const auth = require('../../auth/auth')
const _= require('lodash')

/*
module.exports = (app) => {
  app.delete('/api/Message/:id',  (req, res) => {
    Message.findByPk(req.params.id)
      .then(Message => {        
        if(Message === null) {
          const message = `Le message n'existe pas. Réessayez avec un autre identifiant.`
          return res.status(404).json({ message })
        }

        return Message.destroy({ where: { id: Message.id } })
        .then(Message => {
          const message = `Le message avec l'identifiant n°${Message.id} a bien été supprimé.`
          res.json({message, data: Message })
        })
      })
      .catch(error => {
        const message = `L'utulisateur n'a pas pu être supprimé. Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
      })
  })
}
*/

module.exports = (app) => {
  app.delete('/api/message/:id', async (req, res) => {
    const message = `Une erreur s'est produite veuillez réessayez .`

    try {
      const message = `Le message ${req.params.id} a bien été supprimer.`
      var records= await sequelize.query(`DELETE FROM messages  WHERE messages.id= $1 ` ,
      {
        bind:[req.params.id]
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