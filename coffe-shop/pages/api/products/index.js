import { pool } from "./../../../config/db"




export default async function handler(req, res) {
    console.log({ "method": req.method })
    let [rows] = await pool.query("select * from product;")
    console.log(rows)
    res.status(200).json({ product: "working" })
}