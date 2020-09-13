import React,{useContext} from 'react';
import '../styles/Header.css';
import {Link, Router} from 'react-router-dom';
import {auth} from '../firebase/firebase';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import  {useStateValue} from '../context/StateProvider';
import AuthContext from '../context/AuthState/authContext';
const Header = () => {
    const authcontext = useContext(AuthContext);
    const {usuario} = authcontext;
    const [{basket}] = useStateValue();

    const handleAuthentication = () =>{
      if(usuario){
	auth.signOut();
      }
    }
    return (
        <nav className="header">
            {/* Logo a la izquierda -> img*/}
            <Link to="/">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
            </Link>
            {/* Buscador*/}
            <div className="header__search">
            <input className="header__searchInput" type="text"/>
            <SearchIcon className="header__searchIcon" />
            </div>
            {/** Buscador */}

            {/*------------ 3 Botones------------------*/}
            <div className="header__options">
                {/*1st options*/}
                  <Link to={usuario ? '/' : '/login'} className="header__link">
                   <div onClick={handleAuthentication} className="header__option">
                    <span className="header__optionOne">{usuario ? `Hola ${usuario.displayName}` : 'Hola Invitado'}</span>
                    <span className="header__optionTwo">{usuario  ? 'Sign Out'  : 'Sign in'}</span>
                   </div>
                  </Link> 
                {/*2nd options*/}
                <Link to="/" className="header__link">
                   <div className="header__option">
                    <span className="header__optionOne">Returns</span>
                    <span className="header__optionTwo">& orders</span>
                   </div>
                  </Link>
                {/*3rd options*/}
           <Link to="/" className="header__link">
                   <div className="header__option">
                    <span className="header__optionOne">Your</span>
                    <span className="header__optionTwo">Prime</span>
                   </div>
                  </Link> </div>
                  {/**-----------3 Botones ---------------*/}

            {/* Carrito con el numero de items*/}
                <Link to="/checkout" className="header__link">
                <div className="header__carShopping">
                    <ShoppingBasketIcon />
                   <span className="header__optionTwo header__basketCount">{basket?.length}</span>
                </div>
                </Link>
            {/** Carrito con el numero de items*/}
        </nav>

      );
}
 
export default Header;
