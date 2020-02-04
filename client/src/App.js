import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from "./views/Home/Home";
import Products from "./views/Products/Products";
import NotFound from "./views/NotFound";
import NavBar from "./components/Header/NavBar";
import Register from "./components/Register/register";
//Redux
import { Provider } from 'react-redux';
import store from './store';

// import ProductCard from './components/ProductCard/ProductCard';


const App = () => {
  return (
    <Provider store = {store}>
      <div>
        {/* <Router> */}
        <NavBar/>
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Products" component={Products} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
          <Route component={NotFound}/>
        </Switch>
        {/* <ProductCard/> */}
        {/* </Router> */}
      </div>
    </Provider>
  );
}

export default App;
