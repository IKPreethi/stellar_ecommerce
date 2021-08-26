import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from './components/home';
import LandingPage from './components/LandingPage/LandingPage';
import ProductDescription from './components/ProductDescription/ProductDescription';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter basename="/">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/" exact component={LandingPage} />
          <Route path="/product-description/:id" component={ProductDescription} />
          <Route path="/ContactUs" component={ContactUs} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
