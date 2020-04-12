import React from 'react';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import logo from '../../assets/Y-Naught_Square.png';

function Home() {
	return (
		<Carousel className='carousel-box'>
			<Carousel.Item>
				<img
					src={logo}
					alt='First slide'
					width='400'
					height='400'
					className='center'
				></img>
				<Carousel.Caption>
					<h3>First slide label</h3>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					src={logo}
					alt='Third slide'
					width='400'
					height='400'
					className='center'
				></img>

				<Carousel.Caption>
					<h3>Second slide label</h3>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					src={logo}
					alt='Third slide'
					width='400'
					height='400'
					className='center'
				></img>

				<Carousel.Caption>
					<h3>Third slide label</h3>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default Home;
