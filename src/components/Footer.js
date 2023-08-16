import './components_css/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook} from '@fortawesome/free-brands-svg-icons'
import { faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faYoutube} from '@fortawesome/free-brands-svg-icons'
import Vodafone from '../Images/vodafone-cash-logo.PNG'
import Etisalat from '../Images/etisalat-cash-logo.png'
import Orange from '../Images/orange-cash-logo.png'

function Footer (){
    return(
        <div className="footer">
            <div className="row">
            <div className="col-md-4 col-sm-12 about">
                <h2>Wa3d</h2>
                <p className="py-2">
                    Specialized in the finest and best types of roses <br /> handpicked just for you
                    
                </p>
                <p>
                &copy; All rights reserved 
                <span className="copyright"> Semi tech Team</span>
                </p>
            </div>
            <div className="col-md-3 col-sm-12 pb-4">
                <h2>Abbreviations</h2>
                <div className="d-flex row">
                <a href="homeEN.html">Home</a>
                <a href="/#">About Us</a>
                <a href="productsEN.html">Our Products</a>
                <a href="/#" className="car-footer">Car Decoration</a>
                <ul className='nopad'>
                    <a href='/#'><img src={Vodafone} alt='vodafone'/></a>
                    <a href='/#'><img src={Etisalat} alt='Etisalat'/></a>
                    <a href='/#'><img src={Orange} alt='Orange'/></a>
                </ul>
                </div>
            </div>
            <div className="col-md-3 col-sm-12 contact-footer">
                <h2>Contact US</h2>
                <p>
                    Keep in touch with us, whether by e-mail or phone <br /> number we are waiting for your call or message
                </p>
                <p>Our Number:- 0201123242977+</p>
                <p>E-mail:- example@gmail.com</p>
                <ul className="d-flex list-unstyled gap-3">
                    <li>
                        <a className="d-block text-light mx-2 mt-3" href="https://web.facebook.com/Waadflower55/about"><FontAwesomeIcon className='facebook' icon={faFacebook}></FontAwesomeIcon></a>
                    </li>
                    <li>
                        <a className="d-block text-light mx-2 mt-3" href="https://www.instagram.com/waad_flower55/"><FontAwesomeIcon className="instagram" icon={faInstagram}></FontAwesomeIcon></a>
                    </li>
                    <li>
                        <a className="d-block text-light mx-2 mt-3" href="/#"><FontAwesomeIcon className="youtube" icon={faYoutube}></FontAwesomeIcon></a>
                    </li>
                </ul>
            </div>
            <div className="col-md-2 col-sm-12">
                <h2>Our Location:</h2>
                <div className="mapouter"><div className="gmap_canvas"><iframe width="180" height="290" id="gmap_canvas" src="https://maps.google.com/maps?q=egypt,%D9%85%D8%AD%D9%84%D8%A9%20%D8%B2%D9%8A%D8%A7%D8%AF,Waad%20flower&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe><a href="https://123movies-to.org"></a><br/><a href="https://www.embedgooglemap.net">google maps html code</a></div></div>
            </div>
            </div>
        </div>
    )
}

export default Footer;