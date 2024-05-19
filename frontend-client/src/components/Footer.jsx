import useTime from "../custom_hooks/useTime";
import style from "../style_modules/component_modules/footer.module.css";

function Footer() {
    const { formattedTime } = useTime();
    return (
        <footer>
            <button className={style.startBtn}>
                <img src="https://placehold.co/18x18" className={style.startLogo} />
                Start
            </button>
            <time className={style.timeContainer}>
                <img src="https://placehold.co/18x18" />
                {formattedTime}
            </time>
        </footer>
    )
}
export default Footer;