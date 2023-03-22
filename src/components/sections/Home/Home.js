import React from 'react';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import './home.css';

function Home() {
    return (
    <header id='home' className=''>
        <div className='text-carousel'>
            <h1>Proporciónale un hogar seguro</h1>
            <h1>a tu nuevo mejor amigo.</h1>
            <br />
            <h6>En PET ADOPCIONES rescatamos animalitos en situación de calle,</h6>
            <h6>les devolvemos la salud y la alegría para que la compartan contigo.</h6>
            <br />
            <Button id='home-read-more'>Leer más</Button>
        </div>
        <Carousel>
            <Carousel.Item>
                <div className="d-block w-100 img-carousel c1"></div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-block w-100 img-carousel c2"></div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="d-block w-100 img-carousel c3"></div>
            </Carousel.Item>
            
        </Carousel>
    </header>
    );
}

export default Home;