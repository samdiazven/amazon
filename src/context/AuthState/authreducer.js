

import {OBTENER_USUARIO, OUT_USUARIO} from '../../types';
export default (state, action) =>{

  switch(action.type){
    case 'OBTENER_USUARIO':
      return{
	...state,
	usuario: action.payload
      }
    case 'OUT_USUARIO':
      return{
	...state,
	usuario: null
      }
      default:
	return state;
    
  }
  
}
