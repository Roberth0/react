import { createPool } from "mysql2/promise";

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    port: 3306,
    database: 'coffeshop'
})

export { pool }