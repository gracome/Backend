const sequelize = require('../../db/sequelise')
const auth = require('../../auth/auth')
const _= require('lodash')
/*
module.exports = (app) => {
  app.delete('/api/canal/:code', (req, res) => {
    Canal.findByPk(req.params.code)
      .then(Canal => {        
        if(Canal === null) {
          const message = `Le canal n'existe pas. Réessayez avec un autre code.`
          return res.status(404).json({ message })
        }

        return Canal.destroy({ where: { code: Canal.code } })
        .then(Canal => {
          const message = `Le canal avec le code n°${Canal.code} a bien été supprimé.`
          res.json({message, data: Canal })
        })
      })
      .catch(error => {
        const message = `Le canal n'a pas pu être supprimé. Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
      })
  })
}
*/

module.exports = (app) => {
  app.delete('/api/canal/:code', async (req, res) => {
    const message = `Une erreur s'est produite veuillez réessayez .`

    try {
      const message = `Le canal ${req.params.code} a bien été supprimer.`
      var records= await sequelize.query(`DELETE FROM canals  WHERE canals.code= $1` ,
      {
        bind:[req.params.code ]
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