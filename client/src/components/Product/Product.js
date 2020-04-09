import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import Spinner from '../layout/Spinner';
import { getProductByID } from '../../actions/product';

const Product = ({
	getProductByID,
	product: { product, loading },
	auth,
	match
}) => {
	useEffect(() => {
		getProductByID(match.params.id);
	}, [getProductByID]);

	return <div>product</div>;
};

Product.propTypes = {
	getProductByID: PropTypes.func.isRequired,
	product: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	product: state.product,
	auth: state.auth
});

export default connect(mapStateToProps, { getProductByID })(Product);