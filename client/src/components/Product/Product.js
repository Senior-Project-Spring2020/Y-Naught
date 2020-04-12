import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProductByID } from '../../actions/product';
import ProductCarousel from './ProductCarousel';
import ProductDescription from './ProductDescription';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './Product.css';
import {addToCart} from '../../actions/cart';
import Button from '@material-ui/core/Button';

const Product = ({
	getProductByID,
	product: { product, loading },
	auth,
	match,
	addToCart
}) => {
	useEffect(() => {
		getProductByID(match.params.id);
	}, [getProductByID]);

	const HandleAddToCart = () =>{
		addToCart(product);
	}
	return (
		<Fragment>
			{product === null || loading ? (
				<p>loading</p>
			) : (
				<Fragment>
					<Link to='/products' class='btn btn-light'>
						Back to Products
					</Link>
					<div class='container'>
						<Container>
							<Row>
								<Col lg='7'>
									<ProductCarousel product={product} />
								</Col>
								<Col lg='5'>
									<ProductDescription product={product} />
									<Button type='submit' class='o-button-basket' onClick={HandleAddToCart}>
										<span class='c-product-add-to-cart__text'>Add to Cart</span>
									</Button>
								</Col>
							</Row>
						</Container>
					</div>
				</Fragment>
			)}
		</Fragment>
	); //TODO: If user = admin, add edit product button
};

Product.propTypes = {
	getProductByID: PropTypes.func.isRequired,
	product: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	product: state.product,
	auth: state.auth,
	addToCart:state.addToCart,
});

export default connect(mapStateToProps, { getProductByID, addToCart })(Product);