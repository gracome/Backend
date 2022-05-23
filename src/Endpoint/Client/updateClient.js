const sequelize = require('../../db/sequelise')
const { ValidationError, UniqueConstraintError } = require('sequelize')
const auth = require('../../auth/auth')
const _=require('lodash')

/*
module.exports = (app) => {
  app.put('/api/client/:id', auth, (req, res) => {
    const id = req.params.code
    Client.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      return Client.findByPk(id).then(Client => {
        if(Client === null) {
          const message = `Le client demandé n'existe pas. Réessayez avec un autre identifiant.`
          return res.status(404).json({ message })
        }

        const message = `Le client ${Client.name} a bien été modifié.`
        res.json({message, data: Client })
      })
    })
    .catch(error => {
      if(error instanceof ValidationError) {
        return res.status(400).json({ message: error.message, data: error });
      }
      if(error instanceof UniqueConstraintError) {
        return res.status(400).json({ message: 'error.message', data: error });
      }
      const message = `Le client n'a pas pu être modifié. Réessayez dans quelques instants.`
      res.status(500).json({ message, data: error })
    })
  })
}
*/

module.exports = (app) => {
  app.put('/api/client/:id', async (req, res) => {
    const message = `Une erreur s'est produite veuillez réessayez .`

    try {
      const message = `Le client a bien été modifier.`
      var records= await sequelize.query(`UPDATE clients SET name = $1 WHERE clients.id= $2 ` ,
      {
        bind:[req.body.name,req.params.id ]
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
      const message = `Le client n'a pas pu être ajouté. Réessayez dans quelques instants.`
      res.status(500).json({ message, data: error })
    }
  })
 
}