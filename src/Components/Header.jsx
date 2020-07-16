import React, { Component } from 'react';
import { Jumbotron , Container, Button } from 'react-bootstrap';
import mainImage from '../pictures/tari.jpg';

class Header extends React.Component {
    render() {
        return <React.Fragment>
            <Jumbotron fluid className='jumbotron'>
            <Container fluid className="d-flex ">
                <div className="headline">
                <h1>Explorasi dan belajar tentang kebudayaan.</h1>
                <p className='description'>
                Eksplorasi budaya disini dan peroleh banyak
                pengalaman dan pengetahuan tentang budaya serta belajar cara penerapan sehari-hari.
                </p>
                <p>
                    <Button className="button" variant="warning">Belajar sekarang</Button>
                    <Button className="button2 ml-5" variant="outline-warning">{' '}Hubungi kami</Button>
                </p>
                </div>
                <div className="mainImage" style={{backgroundImage:`url(${mainImage})`}}>
                </div>
            </Container>
            </Jumbotron>
        </React.Fragment>
    }
}

export default Header;