import { request, response } from "express";
import { usuario } from "../Models/Usuario.model.js";
import nodemialer from "nodemailer";
import bcrypt from 'bcryptjs';

export const create = async (req=request, res=response) =>{
    const {nombre, apellidos, contrasena} = req.body;

    const usua = await new usuario({nombre, apellidos, usuario:req.body.usuario, contrasena});
    const salts = bcrypt.genSaltSync();
    usua.contrasena = bcrypt.hashSync(contrasena, salts);

    await usua.save();

    res.json({msg: 'Usuario registrado', usua});

}

export const getUsuarios = async(req, res=response) => {
    const {count, rows} = await usuario.findAndCountAll();

    res.json({
        msg: count > 0 ? 'Usuarios obtenidos' : 'No se encontraron registros',
        users: rows,
        cantidad: count
    })
}

export const deleteUsuario = async(req = request, res = response) => {
    const id = req.body.id;
    const eliminado = await usuario.destroy({where: {id_usuario: id}});

    res.json({
        msg: eliminado > 0 ? 'Usuario eliminado' : 'No se encontro el usuairo o no existe',
        id,
        eliminado
    });
}

export const updateUsuario = async (req = request, res = response) => {
    const id = req.body.id;
    const {nombre, apellidos, contrasena} = req.body;

    const salts = bcrypt.genSaltSync();
    const pass = bcrypt.hashSync(contrasena, salts);

    const user = await usuario.update({nombre, apellidos, usuario:req.body.usuario, contrasena:pass}, {where: {id_usuario: id}});

    res.json({
        msg: user[0] > 0 ? 'Usuario actualziado' : 'Usuario no actualizado',
        nombre,
        user
    });
}

export const getOneUsuario = async (req = request, res = response) => {
    const id = req.body.id;
    const {count, rows} = await usuario.findAndCountAll({where: {id_usuario: id}});


    res.json({
        msg: count > 0 ? 'Usuario encontrado' : 'No se encontro al usuario',
        user: count > 0 ? rows[0] : []
    })
}