"use client"
import { ReactElement, useContext } from "react";
import ShopIcon from "../ShopIcon";
import { CartContext } from "@/app/context/CartContext";
import { Montserrat } from "next/font/google";
import "./styles.scss"

const montserrat = Montserrat({
    subsets: ["latin"],
    display: 'swap',
    weight: "600"
})


const openCartBar = () => {
        
    const Bar = document.getElementById("cartBar");
    const statusBar = Bar?.classList.contains("hideCartBar")
    
    if(Bar && statusBar){
        Bar.classList.toggle("showCartBar");
        Bar.classList.toggle("hideCartBar");
    }
}

interface SendToCartProsp{
    product: ProductsData,
}

export default function SendToCartButton({product}: SendToCartProsp):ReactElement{
    const {cartCounter, setCartCounter, productsStorage, setProductsStorage, totalPrice, setTotalPrice} = useContext(CartContext)

    const updateTotalPrice = (price: string) => {
        const isStorage = productsStorage.find((item) => item.id == product.id)
        if(!isStorage){
            const priceInteger = parseInt(price)
            setTotalPrice(totalPrice + priceInteger)
        }

    }

    const updateCartBar = () => { 
        const isStorage = productsStorage.find((item) => item.id == product.id)
        if(!isStorage){
            setCartCounter(cartCounter + 1)
            setProductsStorage([...productsStorage, product])
        }
    }

    return(
        <div className="bottom-bar" onClick={ () => {openCartBar(); updateCartBar(); updateTotalPrice(product.price)}}>
            <ShopIcon/>
            <span className={montserrat.className}>COMPRAR</span>
        </div>
    )
}