import React, {useEffect} from 'react'
import '../styles/SubTotal.css'
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from '../context/StateProvider';

const SubTotal = ()=> {
	const [{basket, subtotal}, dispatch] = useStateValue();

	useEffect(()=>{
		dispatch({
			type: 'ACTUALIZAR_SUBTOTAL'
		})
	},[basket])
		
	return(
			<div className="subtotal">
				<div className="subtotal__info">
					<p className="subtotal__price"> Subtotal({`${basket.length} items`}): $<strong>{subtotal}</strong></p>

				</div>
				<div className="subTotal__check">
					<input type="checkbox" /> <strong>Cupon Descuento</strong>
				</div>
				<button className="subTotal__button">
					Proceder al Pago
				</button>

			</div>

		);

}
export default SubTotal;