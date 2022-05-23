const sequelize = require('../../db/sequelise')
const auth = require('../../auth/auth')
const _= require('lodash')

/*
module.exports = (app) => {
  app.get('/api/canal/:code', (req, res) => {
    Canal.findByPk(req.params.code)
      .then(Canal => {
        if(Canal === null) {
          const message = `Le canal demandé n'existe pas. Réessayez avec un autre code.`
          return res.status(404).json({ message })
        }

        const message = 'Un canal a bien été trouvé.'
        res.json({ message, data: Canal })
      })
      .catch(error => {
        const message = `Le canal n'a pas pu être récupéré. Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
      })
  })
}

*/

module.exports = (app) => {
  app.get('/api/canal/:code', async (req, res) => {
    const message = `Une erreur s'est produite veuillez réessayez .`

    try {
      const message = `un canal a bien été retrouver.`
      var records= await sequelize.query(`SELECT * FROM canals WHERE canals.code = $1 ` ,
    {
      bind:[req.params.code]
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