const sequelize = require('../../db/sequelise')
const auth = require('../../auth/auth')
const _= require('lodash')
/*

module.exports = (app) => {
  app.get('/api/users/:id', (req, res) => {
    users.findByPk(req.params.id)
      .then(users => {
        if(users === null) {
          const message = `L'utulisateur demandé n'existe pas. Réessayez avec un autre identifiant.`
          return res.status(404).json({ message })
        }

        const message = 'Un utulisateur a bien été trouvé.'
        res.json({ message, data: users })
      })
      .catch(error => {
        const message = `L'utulisateur n'a pas pu être récupéré. Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
      })
  })
}
*/
module.exports = (app) => {
  app.get('/api/users/:id', async (req, res) => {
    const message = `Une erreur s'est produite veuillez réessayez .`

    try {
      const message = `un utulisateur a bien été retrouver.`
      var records= await sequelize.query(`SELECT * FROM users WHERE users.id = $1 ` ,
    
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