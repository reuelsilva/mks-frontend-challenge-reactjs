"use client"
import { ReactElement, useContext } from "react";
import { Montserrat } from "next/font/google";
import CloseCartBarButton from "./CloseCartBarButton";
import CartList from "./CartList";
import { CartContext } from "@/app/context/CartContext";
import "./styles.scss"

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: "700",
    display: "swap"
})

export default function CartBar():ReactElement{
    const {totalPrice} = useContext(CartContext)
    return(
        <div id="cartBar" className="hideCartBar">
            <div className="cart-data-info">
                <h2 className={`${montserrat.className}`}>Carrinho de Compras</h2>
                <CloseCartBarButton/> 
                <CartList/>
                <div className="cart-data-price">
                    <div><span className={`${montserrat.className}`}>Total:</span></div>
                    <div><span className={`${montserrat.className}`}>R${totalPrice}</span></div>
                </div>
            </div>
            <div className="cart-data-finish-shop" title="Finalizar Compra">
                <span className={`${montserrat.className}`}>Finalizar Compra</span>
            </div>
        </div>

    )
}