import React from 'react'
import {useCartItemContext, CART_ACTIONS} from "../context/Cart.js";
import {useProductContext} from "../context/Product.js";

export default function Basket() {
    const { state, dispatch } = useCartItemContext();
    const { cartItems } = state;
    
    const { products } = useProductContext();
    const itemPrice = cartItems.reduce((a,c) =>  a+ c.price * c.qty, 0);
    const taxPrice = itemPrice * 0.14;
    const shippingPrice = 50;
    const totalPrice = itemPrice + taxPrice + shippingPrice;
    return (
        <aside className="block col-1">
           <h3>Cart</h3>
           <div>
            {cartItems.length == 0 && <div>Cart is empty!</div>}
            </div> 
            {cartItems.length > 0 && cartItems.map(item => { return(
                <div className="row">
                    <div className="col-1">{item.name}</div>
                    <div className="col-1">
                        <button className="add" onClick={() => {dispatch({
                            type: CART_ACTIONS.ADD,
                            products: products,
                            id: item.id
                        })}}>+</button>
                        <button className="remove" onClick={() => {dispatch({
                            type: CART_ACTIONS.REMOVE,
                            products: products,
                            id: item.id
                        })}}>-</button>
                    </div>
                    <div className="col-1">
                        {item.qty} X {item.price}
                    </div>
                </div>
            )})}
            {cartItems.length > 0 && (
                <>
                    <hr></hr>
                    <div className="row">
                        <div className="col-2">Item Price</div>
                        <div className="col-1">{itemPrice.toFixed(2)}</div>
                    </div>
                    <div className="row">
                        <div className="col-2">Shipping Price</div>
                        <div className="col-1">{shippingPrice.toFixed(2)}</div>
                    </div>
                    <div className="row">
                        <div className="col-2">Tax</div>
                        <div className="col-1">{taxPrice.toFixed(2)}</div>
                    </div>
                    <div className="row">
                        <div className="col-2"><strong>Total</strong></div>
                        <div className="col-1">{totalPrice.toFixed(2)}</div>
                    </div>
                </>
            )}
        </aside>
    )
}
