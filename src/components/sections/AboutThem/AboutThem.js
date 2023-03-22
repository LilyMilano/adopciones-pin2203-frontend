import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './AboutThem.css';

function AboutThem() {
  return (
    <section id="aboutthem">
      <div id="aboutthem-image">
        <div id="aboutthem-text">
          <Carousel controls={false} slide={false}>
            <Carousel.Item className='carousel-base' id='carousel-1'>
              <h6>Nuestras mascotas</h6>
              <h2>Gozan de Buena Salud</h2>
              <br></br>
              <p>Después de ser rescatadas, las mascotas son atendidas por nuestro personal médico de forma minuciosa, se les aplica el tratamiento y vacunas para devolverles la salud. </p>
            </Carousel.Item>
            <Carousel.Item className='carousel-base' id='carousel-2'>
              <h6>Convivencia en grupos</h6>
              <h2>Otras mascotas y niños</h2>
              <br></br>
              <p>Las mascotas en PET ADOPCIONES son amorosa y cuidadosamente entrenadas para su reinserción en grupos, con otros compañeros de juegos rescatados y de soporte, con niños y familias. </p>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default AboutThem;