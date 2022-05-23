const { Sequelize, DataTypes } = require('sequelize')
const clientModel= require('../Endpoint/Client/client')
const agentModel= require('../Endpoint/Agent/agent')
const messageModel = require('../Endpoint/Message/message')
const conversationModel= require('../Endpoint/Conversations/conversation')
const canalModel= require('../Endpoint/Canal/canal')
const userModel= require('../Endpoint/Utulisateurs/users')
const bcrypt = require('bcrypt')

const sequelize= new Sequelize(
    'Omnicanal',
    'root',
    '',
    {
      host: 'localhost',
      dialect: 'mariadb',
      dialectOption:{
        timezone: 'Etc/GMT-2'
      },
      logging: false
    }
  )

  // Authentification
sequelize.authenticate()
.then(_=> console.log('La connexion a été établi'))
.catch(error =>console.error(`impossible de se connecter a la base de donnée ${error}`))



// Synchronisation
const Client =  clientModel(sequelize, DataTypes)
const Agent =  agentModel(sequelize, DataTypes)
const Canal =  canalModel(sequelize, DataTypes)
const Message =  messageModel(sequelize, DataTypes)
const Conversation =  conversationModel(sequelize, DataTypes)
 const users= userModel(sequelize,DataTypes)


sequelize.sync()
.then(_=>{  
    console.log('la connexion de la base de donnée omnicanal a bien été synchronisé')
}),


module.exports =sequelize