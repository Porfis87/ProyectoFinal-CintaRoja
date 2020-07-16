import React from 'react'
import FormProduct from '../components/FormProduct'
import { useHistory } from 'react-router-dom'
import { ProductClass } from '../utils/ProductsClass'
import axios from 'axios'

const CreateContainer = () => {

    const URL = 'https://ecommerce-b42.firebaseio.com/clothes.json'
    const history = useHistory()

    const createProduct = (article, category, color, price,) => {
        const newProduct = new ProductClass(article, category, color, price, 'a')
        axios.post(URL, newProduct.a)
            .then(() => history.push('./'))
            .catch((err) => alert(err))
    }

    return (
        <div className="container">
            <FormProduct crateProduct={createProduct} />
        </div>
    )
}

export default CreateContainer
