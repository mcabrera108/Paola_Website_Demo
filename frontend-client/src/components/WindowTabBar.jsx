import style from "../style_modules/component_modules/windowtab.module.css";
import PropTypes from "prop-types";

function WindowTabBar(props) {
    return (
        <div className={style.windowTabBar}>
            <div className={style.windowTabDescContainer}>
                <img src={props.computerIcon} className={style.iconSize} />
                <span>Welcome</span>
            </div>
            <div className={style.windowTabBtnContainer}>
                <button className={style.minimizeBtn}><i className="fa fa-window-minimize"></i></button>
                <button className={style.maximizeBtn}><i className="fa fa-window-maximize"></i></button>
                <button className={style.exitTabBtn}><i className="fa fa-times"></i></button>
            </div>
        </div>
    )
}

WindowTabBar.propTypes = {
    computerIcon: PropTypes.string,
}
export default WindowTabBar;