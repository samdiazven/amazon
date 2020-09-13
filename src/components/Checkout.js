import React,{useState, useEffect} from 'react';
import "../styles/Checkout.css";
import { useStateValue} from '../context/StateProvider';
import CheckoutProduct from './CheckoutProdcut';
import SubTotal from './subTotal';

const Checkout = () => {
    const [{basket}, dispatch] = useStateValue();

    useEffect(()=>{
        dispatch({
            type: 'ACTUALIZAR_SUBTOTAL'
        })
    },[basket]);
    return ( 
        <div className="checkout">
        <div className="checkout__left">
            <img
            className="checkout__img"
            src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/YACC-desktop-nonprime-banner2.jpg"
            alt=""
            />
            {basket.length === 0 ?(
                <div className="checkout__empty">
                    <h1>Su carrito se encuentra vacio!</h1>
                    <p>Por favor escoja al menos un producto para poder visualizar su compra</p>
                </div>
            ):(
                <div>
                    <h2 className="checkout_title">Tu Carrito de Compras</h2>

                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                   
                </div>
            )}
            </div>
            {basket.length !==0 &&(
                <SubTotal /> 
                )}
        </div>
     );
}
 
export default Checkout;
