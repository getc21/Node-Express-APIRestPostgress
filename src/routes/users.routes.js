import {Router} from 'express';
import {pool} from '../db.js'
import { 
    createUser, 
    deleteUser, 
    getUsers, 
    getUserById, 
    editUser 
} from '../controllers/users.controllers.js';
const router = Router();
//MOSTRAR TODOS LOS USUARIOS
router.get('/users', getUsers);
//es un params===> :id
//BUSCAR USUARIO POR ID
router.get('/users/:id', getUserById);
// CREAR USUARIO
router.post('/users', createUser);
//ELIMINAR USUARIO
router.delete('/users/:id', deleteUser);
//ACTUALIZAR USUARIO
router.put('/users/:id', editUser);

export default router;