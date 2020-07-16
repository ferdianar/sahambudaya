import React, { Component } from 'react';
import { Container , Row , Col } from 'react-bootstrap';
import firstImage from "../pictures/bread.jpg";
import secondImage from "../pictures/ayam.jpg";
import thirdImage from "../pictures/ayam2.jpg";
import fourImage from "../pictures/Lumpia.jpg";

class Gallery extends React.Component {
    render() {
        return <React.Fragment>
            <Container>
            <Row className="gallery">
                <Col>
                    <h1 className="text-center textWeight">Galeri produk kami</h1>
                    <p className="description text-center">Berikut adalah galeri kami yang terdiri dari gambaran produk dan layanan kami salah satunya market digital penjualan bumbu dan makanan daerah.</p>
                </Col>
            </Row>
                <Row className="grid-container">
                    <Col className="imagegallery" style={{backgroundImage: `url(${firstImage})`}}></Col>
                    <Col className="imagegallery" style={{backgroundImage: `url(${secondImage})`}}></Col>
                </Row>
                <Row className="grid-container secondGrid">
                    <Col className="imagegallery" style={{backgroundImage: `url(${thirdImage})`}}></Col>
                    <Col className="imagegallery" style={{backgroundImage: `url(${fourImage})`}}></Col>
                </Row>
            </Container>
        </React.Fragment>
    }
}

export default Gallery;