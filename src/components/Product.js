import React from 'react'
import "./Product.css"

const Product = (props) => {

    const { article, img, category, color, price, id, deleteProduct } = props

    return (
        <div className="col-md-4">
            <div className="card mt-3">
                <div className="card-header">{article}</div>
                <div className="img-card card-body">
                    <img src={img} alt="product" />
                    <p className="card-text">{category}</p>
                    <p>Color: {color}</p>
                    <p>Precio: {price}</p>

                    <button className="btn btn-secondary" onClick={() => deleteProduct(id)}>Eliminar</button>
                </div>
            </div>
        </div>

    )
}

export default Product

