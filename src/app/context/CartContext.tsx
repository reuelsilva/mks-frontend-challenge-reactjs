import React, {createContext, useState } from "react";

export const CartContext = createContext({
    cartCounter: 0,
    setCartCounter: (value: number) => {},
    productsStorage: [] as ProductsData[],
    setProductsStorage: (value: ProductsData[]) => {},
    totalPrice: 0,
    setTotalPrice: (value: number) => {}
    
})

interface CartProviderProps{
    children: React.ReactNode
}

export const CartProvider = ({children}: CartProviderProps) => {
    const [cartCounter, setCartCounter] = useState<number>(0)
    const [productsStorage, setProductsStorage] = useState<[] | ProductsData[]>([])
    const [totalPrice, setTotalPrice] = useState(0)

    return(
        <CartContext.Provider value={{cartCounter, productsStorage, setCartCounter, setProductsStorage, totalPrice, setTotalPrice }}>
            {children}
        </CartContext.Provider>
    )
}
