import React,{useState} from 'react';
import "../styles/Checkout.css";
import {useStateValue} from '../context/StateProvider';
import Modal from 'react-modal';
import ProductInfo from './ProductInfo';
import '../styles/Modal.css';
const customStyles ={ 
    content : {
	    top  	        : '50%',
	    left              	: '50%',
	    right               : 'auto',
	    bottom              : 'auto',
	    marginRight         : '-50%',
	    transform           : 'translate(-50%, -50%)'
	    }
    };
const CheckoutProduct = ({id, title, price, rating, image}) => {
  const [modalIsOpen, setModal] = useState(false);
  const [{basket}, dispatch] = useStateValue();
  const removeFromBasket = id =>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            payload: id
        });
    }
  const infoProducto = id => {
	dispatch({
	  type: "PRODUCT_INFO",
	  payload: id
	});
      setModal(true);
  }
  const ProductClose = ()=>{
       setModal(false);
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
		      <br />
		     <button onClick={()=> infoProducto(id)} className="checkoutProduct__button" >
                        Ver Producto
                    </button>
	      <Modal
		isOpen={modalIsOpen}
		style={customStyles}
		  >
		    <div className="Modal">
		    <div className="modal__header">
		    <h2 className="modal__title">Hello from Modal - {id}</h2>
		    <button onClick={ProductClose} className="modal__exit">X</button>
		     </div>
		    <hr />
		    <div className="modal__body">
		    <ProductInfo
			id={id}
			price={price}
			title={title}		
			rating={rating}
			image={image}
			  
		      />
		     </div> 
		  </div>
              </Modal>
                </div>
            </div>
        </>
         );
}
 
export default CheckoutProduct;
