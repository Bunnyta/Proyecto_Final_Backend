import pool from "../database/connection.js";

const create = async (course) => {
    const { name, description, price, user_id } = course;
    const query = "INSERT INTO courses (name, description, price, user_id) VALUES ($1,$2,$3) RETURNING *";
    const values =[name, description, price, user_id];
    const { rows } = await pool.query(query, values);
    return rows[0];
};

// const findOne =async(course_id) => {
//     const query = "SELECT * FROM courses WHERE id = $1";
//     const values =[course_id];
//     const { rows } = await pool.query(query, values);
//     return rows[0];
// }

const remove = async (course_id) => {
    const query = "DELETE FROM courses WHERE id = $1 RETURNING *";
    const values =[course_id];
    const { rows } = await pool.query(query, values);
    return rows[0];
};


export const courseModel = {
    create,
    remove, 
   
};