"use client"
import { ReactElement } from "react";
import { Montserrat } from "next/font/google";
import toggleCartBar from "@/app/hooks/toggle-cart-bar";
import "./styles.scss"


const montserrat = Montserrat({
    subsets:["latin"],
    weight: "400"
})

export default function CloseCartBarButton(): ReactElement{
    return(
        <div className="elipse" title="Fechar" onClick={toggleCartBar}>
            <div className="close-indicator">
                <span className={`${montserrat.className}`}>X</span>
            </div>
        </div>
    )
}