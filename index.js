const express= require('express')
const app= express()
const port= 3000
const bodyParser = require('body-parser')
const sequelize= require('sequelize')
const sequelise= require('./src/db/sequelise')
const morgan= require('morgan')

app
.use(bodyParser.json())
.use(morgan('dev'))

app.get('/', (req,res)=>{
    res.send('Bienvenue sur notre api!')
})

// Methode utulisateurs
require('./src/Endpoint/Utulisateurs/create')(app)
 require('./src/Endpoint/Utulisateurs/update')(app)
 require('./src/Endpoint/Utulisateurs/delete')(app)
// require('./src/Endpoint/methode utulisateurs/login')(app)
 require('./src/Endpoint/Utulisateurs/findAll')(app)
 require('./src/Endpoint/Utulisateurs/findBypk')(app)
// Methode Agents
 require('./src/Endpoint/Agent/createAgent')(app)
 require('./src/Endpoint/Agent/updateAgent')(app)
 require('./src/Endpoint/Agent/deleteAgent')(app)
  require('./src/Endpoint/Agent/findAllAgent')(app)
 require('./src/Endpoint/Agent/findAgentByPk')(app)
// Methode Canal
require('./src/Endpoint/Canal/create_canal')(app)
 require('./src/Endpoint/Canal/update_canal')(app)
 require('./src/Endpoint/Canal/delete_canal')(app)
 require('./src/Endpoint/Canal/findAllCanal')(app)
 require('./src/Endpoint/Canal/findCanalByPk')(app)
// Methode Clients
require('./src/Endpoint/Client/createClient')(app)
 require('./src/Endpoint/Client/updateClient')(app)
 require('./src/Endpoint/Client/deleteClient')(app)
  require('./src/Endpoint/Client/findAllClient')(app)
require('./src/Endpoint/Client/findClientByPk')(app)
// Methode conversation
require('./src/Endpoint/Conversations/createConv')(app)
 require('./src/Endpoint/Conversations/updateConv')(app)
 require('./src/Endpoint/Conversations/deleteConv')(app)
require('./src/Endpoint/Conversations/findConvByPk')(app)
require('./src/Endpoint/Conversations/findAllConv')(app)
// Methode Messages
 require('./src/Endpoint/Message/createMess')(app)
 require('./src/Endpoint/Message/updateMess')(app)
 require('./src/Endpoint/Message/deleteMess')(app)
 require('./src/Endpoint/Message/findMessBypk')(app)
 require('./src/Endpoint/Message/findAllMess')(app)

// Ecoute du serveur
app.listen(port, ()  => console.log(`Serveur ${port} a l'écoute`))