import React from 'react';
import {useProductContext} from "../context/Product.js"
import Product from "./Product";

export default function Main() {
    const { products } = useProductContext();
    return (
        <main className="block col-2">
            <h2>Products</h2>
            <div className="row">
                {
                products.map(product => {
                    return <Product product={product}/>
                })}
            </div>
        </main>
    )
}
