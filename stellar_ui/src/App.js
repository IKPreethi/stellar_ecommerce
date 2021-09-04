import {React, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from './components/home';
import LandingPage from './components/LandingPage/LandingPage';
import ProductDescription from './components/ProductDescription/ProductDescription';
import ContactUs from './components/ContactUs';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.authenticationReducer.isLoggedIn);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if(token != null && token!= undefined)
    {
      dispatch({type: "USER_AUTHENTICATED", payload:{ token: token }});
    }
  }, []);

  return (
      <BrowserRouter basename="/">
        <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" render={() => (isLoggedIn ? <Home /> : <LandingPage />)} />
          {/* <Route path="/home" component={Home} />
          <Route path="/" exact component={LandingPage} /> */}
          <Route path="/product-description/:id" component={ProductDescription} />
          <Route path="/ContactUs" component={ContactUs} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
