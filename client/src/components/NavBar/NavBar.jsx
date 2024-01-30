import {Link} from "react-router-dom";
import style from "./NavBar.module.css";

// This section defines the NavBar component, which renders two links 
// for navigation using react-router-dom.

const NavBar = () => {
    return(
        // This section renders the NavBar component.
        <div className={style.mainContainer}>
            <Link to = "/home"  className={style.navLink}>HOME</Link>
            <Link to = "/create" className={style.navLink}>FORM</Link>
        </div>
    )
}

export default NavBar;
