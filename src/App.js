import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// import 'Navbar.css';
import Navigation from "./components/Navbar";
import Cards from "./components/Cards";
import Home from "./components/home";
import OneProduct from "./components/OneproductCard";
import BreadCrumbs from "./components/breadcrumbs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/footer';


function App() {
  return (
    <Router>
      <div className="App">
        <h1>The Art of Abhi</h1>
        <h2><h2 className="justify-items-center text-warning">
        Choose the type of wall Art suitable for your home according to your
        decor
      </h2></h2>

        
        
        <div className="All-pages">
         
          
          <Switch>
          <Route exact path='/home'>
          <Navigation Nav="Navigation" />
          <Home />
            </Route>
            
            <Route exact path='/Products'>
            <div className='products-page'>
        <Navigation Nav="Navigation" />
        <Cards />
        </div>
            </Route>
            <Route exact path='/OneProduct'>
            <Navigation Nav="Navigation" />
              <OneProduct />
            </Route>
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
