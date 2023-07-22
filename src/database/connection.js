// Esto es para conectarnos a la base de datos
import pkg from "pg";
const {Pool} = pkg;
 
const pool = new Pool ({
    allowExitOnIdle: true, 
});


export default pool;