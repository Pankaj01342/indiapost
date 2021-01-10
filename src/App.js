import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Ippb from './Ippb';
import PostalIn from './Postal_in';
import Ssa from './Ssa';
import Sb from './Sb';
import Mis from './Mis';
import Dakpay from './Dakpay';
import Footer from './Footer';


import { BrowserRouter as Router,Switch,Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/ippb">
            <Ippb />
          </Route>

          <Route path="/postal_insurance">
            <PostalIn />
          </Route>

          <Route path="/ssa">
            <Ssa />
          </Route>

          <Route path="/sb">
            <Sb />
          </Route>

          <Route path="/mis">
            <Mis />
          </Route>

          <Route path="/dakpay">
            <Dakpay />
          </Route>
  
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
