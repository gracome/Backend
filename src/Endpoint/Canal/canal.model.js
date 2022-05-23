const sequelize = require('../../db/sequelise');
const { ValidationError, UniqueConstraintError } = require('sequelize');
const auth = require('../../auth/auth');
const _ = require('lodash');
const message = `Une erreur s'est produite veuillez réessayez .`

module.exports.create = async (data) => {


  try {
    const message = `Le canal ${data.lib} a bien été crée.`
    var records = await sequelize.query(`INSERT INTO canals (lib,Nbre_conv,Total_mess) VALUES ($1,$2,$3)`,
      {
        bind: [data.lib, data.Nbre_conv, data.Total_mess],
      }
    );
    return records;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports.delete = async (data) => {

  try {
    const message = `Le canal ${data.code} a bien été supprimer.`
    let records = await sequelize.query(`DELETE FROM canals  WHERE canals.code= $1`,
      {
        bind: [data.code]
      }
    );
    return records;
  } catch (error) {
    console.error(error);
    throw error;
  }

}

module.exports.update = async (data) => {
  try {
    const message = `Le canal a bien été modifier.`
    let records = await sequelize.query(`UPDATE canals SET lib =' $1' WHERE canals.code= $2 `,
      {
        bind: [data.lib, data.code]
      }

    );

    return records;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports.findAll = async (data) => {
  try {
    const message = `La liste des canaux a bien été retrouver.`
    let records = await sequelize.query(`SELECT * FROM canals`);


    return records;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports.findByPK = async (data) => {
  try {
    const message = `un canal a bien été retrouver.`
    let records = await sequelize.query(`SELECT * FROM canals WHERE canals.code = $1 `,
      {
        bind: [data.code]
      }

    );

    return records;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
