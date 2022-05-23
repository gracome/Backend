const sequelize = require('../../db/sequelise')
const auth = require('../../auth/auth')
const _= require('lodash')
/*
module.exports = (app) => {
  app.get('/api/Client/:id', auth, (req, res) => {
    Client.findByPk(req.params.id)
      .then(Client => {
        if(Client === null) {
          const message = `Le client demandé n'existe pas. Réessayez avec un autre identifiant.`
          return res.status(404).json({ message })
        }

        const message = 'Un client a bien été trouvé.'
        res.json({ message, data: Client })
      })
      .catch(error => {
        const message = `Le client n'a pas pu être récupéré. Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
      })
  })
}
*/

module.exports = (app) => {
  app.get('/api/client/:id', async (req, res) => {
    const message = `Une erreur s'est produite veuillez réessayez .`

    try {
      const message = `un client a bien été retrouver.`
      var records= await sequelize.query(`SELECT * FROM clients WHERE clients.id = ${req.params.id}` ,
    
      
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

