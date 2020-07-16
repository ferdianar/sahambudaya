import React, { Component } from 'react';
import { Container, Row, Col , Button } from 'react-bootstrap';
import mainFeatureImage from "../pictures/balidanse.jpg";

class MainFeature extends React.Component {
    render() {
        return <>
            <Container>
                <Row className="MainFeature">
                    <Col md={6}>
                        <h1 className="textWeight">Apa layanan utama kami ?</h1>
                        <p className="description text-left">Layanan utama kami adalah video tutorial tentang tarian budaya di berbagai daerah di Indonesia. Disini kalian bisa akses langsung. </p>
                        <Button className="button" variant="warning">Lihat video tutorial</Button>
                    </Col>
                    <Col md={6} className="imageMainFeature" style={{backgroundImage: `url(${mainFeatureImage})`}}></Col>
                </Row>
            </Container>
        </>
    }
}

export default MainFeature;