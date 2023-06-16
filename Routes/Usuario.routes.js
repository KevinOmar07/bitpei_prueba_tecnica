import { Router } from "express";
import { create, deleteUsuario, getOneUsuario, getUsuarios, updateUsuario } from "../Controllers/Usuario.controller.js";
import { check } from "express-validator";
import { validarCampos } from "../Helpers/Validar-campos.js";

const router = Router();

/**
* @openapi
* '/usuario/create':
*  post:
*     tags:
*     - Usuarios
*     summary: Registrar a un usuario
*     requestBody:
*      required: true
*      content:
*        application/json:
*           schema:
*            type: object
*            required:
*              - nombre
*              - apellidos
*              - usuario
*              - contrasena
*            properties:
*              nombre:
*                type: string
*                default: Kevin
*              apellidos:
*                type: string
*                default: Nuricumbo
*              usuario:
*                type: string
*                default: KevinOmar
*              contrasena:
*                type: string
*                default: kevin123
*     responses:
*      200:
*        description: Este endpoint es para poder crear nuevos usuarios. para poder hacerlo se necesitan 4 datos, nombre, apellidos, usuario y contraseña.
*      400:
*        description: Bad Request
*      404:
*        description: Not Found
*/

router.post('/create', [
    check('nombre', 'El nombre es invalido').not().isEmpty().isString(),
    check('apellidos', 'Los apellidos son invalidos').not().isEmpty().isString(),
    check('usuario', 'El usuario es invalido').not().isEmpty().isString(),
    check('contrasena', 'La contrasena es obligatoria').not().isEmpty().isString(),
    validarCampos
], create);

/**
 * @openapi
 * '/usuario/get':
 *  get:
 *     tags:
 *     - Usuarios
 *     summary: Obtener todos los usuarios registrados
 *     requestBody:
 *      required: false  
 *     responses:
 *      200:
 *        description: Este endpoint es para poder obtener todos los usurios registrados en la base de datos. Para consumir este servicio no es neceario enviar ningun parametro.
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */
router.get('/get', getUsuarios);

/**
  * @openapi
  * '/usuario/getOne':
  *  post:
  *     tags:
  *     - Usuarios
  *     summary: Obtener los datos de un usuario en especifico
  *     requestBody:
  *      required: true
  *      content:
  *        application/json:
  *           schema:
  *            type: object
  *            required:
  *              - id 
  *            properties:
  *              id:
  *                type: int
  *                default: 1
  *     responses:
  *      200:
  *        description: Este endpoint es para poder obtener los datos de un usuario en especifico, se necesita enviar el id para poder encontrarlo.
  *      400:
  *        description: Bad Request
  *      404:
  *        description: Not Found
  */
router.post('/getOne', [
    check('id', 'El id debe ser un entero').isInt(),
    check('id', 'El id es obligatorio').not().isEmpty(),
    validarCampos
], getOneUsuario);

/**
  * @openapi
  * '/usuario/delete':
  *  delete:
  *     tags:
  *     - Usuarios
  *     summary: Borrar un usuario
  *     requestBody:
  *      required: true
  *      content:
  *        application/json:
  *           schema:
  *            type: object
  *            required:
  *              - id 
  *            properties:
  *              id:
  *                type: int
  *                default: 1
  *     responses:
  *      200:
  *        description: Este endpoint es para eliminar un usuario, se necesita enviar el id para saber que usuario eliminar
  *      400:
  *        description: Bad Request
  *      404:
  *        description: Not Found
  */
router.delete('/delete', [
    check('id', 'El id debe ser un entero').isInt(),
    validarCampos
],deleteUsuario);

/**
* @openapi
* '/usuario/update':
*  put:
*     tags:
*     - Usuarios
*     summary: Actualizar datos de un usuario
*     requestBody:
*      required: true
*      content:
*        application/json:
*           schema:
*            type: object
*            required:
*              - id
*              - nombre
*              - apellidos
*              - usuario
*              - contrasena
*            properties:
*              id:
*                type: int
*                default: 1
*              nombre:
*                type: string
*                default: Omar
*              apellidos:
*                type: string
*                default: Gutierrez
*              usuario:
*                type: string
*                default: OmarNG
*              contrasena:
*                type: string
*                default: kevin1234
*     responses:
*      200:
*        description: Este endpoint es para actualizar los datos de algun usuario. Se necesita enviar el id asi como todos los datos, nombre, apellido, usuario, contrasena
*      400:
*        description: Bad Request
*      404:
*        description: Not Found
*/
router.put('/update', [
    check('id', 'El id debe ser un entero').isInt(),
    check('nombre', 'El nombre es invalido').not().isEmpty().isString(),
    check('apellidos', 'Los apellidos son invalidos').not().isEmpty().isString(),
    check('usuario', 'El usuario es invalido').not().isEmpty().isString(),
    check('contrasena', 'La contrasena es obligatoria').not().isEmpty().isString(),
    validarCampos
],updateUsuario);

export default router;