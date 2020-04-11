import React, { useState, Component } from 'react';
import "./Cart.css";
import { link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import {connect} from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Checkout from "../Checkout/Checkout";
import Logo from '../../assets/Y-Naught_BlckOutline.png';
import {getNum} from '../../actions/getCart'

function Cart ({props}) {
  console.log(props);
  return(
    <div>

    </div>
  )
}

const mapStateToProps = state => ({
  getNum: state.getNum
})
export default connect(mapStateToProps)(Cart);