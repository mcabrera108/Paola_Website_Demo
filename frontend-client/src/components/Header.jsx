import style from "../style_modules/component_modules/header.module.css";
import Links from "./Links";
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className={style.headerContainer}>
            <div className={style.logoContainer}>
                <Link to="/" className={style.logoTitle}>Paola</Link>
            </div>
            <Links />
        </nav>
    )
}
export default Header;