const sequelize = require('../../db/sequelise')
const { Op } = require('sequelize')
const auth = require('../../auth/auth')
const _= require('lodash')
/*

const capitalize = (str) => str.charAt(0).toUpperCase() + str.substring(1)

module.exports = (app) => {
  app.get('/api/users', (req, res) => {
    if(req.query.name) {
      const name = req.query.name
      const limit = parseInt(req.query.limit) || 5

      if(name.length < 2) {
        const message = `Le terme de recherche doit contenir au minimum 2 caractères.`
        return res.status(400).json({ message })        
      }

      return users.findAndCountAll({ 
        where: { 
          name: {
            [Op.or]: {
              [Op.like]: `%${name}%`,
              [Op.startsWith]: capitalize(name)
            }
          }
        },
        order: ['name'],
        limit: limit
      })
      .then(({count, rows}) => {
        const message = `Il y a ${count} qui correspondent au terme de recherche ${name}.`
        return res.json({ message, data: rows })
      })
    } 
    else {
      users.findAll({ order: ['name'] })
      .then(users => {
        const message = 'La liste des utulisateurs a bien été récupéré.'
        res.json({ message, data: users })
      })
      .catch(error => {
        const message = `La liste des utulisateurs n'a pas pu être récupéré. 
                         Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
      })
    }
  })
}
*/

module.exports = (app) => {
  app.get('/api/users', async (req, res) => {
    const message = `Une erreur s'est produite veuillez réessayez .`

    try {
      const message = `la liste des utulisateurs a bien été retrouver.`
      var records= await sequelize.query(`SELECT * FROM users` );

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