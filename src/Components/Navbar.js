import Styles from "../Styles/Navbar.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import HamburgerMenu from "./Hamburger";
import MenuIcon from '@mui/icons-material/Menu';


function Navbar() {

    const [scrolling, setScrolling] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (

        /* If scrolling is true, it includes the Styles.navBackground class; otherwise, 
        it includes an empty string to prevent unnecessary class addition*/
        <div className={`${Styles.container} ${scrolling ? Styles.navBackground : ''}`}>

            <div className={Styles.hamburgerIcon}>
                <MenuIcon />
            </div>

            <img src="https://www.romaniabathtubs.com/wp-content/themes/romania/images/romania_logo.png" />

            <div className={Styles.navList}>

                <ul type="none" className={Styles.unList}>
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>PRODUCTS</li>
                    <li>CONTACT US</li>
                </ul>

            </div>
        </div >
    )
}

export default Navbar;