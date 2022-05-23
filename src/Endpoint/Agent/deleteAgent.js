const sequelize = require('../../db/sequelise')
const auth = require('../../auth/auth')
const _=require('lodash')
/*
module.exports = (app) => {
  app.delete('/api/Agent/:id', (req, res) => {
    Agent.findByPk(req.params.id)
      .then(Agent => {        
        if(Agent === null) {
          const message = `L'agent n'existe pas. Réessayez avec un autre identifiant.`
          return res.status(404).json({ message })
        }

        return Agent.destroy({ where: { id: users.id } })
        .then(_ => {
          const message = `L'agent avec l'identifiant n°${users.id} a bien été supprimé.`
          res.json({message, data: Agent })
        })
      })
      .catch(error => {
        const message = `L'agent n'a pas pu être supprimé. Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
      })
  })
}
*/

module.exports = (app) => {
  app.delete('/api/agent/:id', async (req, res) => {
    const message = `Une erreur s'est produite veuillez réessayez .`

    try {
      const message = `L'agent ${req.params.id} a bien été supprimer.`
      var records= await sequelize.query(`DELETE FROM agents  WHERE agents.id= $1 ` ,
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