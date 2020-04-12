import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeFromCart } from "../../actions/cart";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

class CartItem extends Component {
  onDeleteClick = id => {
    console.log(id);
    this.props.removeFromCart(id);
  };

  render() {
    const { itemInCart } = this.props;

    return (
      <div
        className="card-body"
        style={{ paddingTop: "5px", paddingBottom: "5px" }}
      >
        <div className="row">
          <div className="col-12 col-sm-12 col-md-2 text-center">
            <img
              className="img-responsive"
              src="http://placehold.it/120x80"
              alt="prewiew"
              width="120"
              height="80"
            />
          </div>
          <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
            <h6 className="product-name">
              <strong>{itemInCart.name}</strong>
            </h6>
            <p>
              <small>{itemInCart.description}</small>
            </p>
          </div>
          <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
            <div
              className="col-3 col-sm-3 col-md-6 text-md-right"
              style={{ paddingTop: "5px" }}
            >
              <h6>
                <strong>
                  <span className="text-muted">$</span>{itemInCart.price}
                </strong>
              </h6>
            </div>
            <div>
              <IconButton aria-label="delete" 
              onClick={this.onDeleteClick.bind(this, itemInCart._id)}
              >
                <DeleteIcon
                color="secondary"
                />
              </IconButton>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

CartItem.propTypes = {
  itemInCart: PropTypes.object.isRequired,
  removeFromCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { removeFromCart }
)(CartItem);