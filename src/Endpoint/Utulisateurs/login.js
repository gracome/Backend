const { users } = require('../../db/sequelise')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

module.exports = (app) => {
  app.post('/api/login', (req, res) => {

    users.findOne({ where: { username: req.body.username } }).then(users => {

      if(!users) {
        const message = `L'utilisateur demandé n'existe pas.`
        return res.status(404).json({ message })
      }

      return bcrypt.compare(req.body.password, users.password).then(isPasswordValid => {
        if(!isPasswordValid) {
          const message = `Le mot de passe est incorrect.`
          return res.status(401).json({message})
        }

        const token = jwt.sign(
            { userId: users.id },
            privateKey,
            { expiresIn: '24h' }
          );
  
          const message = `L'utilisateur a été connecté avec succès`;
          return res.json({ message, data: users, token })
        })
      })
      .catch(error => {
        const message = `L'utilisateur n'a pas pu être connecté. Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
      })
    })
  }