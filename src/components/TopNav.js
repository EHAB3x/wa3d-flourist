import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min';
import './components_css/TopNav.css'
import { Link } from "react-router-dom";

function TopNav(){
    return(
        <nav className="navbar navbar-expand-lg">
            <div className="container">
            <Link className="navbar-brand" to="/" dir="ltr">Wa<span>ع</span>d</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav contact">
                <li className="nav-item">
                    <Link className="nav-link hvr-underline-from-center" aria-current="page" to="/">About Us</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link hvr-underline-from-center" to="/">Contact Us</Link>
                </li>
                </ul>  
            </div>
            </div>
        </nav>
    )
}

export default TopNav;