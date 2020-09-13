import React,{useEffect, useContext} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Checkout from './components/Checkout';
import {StateProvider} from './context/StateProvider';
import reducer,{initialState} from './context/StateReducer';
import AuthState from './context/AuthState/authState';
import Search from './components/Search';

function App() {
 return (
    <Router>
      <AuthState>
      <StateProvider initialState={initialState} reducer={reducer}>
    <div className="App">
      <Switch>
        <Route  path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route  path="/login">
	    <Login />
	</Route>
       <Route  path="/register">
	    <Register />
        </Route>
	<Route path="/search/:q">
	  <Header />
	  <Search />
	  </Route>  
	  <Route  path="/">
          <Header />
          <Home />
        </Route>
      
      </Switch>
   </div>
    </StateProvider>
    </AuthState>
  </Router>
  );
}

export default App;
