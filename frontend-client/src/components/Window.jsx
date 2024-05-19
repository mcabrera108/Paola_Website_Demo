import React from "react";
import style from "../style_modules/component_modules/window.module.css";
import WindowTabBar from "./WindowTabBar";
import PropTypes from "prop-types";
import Draggable from "react-draggable";
function Window(props) {
    const nodeRef = React.useRef(null);

    return (
        <>
            <Draggable nodeRef={nodeRef} handle=".tab-draggable" bounds="body">
                <div className={style.windowContainer} ref={nodeRef}>
                    <div className={style.windowSubContainer}>
                        <div className="tab-draggable">
                            <WindowTabBar computerIcon={props.computerIcon} />
                        </div>
                    </div>
                </div>
            </Draggable>
        </>
    )
}
Window.propTypes = {
    computerIcon: PropTypes.string,
}
export default Window;