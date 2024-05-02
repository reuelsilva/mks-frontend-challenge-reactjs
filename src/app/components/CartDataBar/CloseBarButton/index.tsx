"use client"
import { ReactElement } from "react";
import { Montserrat } from "next/font/google";
import "./styles.scss"


const montserrat = Montserrat({
    subsets:["latin"],
    weight: "400"
})

const toggleBar = () => {
    const Bar = document.getElementById("cartBar");
    if(Bar){
        Bar.classList.toggle("showCartBar")
        Bar.classList.toggle("hideCartBar")
    }
    
}

export default function CloseBarButton(): ReactElement{
    return(
        <div className="elipse" title="Fechar" onClick={toggleBar}>
            <div className="close-indicator">
                <span className={`${montserrat.className}`}>X</span>
            </div>
        </div>
    )
}