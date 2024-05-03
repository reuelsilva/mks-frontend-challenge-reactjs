import { ReactElement } from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import "./styles.scss"

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: "600",
    display: "swap"
})

export default function EmptyCartMessage():ReactElement{
    return(
        <div className="empty-cart-message">
            <Image src="https://res.cloudinary.com/dvegoqfdf/image/upload/v1714567179/emptry-cart.png" alt="Carrinho de compras vazio" width={200} height={200}/>
            <p className={`${montserrat.className}`}>Seu carrinho está vazio.</p>
            <p className={`${montserrat.className}`}>Você ainda não tem nada adicionado ao seu carrinho de compras.</p>
        </div>
    )
}