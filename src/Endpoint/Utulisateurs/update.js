const sequelize = require('../../db/sequelise')
const { ValidationError, UniqueConstraintError } = require('sequelize')
const auth = require('../../auth/auth')
const _= require('lodash')

/*
module.exports = (app) => {
  app.put('/api/users/:id',  (req, res) => {
    const id = req.params.id
    users.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      return users.findByPk(id).then(users => {
        if(users === null) {
          const message = `L'utulisateur demandé n'existe pas. Réessayez avec un autre identifiant.`
          return res.status(404).json({ message })
        }

        const message = `L'utulisateur ${users.username} a bien été modifié.`
        res.json({message, data: users })
      })
    })
    .catch(error => {
      if(error instanceof ValidationError) {
        return res.status(400).json({ message: error.message, data: error });
      }
      if(error instanceof UniqueConstraintError) {
        return res.status(400).json({ message: 'error.message', data: error });
      }
      const message = `L'utulisateur n'a pas pu être modifié. Réessayez dans quelques instants.`
      res.status(500).json({ message, data: error })
    })
  })
}
*/

module.exports = (app) => {
  app.put('/api/users/:id', async (req, res) => {
    const message = `Une erreur s'est produite veuillez réessayez .`

    try {
      const message = `L'utulisateur a bien été modifier.`
      var records= await sequelize.query(`UPDATE users SET username = $1 WHERE users.id= $2 ` ,
      {
        bind: [req.body.username, req.params.id ]
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