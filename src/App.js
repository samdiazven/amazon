import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import {StateProvider} from './context/StateProvider';
import reducer,{initialState} from './context/StateReducer';
function App() {
  return (
    <Router>
      <StateProvider initialState={initialState} reducer={reducer}>
    <div className="App">
      <Switch>
        <Route  path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route  path="/login">
          <h1>login</h1>
        </Route>
        <Route  path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
   </div>
    </StateProvider>
  </Router>
  );
}

export default App;
