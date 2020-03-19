import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';
import { getProducts } from '../../actions/product';

import './Products.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import card from '../../assets/Y-Naught_Square.png';

const Products = ({ getProducts, product: {products, loading} }) => {
    useEffect(() => {
        getProducts();
    }, []);

    return <Fragment>
                <Container fluid className="products-box">
                    <header className ="products-header">
                        <h1>Products</h1>
                    </header>
                    <br></br>
                    <Row>
                        {products.length > 0 ? (
                            products.map(product => (
                            //<img src= {product.imageData} alt="1" width="175" height="auto"/>
                            <ProductItem key={product._id} product={product}/>
                            ))
                        ) : <h4> no products found </h4>}
                    </Row>
                </Container>
    </Fragment>
}
    // return(
    // <Container fluid className="products-box">
    //     <header className ="products-header">
    //         <h1>Products</h1>
    //     </header>
    //     <br></br>
    //     <Row>
    //         <Col className="products">
    //             <img src= {card} alt="1" width="175" height="auto"/>
    //             <figcaption>Y-Naught</figcaption>
    //         </Col>
    //             <Col className="products">
    //                 <img src= {card} alt="2" width="175" height="auto"/>
    //                 <figcaption>Y-Naught</figcaption>
    //             </Col>
    //             <Col className="products">
    //                 <img src= {card} alt="3" width="175" height="auto"/>
    //                 <figcaption>Y-Naught</figcaption>
    //             </Col>
    //         </Row>
    //         <br></br>
    //         <Row>
    //             <Col className="products">
    //                 <img src= {card} alt="1" width="175" height="auto"/>
    //                 <figcaption>Y-Naught</figcaption>
    //             </Col>
    //             <Col className="products">
    //                 <img src= {card} alt="2" width="175" height="auto"/>
    //                 <figcaption>Y-Naught</figcaption>
    //             </Col>
    //             <Col className="products">
    //                 <img src= {card} alt="3" width="175" height="auto"/>
    //                 <figcaption>Y-Naught</figcaption>
    //             </Col>
    //         </Row>
    //     </Container>
    // );

Products.propTypes = {
    getProducts: PropTypes.func.isRequired,
    product: PropTypes.object. isRequired
};

const mapStateToProps = state => ({
    product: state.product
});

export default connect(mapStateToProps, { getProducts }) (Products);