import React, { Component } from 'react';
import { Row , Col , Container } from 'react-bootstrap';
import videoIcons from '../pictures/pointer.png';
import marketIcons from '../pictures/online.png';
import consultationIcons from '../pictures/consultation.png';
import PaymentIcon from '../pictures/bank.png';

class Services extends React.Component {
    FeaturesVideo = () => {
        return (
            <Col>
                <img src={videoIcons} />
                <h3 className="textWeight">Video Tutorial</h3>
                <p className="description">Video tutorial berkualitas tinggi yang bisa memperjelas materi</p>
            </Col>
        )
    }
    FeaturesDigital = () => {
        return (
            <Col>
                <img src={marketIcons} />
                <h3 className="textWeight">Market Digital</h3>
                <p className="description">Kamu bisa beli barang dan makanan yang kamu inginkan.</p>
            </Col>
        )
    }
    Consultation = () => {
        return (
            <Col>
                <img src={consultationIcons} />
                <h3 className="textWeight">Konsultasi Online</h3>
                <p className="description">Kamu bisa konsultasi kapanpun jika kamu mengalami permasalahan. </p>
            </Col>
        )
    }
    Payment = () => {
        return (
            <Col>
                <img src={PaymentIcon} />
                <h3 className="textWeight">Pembayaran Mudah</h3>
                <p className="description">Kamu bisa melakukan transaksi dengan mudah dan aman. </p>
            </Col>
        )
    }
    render() {
        return <>
        <div className="services">
            <h1 className="text-center textWeight">Apa saja Pelayanan kami ?</h1>
            <p className="text-center description">Kami menyediakan berbagai fitur yang nantinya bisa 
            mempermudah pengguna untuk mempelajari suatu hal.</p>
        </div>
        <Container>
            <Row className="listFeature">
                <this.FeaturesVideo />
                <this.FeaturesDigital />
            </Row>
            <Row className="listFeature">
                <this.Consultation />
                <this.Payment />
            </Row>
        </Container>
        </>
    }
}

export default Services;