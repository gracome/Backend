const sequelize = require('../../db/sequelise')
const auth = require('../../auth/auth')
const _= require('lodash')
/*
module.exports = (app) => {
  app.get('/api/Message/:id', auth, (req, res) => {
    user.findByPk(req.params.id)
      .then(Message => {
        if(Message === null) {
          const message = `Le message demandé n'existe pas. Réessayez avec un autre identifiant.`
          return res.status(404).json({ message })
        }

        const message = 'Un message a bien été trouvé.'
        res.json({ message, data: Message })
      })
      .catch(error => {
        const message = `Le message n'a pas pu être récupéré. Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
      })
  })
}
*/

module.exports = (app) => {
  app.get('/api/message/:id', async (req, res) => {
    const message = `Une erreur s'est produite veuillez réessayez .`

    try {
      const message = `un message a bien été retrouver.`
      var records= await sequelize.query(`SELECT * FROM messages WHERE messages.id = $1 ` ,
    {
      bind: [req.params.id]
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