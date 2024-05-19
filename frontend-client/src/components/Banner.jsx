import style from "../style_modules/component_modules/banner.module.css";
import Window from "./Window";
import computerIcon from "../assets/computer-icon.png";
function Banner() {
    return (
        <>
            <Window computerIcon={computerIcon} />
            <div className={style.bannerBackground}></div>
        </>
    )
}
export default Banner;