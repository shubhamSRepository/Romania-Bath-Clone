import Styles from "../Styles/Footer.module.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

function Footer() {
    return (
        <div className={Styles.footerContainer}>
            <div className={Styles.footerUpper}>
                <div className={Styles.aboutAndFollowLinks}>
                    
                    <div>
                        <h5>ABOUT ROMANIA</h5>
                        <p>
                            A plush and luxurious bathroom is an integral part of every dream home. Here at Bathtubs INDIA, we understand your need for class and comfort. That’s why we provide luxury range of products for those with an eye for detail, all the while keeping your budget in mind.
                        </p>
                    </div>

                    <div>

                        <h5>FOLLOW US ON</h5>

                        <div className={Styles.followIcons}>
                            <FacebookIcon />
                            <TwitterIcon />
                            <YouTubeIcon />
                            <InstagramIcon />
                        </div>

                    </div>

                    <div>

                    </div>

                </div>

                <div className={Styles.romania}>

                    <h5>ROMANIA</h5>

                    <ul type="none">
                        <li>Product Data</li>
                        <li>Product Data</li>
                        <li>Product Data</li>
                        <li>Product Data</li>
                        <li>Product Data</li>
                    </ul>

                </div>

                <div className={Styles.info}>

                    <h5>INFORMATION</h5>

                    <ul type="none">

                        <li>FAQs</li>
                        <li>Product Care</li>
                        <li>After Sale Services</li>
                        <li>Privacy & Cookie Policy</li>

                    </ul>
                </div>

                <div className={Styles.contact}>

                    <div>
                        <PhoneRoundedIcon />
                        <span className={Styles.contactHeadings}> MOBILE : </span>
                        <span> +91 8866445522</span>
                    </div>

                    <div>
                        <EmailRoundedIcon />
                        <span className={Styles.contactHeadings}> EMAIL ID :</span>
                        <span> roamniabath@gmail.com</span>
                    </div>

                    <div>
                        <LocationOnRoundedIcon />
                        <span className={Styles.contactHeadings}> LOCATION :</span>
                        <span> Romania Industries C-1/10 Opp. Haldiram’s Rajouri Garden Ring Road New Delhi - 110027 India</span>
                    </div>

                    <div>
                        <span className={Styles.contactHeadings}> TIME :</span>
                        <span> 10:00 am to 07:30 pm
                            (Showroom Visit : Through Appointment Only)
                            Monday OFF</span>
                    </div>

                </div>
            </div>

            <div className={Styles.footerBottom}>

            </div>

        </div>
    )
}

export default Footer;