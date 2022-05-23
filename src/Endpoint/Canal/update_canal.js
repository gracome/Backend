const sequelize = require('../../db/sequelise')
const { ValidationError, UniqueConstraintError } = require('sequelize')
const auth = require('../../auth/auth')
const _= require('lodash')
/*

module.exports = (app) => {
  app.put('/api/canal/:code',  (req, res) => {
    const id = req.params.code
    Canal.update(req.body, {
      where: { code: id }
    })
    .then(_ => {
      return Canal.findByPk(id).then(Canal => {
        if(Canal === null) {
          const message = `Le canal demandé n'existe pas. Réessayez avec un autre code.`
          return res.status(404).json({ message })
        }

        const message = `Le canal ${Canal.name} a bien été modifié.`
        res.json({message, data: Canal })
      })
    })
    .catch(error => {
      if(error instanceof ValidationError) {
        return res.status(400).json({ message: error.message, data: error });
      }
      if(error instanceof UniqueConstraintError) {
        return res.status(400).json({ message: 'error.message', data: error });
      }
      const message = `Le canal n'a pas pu être modifié. Réessayez dans quelques instants.`
      res.status(500).json({ message, data: error })
    })
  })
}
*/

module.exports = (app) => {
  app.put('/api/canal/:code', async (req, res) => {
    const message = `Une erreur s'est produite veuillez réessayez .`

    try {
      const message = `Le canal a bien été modifier.`
      var records= await sequelize.query(`UPDATE canals SET lib =' $1' WHERE canals.code= $2 ` ,
      {
        bind: [req.body.lib, req.params.code]
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
      const message = `Le canal n'a pas pu être modifié. Réessayez dans quelques instants.`
      res.status(500).json({ message, data: error })
    
    }
  })
 
}