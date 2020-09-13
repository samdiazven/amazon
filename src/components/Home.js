import React,{useContext, useEffect} from 'react';
import "../styles/Home.css";
import Product from './Product';
import {auth} from '../firebase/firebase';
import AuthContext from '../context/AuthState/authContext';
import AuthState from '../context/AuthState/authState';
const Home = () => {
  const context = useContext(AuthContext);
  const {obtenerUsuario, usuarioOut} = context;

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
 
    return (
      
        <div className="home">
          
       <img src="https://images-eu.ssl-images-amazon.com/images/G/30/digital/video/magellan/country/spain/EvergreenRefresh/fromDec19/ES_Evergreen_Refresh_FT_XSite_HeroTALL_1500x600._CB406900867_.jpg"
            className="home__logo"
            alt="Home"
            />
            <div className="home__row">
         <Product 
            id={200}
            title="La forma de aprender components"
            price={11.25}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41mCozLA9CL._SR600,315_SCLZZZZZZZ_.jpg"
         /> 
         <Product 
            id={127}
            title="La forma de aprender components"
            price={11.25}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41mCozLA9CL._SR600,315_SCLZZZZZZZ_.jpg"
         /> 
         </div>
        <div className="home__row">
         <Product 
            id={128}
            title="La forma de aprender components"
            price={11.25}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41mCozLA9CL._SR600,315_SCLZZZZZZZ_.jpg"
         /> 
         <Product 
            id={129}
            title="La forma de aprender components"
            price={11.25}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41mCozLA9CL._SR600,315_SCLZZZZZZZ_.jpg"
         /> 
           <Product 
            id={300}
            title="La forma de aprender components"
            price={11.25}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41mCozLA9CL._SR600,315_SCLZZZZZZZ_.jpg"
         /> 
         </div>
         <div className="home__row"> 
         <Product 
            id={123}
            title="La forma de aprender components"
            price={11.25}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41mCozLA9CL._SR600,315_SCLZZZZZZZ_.jpg"
         /> 
         </div>
        </div>
       
      );
}
 
export default Home;
