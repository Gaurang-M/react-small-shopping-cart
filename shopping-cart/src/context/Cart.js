import React, { useContext, useReducer } from 'react'

const CartItemContext = React.createContext();

export function useCartItemContext(){
    return useContext(CartItemContext)
}

const initialState = {
    cartItems: []
}

export const CART_ACTIONS = {
    "ADD" : "ADD_CART_ITEM",
    "REMOVE" : "REMOVE_CART_ITEM"
}

const reducer = function(state, action){
    const exist = state.cartItems.find(product => product.id == action.id);
    switch(action.type){
        case "ADD_CART_ITEM":
            if(exist){
                return({...state, cartItems: state.cartItems.map(item => {
                    if(item.id == action.id){
                        return {...item, qty: item.qty+1}
                    }
                    return {...item}
                })})
            }else{
                const product = action.products.find(product => product.id == action.id);
                return ({...state, cartItems:[...state.cartItems,{...product, qty:1}]})
            }
        case "REMOVE_CART_ITEM":
            if(exist.qty == 1){
                const updatedCartItems = state.cartItems.filter(product => product.id != action.id)
                return ({...state, cartItems:[...updatedCartItems]});
            }else{
                return({...state, cartItems:state.cartItems.map(item => {
                    if(item.id == action.id){
                        return {...item, qty: item.qty-1}
                    }
                    return {...item}
                })});
            }
    }
    return initialState
}

export default function CartItemProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CartItemContext.Provider value={{state, dispatch}}>
                    {children}
        </CartItemContext.Provider>
    )
}
