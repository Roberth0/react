import { pool } from "./../../../config/db"


export default async function handler(req, res) {
    switch (req.method) {
        case "POST":
            const { name, price, quantity } = req.body

            let resultado = await pool.query("INSERT into product set ? ", {
                product_name: name,
                price,
                quantity
            })
            console.log(resultado)

            return res.status(200).json({ name, price, quantity })

        case "GET":
            let [rows] = await pool.query("select * from product;")
            res.status(200).json(rows)
            break
    }
}