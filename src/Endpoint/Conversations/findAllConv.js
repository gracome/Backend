const sequelize = require('../../db/sequelise')
const auth = require('../../auth/auth')
const _= require('lodash')

module.exports = (app) => {
    app.get('/api/conversation', async (req, res) => {
      const message = `Une erreur s'est produite veuillez réessayez .`
  
      try {
        const message = `La liste des conversations a bien été récupérer.`
        var records= await sequelize.query(`SELECT * FROM conversations ` ,
        
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