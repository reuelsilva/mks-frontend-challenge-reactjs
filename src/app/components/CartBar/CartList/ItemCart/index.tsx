import { ReactElement, useContext, useState } from "react";
import "./styles.scss"
import Image from "next/image";
import { Montserrat } from "next/font/google";
import getFormatPrice from "@/app/hooks/get-format-price";
import CloseItemCartButton from "./CloseItemCartButton";
import { CartContext } from "@/app/context/CartContext";

const montserrat = Montserrat({
    subsets:["latin"],
    weight: ["400","700"],
    display:"swap"
})

interface ItemCartProps{
    id: number,
    url: string,
    name: string,
    price: string
}

export default function ItemCart(product : ItemCartProps):ReactElement{
    const {totalPrice, setTotalPrice} = useContext(CartContext)
    const [unitCounter, setUnitCounter] = useState(1)

    const addTotalPrice = (price: string) => {
        const priceInteger = parseInt(price)
        setTotalPrice(totalPrice + priceInteger)
    }
    const removeTotalPrice = (price: string) => {
        const priceInteger = parseInt(price)
        setTotalPrice(totalPrice - priceInteger)
    }
    
    return(
        <div className="item-cart">
            <Image src={product.url} alt="Foto produto" height={50} width={50}/>
            <div className="item-cart-product-name"><span className={`${montserrat.className}`}>{product.name}</span></div> 
            <div className="product-units">
                <span className={`product-units-title ${montserrat.className}`}>Qtd:</span> 
                <div className="product-units-counter">
                    <button className={`del-unit-btn ${montserrat.className}`} onClick={() => {setUnitCounter(unitCounter - 1); removeTotalPrice(product.price)}}>-</button>
                    <span className={`unit-counter ${montserrat.className}`}>{unitCounter}</span>
                    <button className={`add-unit-btn ${montserrat.className}`} onClick={() => {setUnitCounter(unitCounter + 1); addTotalPrice(product.price)}}>+</button>
                </div>
            </div>
            <div className="item-cart-product-price"><span className={`${montserrat.className}`}>R${getFormatPrice(product.price)}</span></div>
            <CloseItemCartButton id={product.id} price={product.price} unit={unitCounter}/>
        </div>
    )
}