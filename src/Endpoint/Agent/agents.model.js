const sequelize = require('../../db/sequelise');
const { ValidationError, UniqueConstraintError } = require('sequelize');
const auth = require('../../auth/auth');
const _ = require('lodash');
const message = `Une erreur s'est produite veuillez réessayez .`

module.exports.create = async (data) => {
    try {
        const message = `L'agent ${data.login} a bien été crée.`;
        let records = await sequelize.query(`INSERT INTO agents (login,password) VALUES ($1,$2)`,
            {
                bind: [data.login, data.password],
            }
        );

        return records;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
module.exports.delete = async (data) => {
    try {
        const message = `L'agent ${data.id} a bien été supprimer.`
        var records = await sequelize.query(`DELETE FROM agents  WHERE agents.id= $1 `,
            {
                bind: [data.id]
            }

        );
        return records;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
module.exports.update = async(data) => {
      try {
        const message = `L'agent a bien été modifier.`
        var records= await sequelize.query(`UPDATE agents SET login = $1 WHERE users.id= $2 ` ,
        {
          bind: [req.body.login, req.params.id ]
        }
        
        );
        return records;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports.findAll = async(data) => {
      try {
        const message = `La liste des agents a bien été récuper.`
        var records= await sequelize.query(`SELECT * FROM agents ` ,
      
        );
        return records;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
module.exports.findByPk = async(data) => {
      try {
        const message = `un agent a bien été retrouver.`
        var records= await sequelize.query(`SELECT * FROM agents WHERE agents.id = $1 ` ,
        {
          bind: [data.id]
        }
        );
        return records;
    } catch (error) {
        console.error(error);
        throw error;
    }
}