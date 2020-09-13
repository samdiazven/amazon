import React from 'react';
import "../styles/Checkout.css";
import {useStateValue} from '../context/StateProvider';

const CheckoutProduct = ({id, title, price, rating, image}) => {
    const [{basket}, dispatch] = useStateValue();
   const removeFromBasket = (id) =>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            payload: id
        });
    }
    return (
        <>
            <div className="checkoutProduct">
                <img className="checkoutProduct__image"
                    src={image}
                    alt=""
                    />
                <div className="checkoutProduct__info">
                    <p className="checkoutProduct__title">{title}</p>
                    <p className="checkoutProduct__price">
                        <small>$</small>
                        <strong>{price}</strong>
                        </p>
                    <div className="checkoutProduct__rating">
                        {Array(rating).fill().map((_,)=>(
                            <p>⭐</p>
                        ))}
                    </div>
                    <button onClick={()=>removeFromBasket(id)} className="checkoutProduct__button" >
                        Quitar del Carrito
                    </button>
                </div>
            </div>
        </>
         );
}
 
export default CheckoutProduct;