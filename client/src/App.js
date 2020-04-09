import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import NotFound from "./components/NotFound";
import NavBar from "./components/Header/NavBar";
import Register from "./components/Register/register";
import Login from "./components/Login/login";
import adminRoute from "./components/Admin/adminLogin"
import CreateProduct from './components/CreateProduct/createProduct';
import Alert from './components/Alert';
//Redux
import { Provider, connect } from 'react-redux';
import store from './store';
import { loadUser, loadAdmin} from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import PropTypes from 'prop-types';
import PrivateRoute from './components/Routing/HideCreate';

//stripe
// import ProductCard from './components/ProductCard/ProductCard';
import Checkout from './components/Checkout/Checkout';
import Cart from './components/Cart/Cart';

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadAdmin());
  }, []);

  return (
      <Provider store={store}>
        <div>
          <NavBar />
          <Alert />
          <Switch>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Products" component={Products} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/Login" component={Login} />
            <Route path="/createproduct" component={CreateProduct} />
            <Route exact path="/Cart" component={Cart} />
            <Route exact path="/admin/login" component={adminRoute} />
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
