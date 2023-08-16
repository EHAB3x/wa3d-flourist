import "./components_css/BottomNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {useSelector} from 'react-redux'
import { Link } from "react-router-dom";
function BottomNav() {
  let cart = useSelector(state => state.cart)

  return (
    <nav className="second-nav sticky-top">
      <div className="container">
        <ul className="text-center">
          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li>
            <div className="dropdown">
              <button className="dropbtn">Bouquets And Boxes</button>
              <div className="dropdown-content wow bounceInUp">
                <a href="/#" className="move">
                  Bridal Bouquets
                </a>
                <a href="/#" className="move">
                  Gift Bouquets
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <button className="dropbtn">Gifts</button>
              <div className="dropdown-content">
                <a href="/#" className="move">
                  Handwatchs
                </a>
                <a href="/#" className="move">
                  Perfumes
                </a>
                <a href="/#" className="move">
                  Purse
                </a>
                <a href="/#" className="move">
                  Bears
                </a>
                <a href="/#" className="move">
                  Gift Boxes
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <button className="dropbtn">Party Preparation</button>
              <div className="dropdown-content">
                <a href="/#" className="move">
                  Bridal Flats
                </a>
                <a href="/#" className="move">
                  Occasions
                </a>
                <a href="/#" className="move">
                  Cafes And Restaurants
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <button className="dropbtn">Offers</button>
              <div className="dropdown-content">
                <a href="/#" className="move">
                  All Details
                </a>
                <a href="/#" className="move">
                  Product offers
                </a>
                <a href="/#" className="move">
                  Special Offers
                </a>
              </div>
            </div>
          </li>
          <li>
            <a href="/#" className="head">Helium Balloons</a>
          </li>
          <li>
            <a href="/#" className="head">Car Decoration</a>
          </li>
          <li>
            <a href="/#" className="head">Top of the year 2023</a>
          </li>
          <li>
            <a href="/#" className="head">Special request</a>
          </li>
        </ul>
        <Link className="cart-shopping" to='/cart'>
          <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
          <span id="cart-number">{cart.length}</span>
        </Link>
      </div>
    </nav>
  );
}

export default BottomNav;
