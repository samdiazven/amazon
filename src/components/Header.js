import React,{useContext,useState} from 'react';
import '../styles/Header.css';
import {Link, useHistory} from 'react-router-dom';
import {auth} from '../firebase/firebase';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import  {useStateValue} from '../context/StateProvider';
import AuthContext from '../context/AuthState/authContext';
const Header = () => {
    const authcontext = useContext(AuthContext);
    const {usuario} = authcontext;
    const [{basket}] = useStateValue();
    const [search, handleSearch] = useState('');
    const history = useHistory();
    const handleAuthentication = () =>{
      if(usuario){
	auth.signOut();
      }
    }
  const handleSubmit = e =>{
      e.preventDefault();
      history.push(`/search/${search}`);
  }
    return (
        <nav className="header">
            {/* Logo a la izquierda -> img*/}
            <Link to="/">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
            </Link>
            {/* Buscador*/}
	    <form onSubmit={handleSubmit}>
            <div className="header__search">
            <input 
	    className="header__searchInput"
	    type="text" name="search"
	    value={search}
	    onChange={e => handleSearch(e.target.value)}/>
            <SearchIcon className="header__searchIcon" />
            </div>
	    </form>
            {/** Buscador */}

            {/*------------ 3 Botones------------------*/}
            <div className="header__options">
                {/*1st options*/}
                  <Link to={usuario ? '/' : '/login'} className="header__link">
                   <div onClick={handleAuthentication} className="header__option">
                    <span className="header__optionOne">{usuario ? `Hola ${usuario.displayName}` : 'Hola Invitado'}</span>
                    <span className="header__optionTwo">{usuario  ? 'Logout'  : 'Ingresar'}</span>
                   </div>
                  </Link> 
                {/*2nd options*/}
                <Link to="/" className="header__link">
                   <div className="header__option">
                    <span className="header__optionOne">Tus</span>
                    <span className="header__optionTwo">Compras</span>
                   </div>
                  </Link>
                {/*3rd options*/}
           <Link to="/create" className="header__link">
                   <div className="header__option">
                    <span className="header__optionOne">cargar</span>
                    <span className="header__optionTwo">Producto</span>
                   </div>
                  </Link> </div>
                  {/**-----------3 Botones ---------------*/}

            {/* Carrito con el numero de items*/}
		<div className="header__basket">
                <Link to="/checkout" className="header__link">
                <div className="header__carShopping">
                    <ShoppingBasketIcon />
                   <span className="header__optionTwo header__basketCount">{basket?.length}</span>
		</div>
                </Link>
                </div>
            {/** Carrito con el numero de items*/}
        </nav>

      );
}
 
export default Header;
