import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './About.css';

function About() {
    return (
        <section id='about'>
            <Container fluid>
                <svg height="500px">
                    <rect x='0' y='0' width="32px" height="390px" fill='#DB7093'/>
                </svg>
                <Row className='about-text-container align-items-center'>
                    <Col className='about-text' md={{ span: 8, offset: 2}}>
                        <div>
                            <h1>Intenta adoptar una mascota, también te hará feliz</h1>
                            <h1 style={{color: '#DB7093'}}>Esos ojos redondos pueden ser tu salvavidas</h1>
                            <p className="text-justified">En PET ADOPCIONES estamos seguros de que la convivencia entre un ser humano y su nueva mascota trae felicidad y cambia la vida de ambos. Llevar una mascota rescatada a casa será fuente de alegría y risas. Tu nuevo mejor amigo puede satisfacer tus necesidades sociales, mejorar tu estado de ánimo e incluso tu integridad física. Los animalitos rescatados son seres increíblemente generosos que, además de ofrecerte su compañía, te demostrarán su fidelidad, complicidad y te brindarán la más feliz bienvenida al volver a casa.</p>
                        </div>
                    </Col>
                </Row>
                
            </Container>
        </section>
    );
}

export default About;