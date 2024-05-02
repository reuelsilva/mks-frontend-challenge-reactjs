"use client"
import { ReactElement, useContext } from "react";
import CartIcon from "../CartIcon";
import { Montserrat } from "next/font/google";
import { CartContext } from "@/app/context/CartContext";
import "./styles.scss"

const montserrat = Montserrat({
    subsets: ["latin"],
    display: 'swap',
    weight: ["700"]
})

const openCartBar = () => {
    const Bar = document.getElementById("cartBar");
    if(Bar){
        Bar.classList.toggle("showCartBar")
        Bar.classList.toggle("hideCartBar")
    }   
}

export default function CartCounter():ReactElement{
    const { cartCounter: counter } = useContext(CartContext);
    return(
        <div className="cart-counter-container" onClick={openCartBar} title="Abrir Carrinho">
            <CartIcon/>
            <span className={`${montserrat.className}`}>{counter}</span>
        </div>
    )
}
