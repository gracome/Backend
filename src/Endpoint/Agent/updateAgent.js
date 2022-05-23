const sequelize = require('../../db/sequelise')
const { ValidationError, UniqueConstraintError } = require('sequelize')
const auth = require('../../auth/auth')
const _= require('lodash')

/*

module.exports = (app) => {
  app.put('/api/Agent/:id',  (req, res) => {
    const id = req.params.code
    Agent.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      return Agent.findByPk(id).then(Agent => {
        if(Agent === null) {
          const message = `L'agent demandé n'existe pas. Réessayez avec un autre identifiant.`
          return res.status(404).json({ message })
        }

        const message = `L'agent ${Agent.id} a bien été modifié.`
        res.json({message, data: Agent })
      })
    })
    .catch(error => {
      if(error instanceof ValidationError) {
        return res.status(400).json({ message: error.message, data: error });
      }
      if(error instanceof UniqueConstraintError) {
        return res.status(400).json({ message: 'error.message', data: error });
      }
      const message = `L'agent n'a pas pu être modifié. Réessayez dans quelques instants.`
      res.status(500).json({ message, data: error })
    })
  })
}
*/

module.exports = (app) => {
  app.put('/api/agent/:id', async (req, res) => {
    const message = `Une erreur s'est produite veuillez réessayez .`

    try {
      const message = `L'agent a bien été modifier.`
      var records= await sequelize.query(`UPDATE agents SET login = $1 WHERE users.id= $2 ` ,
      {
        bind: [req.body.login, req.params.id ]
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
      const message = `L'utulisateur n'a pas pu être modifié. Réessayez dans quelques instants.`
      res.status(500).json({ message, data: error })
    }
  })
 
}