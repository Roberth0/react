export default function handler(req, res) {
    res.status(200).json(`Getting product: ${req.query.id}`)
}