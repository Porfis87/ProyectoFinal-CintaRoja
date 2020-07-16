import React from 'react'

const Product = (props) => {

    const { article, category, color, price, id, deleteProduct } = props

    return (
        <div className="card mt-5">
            <div className="card-header">{article}</div>
            <div className="card-body">
                <p className="card-text">{category}</p>
                <p>Color: {color}</p>
                <p>Precio: {price}</p>

                <button className="btn btn-secondary" onClick={() => deleteProduct(id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default Product

