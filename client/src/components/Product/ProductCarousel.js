import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import logo from '../../assets/Y_Naught_Gator_T.jpg';

const ProductCarousel = ({ product: { name, price } }) => {
	return (
		<div>
			<Carousel className='d-block w-100'>
				<Carousel.Item>
					<img
						src={logo}
						alt='First slide'
						width='600'
						height='600'
						className='center'
					></img>
				</Carousel.Item>
				<Carousel.Item>
					<img
						src={logo}
						alt='Third slide'
						width='600'
						height='600'
						className='center'
					></img>
				</Carousel.Item>
				<Carousel.Item>
					<img
						src={logo}
						alt='Third slide'
						width='600'
						height='600'
						className='center'
					></img>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

ProductCarousel.propTypes = {
	product: PropTypes.object.isRequired,
};

export default ProductCarousel;
