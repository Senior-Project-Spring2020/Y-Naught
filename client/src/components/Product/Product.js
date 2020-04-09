import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import Spinner from '../layout/Spinner';
import { getProductByID } from '../../actions/product';
import ProductCarousel from './ProductCarousel';
import ProductDescription from './ProductDescription';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './Product.css';

const Product = ({
	getProductByID,
	product: { product, loading },
	auth,
	match,
}) => {
	useEffect(() => {
		getProductByID(match.params.id);
	}, [getProductByID]);

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
									<button type='submit' class='o-button-basket'>
										<span class='c-product-add-to-cart__text'>Add to Cart</span>
									</button>
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
});

export default connect(mapStateToProps, { getProductByID })(Product);
