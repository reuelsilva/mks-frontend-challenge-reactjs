import { ReactElement } from "react";
import { Montserrat } from "next/font/google";
import "./styles.scss";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: 'swap',
    weight: ["300", "600"]
})

export default function Logo(): ReactElement{
    return(
        <div className="text-logo">
            <span className={`${montserrat.className}`}>MKS</span>
            <span className={`${montserrat.className}`}>Sistemas</span>
        </div>
    )
}