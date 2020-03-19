import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import card from '../../assets/Y-Naught_Square.png';

const ProductItem = ({
  product: {
    name,
    price,
    imageData
  }
}) => {
  return (
    <Col className="products">
        <img src= {card} alt="1" width="175" height="auto"/>
        <figcaption>{name}</figcaption>
        <figcaption>${price}</figcaption>
    </Col>   
  );
};


ProductItem.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductItem;