import axios from 'axios'

export function ProductForm() {
    const handleSubmit = async (e) => {
        e.preventDefault()
        let res = await axios.post("/api/products", {
            name: "New Product",
            price: 2.50,
            quantity: 10
        })
        console.log({ res })
    }

    return (
        <div>
            <form method="POST" onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" id="name"></input>

                <label htmlFor="price">Precio</label>
                <input type="number" name="price" id="price"></input>

                <label htmlFor="quantity">Cantidad</label>
                <input type="number" name="quantity" id="quantity"></input>

                <button>Registrar Producto</button>
            </form>
        </div>
    )
}
