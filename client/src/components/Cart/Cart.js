import React, { useState, Component } from 'react';
import "./Cart.css";
import { link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Checkout from "../Checkout/Checkout"
import Logo from '../../assets/Y-Naught_BlckOutline.png'
class Cart extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this); //Handle User Submit Button
    this.handleClickClose = this.handleClickClose.bind(this); //Create Session confirmation message -> refreshes admin page
    this.handleClickOpen = this.handleClickOpen.bind(this); //Handles popup message confirming edit session
    this.state = {

    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("confirmed");
  }
  //Handle popup open message
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
    return (
      <div className="product-container" >

        <div className="product-header">
          <h5 className="product-title">Product</h5>
          <h5 className="price">Price</h5>
          <h5 className="quantity">Quantity</h5>
        </div>

        <div className="shipping-price">
          <h5 className="total-price">Shipping</h5>
          <h5 className="total-price">2.99</h5>
        </div>

        <div>
          <div className="product-total">
            <h5 className="total-price">Total</h5>
            <h5 className="total-price">5.99</h5>
          </div>

        </div>
        <Button variant="contained" onClick={this.handleClickOpen}>Checkout</Button>
        <Dialog
          open={this.state.setOpen}
          onClose={this.handleClickClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          unmountOnExit
        >
          <DialogTitle id="alert-dialog-title">{"Payment screen is here"}</DialogTitle>
          <DialogContent>
            <Checkout />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClickClose} color="primary">Back</Button>
          </DialogActions>
        </Dialog>
        <div>
          <a>
            <img className="logo-att" src={Logo}></img>
          </a>
        </div>
      </div>
    )
  };
};
export default Cart;