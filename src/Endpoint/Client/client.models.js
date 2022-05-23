const sequelize = require('../../db/sequelise')
const { ValidationError, UniqueConstraintError } = require('sequelize')
const auth = require('../../auth/auth')
const _ = require('lodash')
const message = `Une erreur s'est priduite veuillez réessayez .`

module.exports.create = async (data) => {
    try {
        const message = `Le client ${data.name} a bien été crée.`
        var records = await sequelize.query(`INSERT INTO clients (name,adress) VALUES ($1,$2)`,
            {
                bind: [data.name, data.adress],
            }
        );
        return records;
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: message })
    }
}
module.exports.delete = async (data) => {
    try {
        const message = `Le client ${data.id} a bien été supprimer.`
        var records = await sequelize.query(`DELETE FROM clients  WHERE clients.id= $1 `,
            {
                bind: [data.id]
            }
        );
        return records;
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: message })
    }
}

module.exports.update =async (data) => {
      try {
        const message = `Le client a bien été modifier.`
        var records= await sequelize.query(`UPDATE clients SET name = $1 WHERE clients.id= $2 ` ,
        {
          bind:[data.name,data.id ]
        }
        
        );
        return records;
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: message })
    }
}

module.exports.findAll =async (data) => {
      try {
        const message = `la liste des clients a bien été retrouver.`
        let records= await sequelize.query(`SELECT * FROM users WHERE users.id = $1 ` ,
      {
        bind:[ data.id]
      }
        
        );
        return records;
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: message })
    }
}
module.exports.findBypk =async (data) => {
      try {
        const message = `un client a bien été retrouver.`
        var records= await sequelize.query(`SELECT * FROM clients`
     
        );
        return records;
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: message })
    }
      }
    
