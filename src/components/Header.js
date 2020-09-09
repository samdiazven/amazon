import React from 'react';
import '../styles/Header.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import  {useStateValue} from '../context/StateProvider';
const Header = () => {
    const [{basket}] = useStateValue();
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
                  <Link to="/" className="header__link">
                   <div className="header__option">
                    <span className="header__optionOne">Hello</span>
                    <span className="header__optionTwo">Sign in</span>
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
                    <ShoppingBasketIcon className="" />
                   <span className="header__optionTwo header__basketCount">{basket?.length}</span>
                </div>
                </Link>
            {/** Carrito con el numero de items*/}
        </nav>

      );
}
 
export default Header;