"use client"
import { ReactElement, useContext } from "react";
import { Montserrat } from "next/font/google";
import "./styles.scss"
import { CartContext } from "@/app/context/CartContext";

const montserrat = Montserrat({
    subsets:["latin"],
    weight: "400"
})

interface CloseItemCartProps{
    id: number,
    price: string,
    unit: number
}

export default function CloseItemCartButton( product: CloseItemCartProps):ReactElement{

    const {productsStorage, setProductsStorage, cartCounter, setCartCounter, totalPrice, setTotalPrice} = useContext(CartContext);

    const deleteProductStored = (id: number) => {
        const updatedProductsStorage = productsStorage.filter( product => product.id !== id)
        setProductsStorage(updatedProductsStorage)
        setCartCounter(cartCounter - 1)
    }

    const updateTotalPrice = (price: string) => {
        const priceInteger = parseInt(price)
        setTotalPrice(totalPrice - (priceInteger * product.unit))
    }
    
    return(
        <div className="elipse-sm" title="Excluir" onClick={() => {deleteProductStored(product.id); updateTotalPrice(product.price)}}>
            <div className="close-indicator">
                <span className={`${montserrat.className}`}>X</span>
            </div>
        </div>
    )
}