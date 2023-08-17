import { useDispatch, useSelector } from "react-redux";
import './components_css/Cart.css'
import { addQuant, clear, deleteFromCart, minusQuant } from "../RTK/Slices/CartSlice";

function Cart(){
    window.scrollTo(0,0);
    const cartProducts = useSelector(state => state.cart);
    const dispatch = useDispatch()
    const totalPrice = cartProducts.reduce((acc,product)=>{
        acc += product.price * product.quantity;
        return acc
    },0)
    return(
        <>
            <div className="cart-content text-center py-3">
                <div className="container">
                    <p>You Can Find The Flowers You Added To Cart Here</p>
                    <div className="cart-body">
                        {cartProducts.length === 0 ? <h3>No Items Added</h3> :cartProducts.map((product)=>{
                            return(
                            <div className="box" key={product.id}>
                                <span className="frame1"></span>
                                <span className="frame2"></span>
                                <div className="left">
                                    <img src={product.image} alt={product.title} />
                                </div>
                                <div className="right-cont">
                                    <div className="top">
                                        <p>{product.title}</p>
                                        <span>{product.price} EGP</span>
                                    </div>
                                    
                                    <div className="mid">
                                        <span onClick={()=>dispatch(minusQuant(product))}>-</span>
                                        <p>{product.quantity}</p>
                                        <span onClick={()=>dispatch(addQuant(product))}>+</span>
                                    </div>

                                    <div className="bottom">
                                       <button className="btn btn-danger" onClick={()=>dispatch(deleteFromCart(product))}>Delete</button>
                                    </div>

                                </div>
                                
                            </div>  
                            )
                        })}
                        <p className="total-price">Total Price : {totalPrice.toFixed(2)} EGP</p>
                    </div>
                    <button type="button" className="btn btn-primary my-5" onClick={()=>{dispatch(clear())}}>Clear Cart</button>
                </div>
            </div>
        </>
    )
}

export default Cart;