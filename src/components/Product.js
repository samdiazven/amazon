import React from 'react'
import "../styles/Product.css"
import {useStateValue} from '../context/StateProvider';
function Product({id, price, title, rating, image}) {

    const [{basket}, dispatch] = useStateValue();

    const addToBasket = ()=>{
        ///Agregar al Basket
         dispatch({
            type: 'ADD_TO_BASKET',
            payload: {
                id,
                title,
                price,
                rating,
                image
            }
         });   
        
    };
    return (
        <div className="product">
        <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>   
                <strong> {price} </strong>
             </p>  
             <div className="product__rating">
                 {
                     Array(rating).fill().map((_)=>(
                         <p>⭐</p>
                        ))
                 }
             </div>
         </div>
            
                 <img src={image}  alt={title}/>
                 <button onClick={addToBasket}>Add to car</button>
            
        </div>
    )
}

export default Product;
