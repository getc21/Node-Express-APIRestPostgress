import { pool } from "../db.js";

export const getUsers =  async (req, res) => {
    const {rows} = await pool.query("SELECT * FROM users");
    res.json(rows);
}; 

export const getUserById = async (req, res) => {
    const {id} = req.params
    const {rows} = await pool.query(`SELECT * FROM users WHERE id = ${id}`);
    
    if(rows.length === 0){
        return res.status(404).json({message: "Usuario no encontrado"})
    }
    return res.json(rows[0]);


};

export const createUser = async (req, res) => {
    const data = req.body;
    try {
        const { rows } = await pool.query(
            'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', 
            [data.name, data.email]
        );
        return res.status(201).json({code: 201, message: "Usuario creado exitosamente", rows});
    } catch (error) {
        if(error?.code === "23505"){
            return res.status(409).json({ code: 409, message: "El email ya se encuentra registrado" });
        }
        return res.status(500).json({ code: 500, message: "Problemas con el servidor, intente mas tarde" });
    }
};

export const deleteUser = async (req, res) => {
    const codeNoEncontrato = 404;
    const codeSuccess = 200;
    const {id} = req.params
    const {rows, rowCount} = await pool.query(`DELETE FROM users WHERE id = ${id} RETURNING *`);
    
    console.log(rows);
    if(rowCount === 0){
        return res.status(codeNoEncontrato).json({code: codeNoEncontrato, message: "Usuario no encontrado"});
    }
    return res.status(codeSuccess).json({code:codeSuccess, message: "Usuario correctamente eliminado", rows});
};

export const editUser = async (req, res) => {
    const {id} = req.params;
    const data = req.body;

    const { rows } = await pool.query(
        'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *', 
        [data.name, data.email, id]);
    return res.json(rows[0]);
};