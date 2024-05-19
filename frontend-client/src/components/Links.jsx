import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import style from "../style_modules/component_modules/links.module.css";

function Links() {
    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Gallery</Link></li>
            </ul>
        </>
    )
}
export default Links;