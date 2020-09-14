import React,{useEffect, useState, useContext} from 'react';
import Product from './Product';
import {auth} from '../firebase/firebase';
import AuthContext from '../context/AuthState/authContext';
import AuthState from '../context/AuthState/authState';
import {useParams} from 'react-router-dom';
import {useStateValue} from '../context/StateProvider';
  
const Search = ()=>{
const context = useContext(AuthContext);
  const {obtenerUsuario, usuarioOut} = context;
  const {q} = useParams();
  useEffect(()=>{
    auth.onAuthStateChanged(user =>{
      console.log(user);

      if(user){
	obtenerUsuario(user);
      }else{
	usuarioOut();
      }
    })
  },[])
    return(
	<h1> {q} </h1>
    )
}


export default Search;
