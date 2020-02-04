import React from 'react';
import './Products.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Image from 'react-bootstrap/Image'
import card from '../../assets/Y-Naught_Square.png'

const Products = () => {
    return(
        <Container fluid className="products-box">
            <header className ="products-header">
                <h1>Products</h1>
            </header>
            <br></br>
            <Row>
                <Col className="products">
                    <img src= {card} alt="1" width="175" height="auto"/>
                    <figcaption>Y-Naught</figcaption>
                </Col>
                <Col className="products">
                    <img src= {card} alt="2" width="175" height="auto"/>
                    <figcaption>Y-Naught</figcaption>
                </Col>
                <Col className="products">
                    <img src= {card} alt="3" width="175" height="auto"/>
                    <figcaption>Y-Naught</figcaption>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col className="products">
                    <img src= {card} alt="1" width="175" height="auto"/>
                    <figcaption>Y-Naught</figcaption>
                </Col>
                <Col className="products">
                    <img src= {card} alt="2" width="175" height="auto"/>
                    <figcaption>Y-Naught</figcaption>
                </Col>
                <Col className="products">
                    <img src= {card} alt="3" width="175" height="auto"/>
                    <figcaption>Y-Naught</figcaption>
                </Col>
            </Row>
        </Container>
    );
}

export default Products;