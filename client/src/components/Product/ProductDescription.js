import React from 'react';
import PropTypes from 'prop-types';
import './Product.css';

const ProductDescription = ({
	product: { name, price, size, brand, era, description },
}) => {
	return (
		<div>
			<h2>{name}</h2>
			<h4>${price}</h4>
			<br />
			<p>{description}</p>
			<ul>
				<li>
					{size && (
						<span>
							<b>Size: </b>
							{size}
						</span>
					)}
				</li>
				<li>
					{era && (
						<span>
							<b>Era: </b>
							{era}
						</span>
					)}
				</li>
			</ul>
		</div>
	);
};

ProductDescription.propTypes = {
	product: PropTypes.object.isRequired,
};

export default ProductDescription;