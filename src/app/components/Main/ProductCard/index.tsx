import { ReactElement } from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import getFormatPrice from "@/app/hooks/get-format-price";
import SendToCartButton from "../SendToCartButton";
import "./styles.scss";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: 'swap',
    weight: ["300", "400", "600", "700"]
})

interface ProductCardProps{
    product: ProductsData
}

export default function ProductCard({product}: ProductCardProps):ReactElement{
    return(
        <div className="product-card">
            <div className="product-data">
            
                <Image src={product.photo} alt="Imagem produto" width={150} height={138}/>
                
                <div className="product-name-and-price">
                    <h1 className={`${montserrat.className}`}>{product.name}</h1>
                    <span  className={`${montserrat.className}`}>R$ {getFormatPrice(product.price)}</span>
                </div>
                <p className={`${montserrat.className}`}>{product.description}</p>
            </div>

            <SendToCartButton product={product}/>
        </div>
    )
}