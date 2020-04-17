import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import card from '../../assets/Y-Naught_Square.png';

const ProductItem = ({
  product: {
    name,
    price,
    image
  }
}) => {
  return (
    <Col className="products">
        <a href="/home">
          <img src= {image} alt="1" width="175" height="auto"/>
        </a>
        <figcaption>{name}</figcaption>
        <figcaption>${price}</figcaption>
    </Col>   
  );
};


ProductItem.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductItem;
