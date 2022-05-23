const sequelize = require('../../db/sequelise')
const { ValidationError, UniqueConstraintError } = require('sequelize')
const auth = require('../../auth/auth')
const _= require('lodash')

/*

module.exports = (app) => {
  app.put('/api/Message/:id', auth, (req, res) => {
    const id = req.params.id
    Message.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      return Message.findByPk(code).then(Message => {
        if(Message === null) {
          const message = `Le message demandé n'existe pas. Réessayez avec un autre identifiant.`
          return res.status(404).json({ message })
        }

        const message = `Le message ${Message.name} a bien été modifié.`
        res.json({message, data: Message })
      })
    })
    .catch(error => {
      if(error instanceof ValidationError) {
        return res.status(400).json({ message: error.message, data: error });
      }
      if(error instanceof UniqueConstraintError) {
        return res.status(400).json({ message: 'error.message', data: error });
      }
      const message = `Le message n'a pas pu être modifié. Réessayez dans quelques instants.`
      res.status(500).json({ message, data: error })
    })
  })
}

*/
module.exports = (app) => {
  app.put('/api/message/:id', async (req, res) => {
    const message = `Une erreur s'est produite veuillez réessayez .`

    try {
      const message = `Le message a bien été modifier.`
      var records= await sequelize.query(`UPDATE messages SET new_mess = $1 WHERE messages.id= $2 ` ,
      {
        bind:[req.body.new_mess, req.params.id ]
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