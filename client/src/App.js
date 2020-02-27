import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import NotFound from "./components/NotFound";
import NavBar from "./components/Header/NavBar";
import Register from "./components/Register/register";
import Login from "./components/Login/login";
import CreateProduct from './components/CreateProduct/createProduct';
import Alert from './components/Alert';
import Checkout from './components/Checkout/Checkout';
//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

//stripe
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
// import ProductCard from './components/ProductCard/ProductCard';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const stripePromise = loadStripe("pk_test_ezOnM2dyu2zJbsa0wqtoNdv400kW94MyA4");

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);


  return (
    <Provider store={store}>
      <Elements stripe={stripePromise}>
        <Checkout />
      </Elements>
      <div>
        {/* <Router> */}
        <NavBar />
        <Alert />
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Products" component={Products} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/CreateProduct" component={CreateProduct} />
          <Route exact path="/Checkout" component={Checkout} />
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
