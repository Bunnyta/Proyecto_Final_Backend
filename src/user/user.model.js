import pool from "../database/connection.js";


const create = async (user) =>{
    const { name, surname, email, password, rol } = user;

    const query = 'INSERT INTO users (name, surname, email, password, rol) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const values = [name, surname, email, password, rol];
    const { rows } = await pool.query(query, values);
    return rows[0];
};

const findOne =async (email) => {
    const query = "SELECT * FROM users WHERE email =$1";
    const values = [email];
    const { rows } = await pool.query(query, values);
    return rows[0];
}; 

export const userModel = {
    create, 
    findOne,
};