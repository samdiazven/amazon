import React from 'react';
import '../styles/ProductInfo.css';
import  {useStateValue} from '../context/StateProvider';


const ProductInfo = ()=>{
 const [{productinfo}] = useStateValue();
    return(
      <div className="ProductInfo">
      <img src={productinfo.image} />
      <h3>{productinfo.title}</h3>
	</div>
    )
    
}
export default ProductInfo;
