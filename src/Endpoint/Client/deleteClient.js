const sequelize = require('../../db/sequelise')
const auth = require('../../auth/auth')
const _= require('lodash')

/*
module.exports = (app) => {
  app.delete('/api/Client/:id', (req, res) => {
    Client.findByPk(req.params.id)
      .then(Client => {        
        if(Client === null) {
          const message = `Le client n'existe pas. Réessayez avec un autre identifiant.`
          return res.status(404).json({ message })
        }

        return Client.destroy({ where: { id: Client.id } })
        .then(Client => {
          const message = `Le client avec l'identifiant n°${Client.id} a bien été supprimé.`
          res.json({message, data: Client })
        })
      })
      .catch(error => {
        const message = `Le client n'a pas pu être supprimé. Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
      })
  })
}
*/

module.exports = (app) => {
  app.delete('/api/client/:id', async (req, res) => {
    const message = `Une erreur s'est produite veuillez réessayez .`

    try {
      const message = `Le client ${req.params.id} a bien été supprimer.`
      var records= await sequelize.query(`DELETE FROM clients  WHERE clients.id= $1 ` ,
      {
        bind:[req.params.id ]
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