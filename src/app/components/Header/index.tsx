import { ReactElement} from "react";
import Logo from "./Logo";
import CartCounter from "./CartCounter";
import "./styles.scss";

export default function Header(): ReactElement{
    return(
        <header>
            <Logo/>
            <CartCounter/>
        </header>
    )
}
