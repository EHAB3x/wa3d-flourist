import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faSun } from '@fortawesome/free-solid-svg-icons'
import './components_css/TopNav.css'
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

function TopNav(){
    let cart = useSelector(state => state.cart)
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
                    <a className="nav-link hvr-underline-from-center" aria-current="page" href="/#">About Us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link hvr-underline-from-center" href="/#">Contact Us</a>
                </li>
                </ul>  
            </div>
            </div>
        </nav>
    )
}

export default TopNav;