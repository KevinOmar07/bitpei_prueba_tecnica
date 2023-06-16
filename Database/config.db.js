import Sequelize  from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASS,{
    host: process.env.HOST,
    dialect: 'mysql'
});

sequelize.sync({force: false})
    .then(() => {
        console.log('Conexión exitosa');
    }).catch((err) => {
        console.log(`Ocurrio un error: ${err}`);
    })

export const data = {sequelize};
