import { data } from "../Database/config.db.js";
import { Sequelize } from "sequelize";

export const usuario = data.sequelize.define('usuarios', {
    id_usuario:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: Sequelize.STRING,
    apellidos: Sequelize.STRING,
    usuario: Sequelize.STRING,
    contrasena: Sequelize.STRING
});