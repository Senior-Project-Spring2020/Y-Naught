import React, { Component } from "react";
import { connect } from "react-redux";
import { getCart } from "../../actions/cart";
import PropTypes from "prop-types";
import AllCart from "./AllCart";
import './Cart.css';
//Material UI
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Checkout from "../Checkout/Checkout";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.handleClickClose = this.handleClickClose.bind(this); 
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.state = {

    }
  }
  componentDidMount() {
    this.props.getCart();
  }

  onDeleteClick = id => {
    this.props.remoteItem(id);
  };

  handleClickOpen = () => {
    this.setState({
      setOpen: true,
    });
  }

  //Handle popup close message
  handleClickClose = () => {
    this.setState({
      setOpen: false,
    });
  }

  render() {
    const { cart, loading } = this.props.cart;
    const { itemInCart } = this.props;

    let cartContent;

    if (cart === null) {
      cartContent = <div>No items in Cart</div>;
    } else {
      cartContent = <AllCart cart={cart} />;
    }

    return (
      <div className="product-container" >
        <div>{cartContent}</div>
        <div className="checkout-button">
        <Button color="secondary" variant="contained" onClick={this.handleClickOpen}>Checkout</Button>
        </div>
        <Dialog
          open={this.state.setOpen}
          onClose={this.handleClickClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          unmountOnExit
        >
          <DialogTitle id="alert-dialog-title">{"Payment"}</DialogTitle>
          <DialogContent>
            <Checkout />
          </DialogContent>
          <DialogActions>
            <Button size="small" onClick={this.handleClickClose} color="primary">Back</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  };

}
Cart.propTypes = {
  getCart: PropTypes.func.isRequired,
  itemInCart: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(
  mapStateToProps,
  { getCart }
)(Cart);