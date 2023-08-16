import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {useSelector} from 'react-redux'
import { Link } from "react-router-dom";
function CartIcon(){
    let cart = useSelector(state => state.cart)
    return(
        <Link className="cart-shopping1" to='/cart'>
            <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            <span id="cart-number">{cart.length}</span>
        </Link>
    )
}

export default CartIcon;