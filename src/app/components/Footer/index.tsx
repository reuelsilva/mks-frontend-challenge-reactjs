import { ReactElement } from "react";
import { Montserrat } from "next/font/google";
import "./styles.scss"

const montserrat = Montserrat({
    subsets: ["latin"],
    display: 'swap',
    weight: ["400"]
})

export default function Footer(): ReactElement{
    return(
        <footer>
            <p className={`${montserrat.className}`}>MKS sistemas © Todos os direitos reservados</p>
        </footer>
    )
}
