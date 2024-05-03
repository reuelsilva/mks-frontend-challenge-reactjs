"use client"
import { ReactElement, useContext } from "react";
import { Montserrat } from "next/font/google";
import { CartContext } from "@/app/context/CartContext";
import CartIcon from "./CartIcon";
import toggleCartBar from "@/app/hooks/toggle-cart-bar";
import "./styles.scss"

const montserrat = Montserrat({
    subsets: ["latin"],
    display: 'swap',
    weight: ["700"]
})

export default function CartCounter():ReactElement{
    const { cartCounter: counter } = useContext(CartContext);
    return(
        <div className="cart-counter-container" onClick={toggleCartBar} title="Abrir Carrinho">
            <CartIcon/>
            <span className={`${montserrat.className}`}>{counter}</span>
        </div>
    )
}
