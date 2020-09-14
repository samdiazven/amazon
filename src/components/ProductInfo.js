import React from 'react';
import '../styles/ProductInfo.css';
import  {useStateValue} from '../context/StateProvider';


const ProductInfo = ()=>{
 const [{productinfo}] = useStateValue();
    return(
      <div className="ProductInfo">
      <img src={productinfo.image} />
      <h3>{productinfo.title}</h3>
      <div className="product__rating">
       {Array(productinfo.rating).fill().map((_,)=>(
        <p >⭐</p> ))}
      </div>
      <h3>Descripcion: </h3>
      <p>El mejor Control para juegos de pc</p>
      <h3>Marca</h3>
      <p>Sony</p>
      <h3>Colores</h3>
      <p>Negro</p>
      
	</div>
    )
    
}
export default ProductInfo;
