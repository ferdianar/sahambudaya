import React, { Component } from 'react';
import { Row , Col , Container } from 'react-bootstrap';

class ProductRunning extends React.Component {
    render() {
        return <>
        <Container>
            <Row className="productRunning">
                <Col>
                    <h1 className="text-center textWeight">Apa dan dimana Product kami berjalan ?</h1>
                    <p className="text-center description">Produk kami antara lain kursus tari tradisional dan penjualan produk seperti pakaian budaya dan bumbu makanan tradisional. Product kami berjalan di perangkat mobile. </p>
                </Col>
            </Row>
        </Container>
        </>
    }
}
export default ProductRunning;