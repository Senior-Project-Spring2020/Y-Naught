import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { product } from '../../actions/product';

const CreateProduct = ({ product, history }) => {
	const [formData, setFormData] = useState({
		name: '',
		price: '',
		size: '',
		brand: '',
		era: '',
		width: '',
		lngth: '',
		description: '',
		imageData: '',
		available: '',
		quantity: ''
	});

	const {
		name,
		price,
		size,
		brand,
		era,
		width,
		lngth,
		description,
		imageData,
		available,
		quantity
	} = formData;

	const onChange = e =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async e => {
		e.preventDefault();
		product(formData, history);
		console.log(formData);
	};

	return (
		//<Fragment>
		// <h1 className="large text-primary">Create Product</h1>
		<Form className='form' onSubmit={e => onSubmit(e)}>
			<Form.Group controlId='formBasicEmail'>
				<Form.Label>Item Name</Form.Label>
				<Form.Control
					type='name'
					name='name'
					value={name}
					onChange={e => onChange(e)}
					required
				/>
			</Form.Group>
			<Form.Group controlId='formBasicEmail'>
				<Form.Label>Price</Form.Label>
				<Form.Control
					type='number'
					name='price'
					value={price}
					onChange={e => onChange(e)}
					required
				/>
			</Form.Group>
			<div className='form-group'>
				<input
					type='size'
					placeholder='Size'
					name='size'
					value={size}
					onChange={e => onChange(e)}
				/>
			</div>
			<div className='form-group'>
				<input
					type='brand'
					placeholder='Brand'
					name='brand'
					value={brand}
					onChange={e => onChange(e)}
					required
				/>
			</div>
			<div className='form-group'>
				<input
					type='era'
					placeholder='Era'
					name='era'
					value={era}
					onChange={e => onChange(e)}
				/>
			</div>
			<div className='form-group'>
				<input
					type='width'
					placeholder='Width'
					name='width'
					value={width}
					onChange={e => onChange(e)}
				/>
			</div>
			<div className='form-group'>
				<input
					type='length'
					placeholder='Length'
					name='lngth'
					value={lngth}
					onChange={e => onChange(e)}
				/>
			</div>
			<div className='form-group'>
				<input
					type='description'
					placeholder='Description'
					name='description'
					value={description}
					onChange={e => onChange(e)}
				/>
			</div>
			<div className='form-group'>
				<input
					type='quantity'
					placeholder='Quantity'
					name='quantity'
					value={quantity}
					onChange={e => onChange(e)}
				/>
			</div>
			<div>
				<input
					type='file'
					placeholder='imageData'
					name='imageData'
					value={imageData}
					onChange={e => onChange(e)}
				/>
			</div>
			<input type='submit' className='btn btn-primary' value='Create Product' />
		</Form>
		//</Fragment>
	);
};

CreateProduct.propTyes = {
	product: PropTypes.func.isRequired
};

export default connect(null, { product })(withRouter(CreateProduct));
