"use client"
import { ReactElement, useContext } from "react";
import ItemCart from "../ItemCart";
import { CartContext } from "@/app/context/CartContext";
import EmptyCartMessage from "./EmptyCartMessage";
import "./styles.scss"

export default function CartList(): ReactElement{
    const {productsStorage} = useContext(CartContext)

    return(
        <div className="cart-data-list">
            {
                productsStorage && productsStorage.length > 0 ? (
                    productsStorage.map((product, key:number) => {
                        return(
                            <ItemCart id={product.id} name={product.name} url={product.photo} price={product.price} key={product.id}/>
                        )
                    })
                ): (
                    <EmptyCartMessage/>
                )
            }
        </div>
    )
}
