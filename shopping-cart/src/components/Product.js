import React from 'react'
import {useCartItemContext, CART_ACTIONS} from "../context/Cart.js"
import {useProductContext} from "../context/Product.js";


export default function Product({ product }) {
    const {dispatch} = useCartItemContext();
    const {products} = useProductContext();
    
    return (
        <div>
            <img className="small" src={product.image} alt={product.name}></img>
            <h3>{product.name}</h3>
            <div>{product.price}</div>
            <div>
                <button onClick={() => {dispatch({
                    type: CART_ACTIONS.ADD,
                    products: products,
                    id: product.id
                })}}>Add to Cart</button>
            </div>
        </div>
    )
}
