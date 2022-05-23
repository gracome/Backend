const sequelize  = require('../../db/sequelise')
const { ValidationError, UniqueConstraintError } = require('sequelize')
const auth = require('../../../src/auth/auth')
const _=require('lodash') 
/*

module.exports = (app) => {
  app.post('/api/canal', (req, res) => {
    Canal.create(req.body)
      .then(Canal => {
        const message = `Le canal ${req.body.lib} a bien été crée.`
        var records=sequelize.query(`INSERT INTO canals (code,lib,Nbre_conv,Total_mess) VALUES ($1,$2,$3,$4)`,
        {
          bind: [1, 'messenger', 25, 300],
         // type: sequelize.QueryTypes.SELECT
        }
        );
        res.json({ message, data: records })
      })
      
      .catch(error => {
        console.log(error) 
        if(error instanceof ValidationError) {
          return res.status(400).json({ message: error.message, data: error });
        }
        if(error instanceof UniqueConstraintError) {
          return res.status(400).json({ message: 'error.message', data: error });
        }
        const message = `Le canal n'a pas pu être ajouté. Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })

      })
  })
 
}

*/

module.exports = (app) => {
  app.post('/api/canal', async (req, res) => {
    const message = `Une erreur s'est produite veuillez réessayez .`

    try {
      const message = `Le canal ${req.body.lib} a bien été crée.`
      var records= await sequelize.query(`INSERT INTO canals (lib,Nbre_conv,Total_mess) VALUES ($1,$2,$3)` ,
      {
        bind: [req.body.lib, req.body.Nbre_conv, req.body.Total_mess],
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