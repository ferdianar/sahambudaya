import React, { Component } from 'react'
import { Container , Row , Col , Button , Form } from 'react-bootstrap';
import playstore from '../pictures/playstore.png';
import appstore from '../pictures/appstore.png';


class Footer extends React.Component {
    render() {
        return <React.Fragment>
            <Container fluid>
                <Row className="footer">
                    <Col className="footerbrand" md={5}>
                        <h3 className="textWeight">Saham budaya</h3>
                        <p className="description">Aplikasi untuk mengeksplore dan mempelajari budayadi berbagai daerah serta penjualan produk produk budaya.</p>
                        <h5 className="textWeight pt-3 pb-3">Download Aplikasi di</h5>
                        <div className="download">
                            <div className="playstore">
                                <img src={playstore} />
                            </div>
                            <div className="appstore">
                                <img src={appstore} />
                            </div>
                        </div>
                    </Col>
                    <Col className="discover" md={2}>
                        <h4 className="textWeight">Discover</h4>
                        <p className="description footerLineHeight">Artikel budaya</p>
                        <p className="description footerLineHeight">Kursus budaya</p>
                        <p className="description footerLineHeight">Tentang kami</p>
                    </Col>
                    <Col className="fitur" md={2}>
                        <h4 className="textWeight">Fitur kami</h4>
                        <p className="description footerLineHeight">Video tutorial</p>
                        <p className="description footerLineHeight">Digital market</p>
                        <p className="description footerLineHeight">Kursus tarian</p>
                        <p className="description footerLineHeight">Konsultasi</p>
                    </Col>
                    <Col className="googleForm" md={3}>
                        <h4 className="textWeight">Google Form</h4>
                        <Button className="button" variant="warning">Beri saran</Button>
                        <Form.Text className="text-muted">
                        Silahkan beri kami kritik dan saran untuk lebih baik. Terima kasih.
                        </Form.Text>
                    </Col>
                    <Row className="copyright">
                    <Col>
                        <p className="textWeight">2020 Sinau Paham Budaya.</p>
                    </Col>
                </Row>
                </Row>
            </Container>
        </React.Fragment>
    }
}

export default Footer;