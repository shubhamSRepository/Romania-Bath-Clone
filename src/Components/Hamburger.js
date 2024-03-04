import { useState } from "react";
import Styles from "../Styles/Hamburger.module.css";
import MenuIcon from '@mui/icons-material/Menu';

function HamburgerMenu() {

    const [containerVisibility, setContainerVisibility] = useState('hidden');

    const handleNavCross = () => {
        setContainerVisibility('hidden');
    }

    return (
        <>
            <div className={Styles.container} style={{ visibility: containerVisibility }}>

                <div className={Styles.hamburgerContainer}>

                    <div className={Styles.navigationHeading}>
                        <div>
                            <h5>NAVIGATION</h5>
                        </div>
                        <div>
                            <button onClick={handleNavCross}>
                                X
                            </button>
                        </div>
                    </div>

                    <div>
                        <ul type="none" className={Styles.hamNavigationList}>
                            <li>HOME</li>
                            <li>ABOUT US</li>
                            <li>PRODUCTS</li>
                            <li>CONTACT US</li>
                        </ul>

                    </div>

                </div>

            </div>
        </>
    )
}

export default HamburgerMenu;