import { RiLoader2Line } from "react-icons/ri";
import styles from "../Loader/Loader.module.css";


function Loader() {
    return (
        <div>
            <RiLoader2Line className={styles.loadIcon} />
        </div>
    )
}

export default Loader;