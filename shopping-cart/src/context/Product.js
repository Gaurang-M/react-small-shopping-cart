import React, {useContext, useState} from 'react'
import CartItemProvider from "./Cart.js"

const ProductContext = React.createContext();

export function useProductContext(){
    return useContext(ProductContext)
}

export default function ProductProvider({ children}) {
    const [products, setProducts] = useState({
        products: [
          {
            id: '1',
            name: 'MacBook',
            price: 1400,
            image: 'https://picsum.photos/id/180/2400/1600',
          },
          {
            id: '2',
            name: 'Old Car',
            price: 2400,
            image: 'https://picsum.photos/id/111/4400/2656',
          },
          {
            id: '3',
            name: 'W Shoes',
            price: 1000,
            image: 'https://picsum.photos/id/21/3008/2008',
          },
        ],
    });

    return (
        <ProductContext.Provider value={products}>
            <CartItemProvider>
                {children}
            </CartItemProvider>
        </ProductContext.Provider>
    )
}
