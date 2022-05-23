const sequelize = require('../../db/sequelise')
const auth = require('../../auth/auth')
const _= require('lodash')
const agent = require('./agent')
/*
module.exports = (app) => {
  app.get('/api/Agent/:id', auth, (req, res) => {
    Agent.findByPk(req.params.id)
      .then(Agent => {
        if(Agent === null) {
          const message = `L'agent demandé n'existe pas. Réessayez avec un autre identifiant.`
          return res.status(404).json({ message })
        }

        const message = 'Un agent a bien été trouvé.'
        res.json({ message, data: Agent })
      })
      .catch(error => {
        const message = `L'agent n'a pas pu être récupéré. Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
      })
  })
}
*/

module.exports = (app) => {
  app.get('/api/agent/:id', async (req, res) => {
    const message = `Une erreur s'est produite veuillez réessayez .`

    try {
      const message = `un agent a bien été retrouver.`
      var records= await sequelize.query(`SELECT * FROM agents WHERE agents.id = $1 ` ,
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