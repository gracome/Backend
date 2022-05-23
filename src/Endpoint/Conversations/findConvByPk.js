const sequelize = require('../../db/sequelise')
const auth = require('../../auth/auth')
const _= require('lodash')
/*
module.exports = (app) => {
  app.get('/api/Conversation/:id', auth, (req, res) => {
    Conversation.findByPk(req.params.id)
      .then(Conversation => {
        if(Conversation === null) {
          const message = `La conversation demandé n'existe pas. Réessayez avec un autre identifiant.`
          return res.status(404).json({ message })
        }

        const message = 'Une conversation a bien été trouvé.'
        res.json({ message, data: Conversation })
      })
      .catch(error => {
        const message = `La conversation n'a pas pu être récupéré. Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
      })
  })
}
*/

module.exports = (app) => {
  app.get('/api/conversation/:id', async (req, res) => {
    const message = `Une erreur s'est produite veuillez réessayez .`

    try {
      const message = `une conversation a bien été retrouver.`
      var records= await sequelize.query(`SELECT * FROM conversations WHERE conversations.id = $1 ` ,
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