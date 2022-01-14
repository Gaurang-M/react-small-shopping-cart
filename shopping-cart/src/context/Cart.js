import React, { useContext, useState } from 'react'
import {useProductContext} from "./Product.js"

const CartItemContext = React.createContext();
const AddCartItemContext = React.createContext();
const RemoveCartItemContext = React.createContext();

export function useCartItemContext(){
    return useContext(CartItemContext)
}

export function useAddCartItemContext(){
    return useContext(AddCartItemContext)
} 

export function useRemoveCartItemContext(){
    return useContext(RemoveCartItemContext);
}

export default function CartItemProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const { products } = useProductContext();

    const addCartItem = function(id){
        const exist = cartItems.find(product => product.id == id);
        if(exist){
            setCartItems(cartItems.map(item => {
                if(item.id == id){
                    return {...item, qty: item.qty+1}
                }
                return {...item}
            }))
        }else{
            const product = products.find(product => product.id == id);
            setCartItems([...cartItems,{...product, qty:1}])
        }
    }

    const removeCartItem = function(id){
        const exist = cartItems.find(product => product.id == id);
        if(exist.qty == 1){
            const updatedCartItems = cartItems.filter(product => product.id != id)
            setCartItems([...updatedCartItems]);
        }else{
            setCartItems(cartItems.map(item => {
                if(item.id == id){
                    return {...item, qty: item.qty-1}
                }
                return {...item}
            }));
        }
    }

    return (
        <CartItemContext.Provider value={cartItems}>
            <AddCartItemContext.Provider value={addCartItem}>
                <RemoveCartItemContext.Provider value={removeCartItem}>
                    {children}
                </RemoveCartItemContext.Provider>
            </AddCartItemContext.Provider>
        </CartItemContext.Provider>
    )
}
