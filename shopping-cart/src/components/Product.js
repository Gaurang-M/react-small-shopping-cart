import React from 'react'
import {useAddCartItemContext} from "../context/Cart.js"

export default function Product({ product }) {
    const addToCartHandler = useAddCartItemContext();
    
    return (
        <div>
            <img className="small" src={product.image} alt={product.name}></img>
            <h3>{product.name}</h3>
            <div>{product.price}</div>
            <div>
                <button onClick={e => {addToCartHandler(product.id)}}>Add to Cart</button>
            </div>
        </div>
    )
}
