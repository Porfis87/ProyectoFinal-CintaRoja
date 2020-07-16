
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Product from '../components/Product'

const MainContainer = () => {

    const [products, setProducts] = useState({})
    const URL = 'https://ecommerce-b42.firebaseio.com/clothes.json'

    const getProduct = () => {
        axios.get(URL)
            .then((res) => setProducts(res.data))
            .catch((err) => alert(err))
    }

    const deleteProduct = (id) => {
        axios.delete(`https://ecommerce-b42.firebaseio.com/clothes/${id}.json`)
            .then(() => getProduct())
            .catch((err) => alert(err))
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <main className="">
            {Object.keys(products).map((id) => <Product
                key={id}
                id={id}
                article={products[id].article}
                category={products[id].category}
                img={<img src={products[id].img} alt="product" />}
                color={products[id].color}
                price={products[id].price}
                deleteProduct={deleteProduct}

            />)}
        </main>

import React from 'react'


const MainContainer = () => {
    return (
        <div>
            
        </div>

    )
}

export default MainContainer
