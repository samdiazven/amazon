export const initialState = {
    products:[],
    basket: [],
    subtotal: 0,
    user: null,
    productinfo: null
};

    const reducer = (state=initialState, action) =>{
        switch(action.type){

	  case 'SET_USER':
	    return{
		...state,
		user: action.payload

	    }
            case 'ADD_TO_BASKET':
                return {
                    ...state,
                    basket: [...state.basket, action.payload],

                }
                case 'ACTUALIZAR_SUBTOTAL':
                return{
                    ...state,
                    subtotal: state.basket.reduce((acumulador, valorActual)=>(
                            acumulador + valorActual.price
                        ),0)
                }
                
            case 'REMOVE_FROM_BASKET':
                return{
                   ...state,
                    basket: [...state.basket.filter(p =>(p.id !== action.payload))]

                }  
	  case 'PRODUCT_INFO':
	    return {
		...state,
		productinfo: state.basket.find(product => product.id === action.payload )
	    }
             default:
                 return state;
        }
    }
    export default reducer;
