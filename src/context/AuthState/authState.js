import React,{useReducer} from 'react';
import AuthReducer from './authreducer';
import AuthContext from './authContext';
import {OBTENER_USUARIO, OUT_USUARIO, CREATE_USER} from '../../types';

const AuthState = props =>{
  const initialState ={
    usuario: null
  }
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const obtenerUsuario = user =>{
    dispatch({
      type: 'OBTENER_USUARIO',
      payload: user
    })
  }
  const usuarioOut = ()=>{
    dispatch({
      type:'OUT_USUARIO'
    })
  }
  
  return(
  <AuthContext.Provider value={{
      usuario: state.usuario,
      obtenerUsuario,
      usuarioOut,
  }}
    >
    {props.children}
    </AuthContext.Provider>
  );
}
export default AuthState;
