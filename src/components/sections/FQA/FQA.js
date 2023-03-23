import Accordion from 'react-bootstrap/Accordion';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './FQA.css';

function FQA() {
	return (
		<section id="fqa">
			<Container>
				<Row className="d-md-none d-block mb-3">
					<Col md={12}>
						<img
							src="/static/media/f4.a75e5c325b2388ad7b88.jfif"
							alt="chica"
							className="img-fluid rounded"
						/>
					</Col>
				</Row>
				<Row>
					<Col md={6}>
						<Accordion defaultActiveKey="0">
							<Accordion.Item eventKey="0">
								<Accordion.Header>
									¿Cuál es la historia de la mascota?
								</Accordion.Header>
								<Accordion.Body>
									Llevamos un registro médico y acerca del pasado de la mascota.
									Si fue encontrada en situación de calle o el dueño anterior
									nos la entregó en el Centro. Ofrecemos esta información que
									ayudará a prepararte y a entender la personalidad de tu nuevo
									compañero.
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="1">
								<Accordion.Header>
									¿Cómo debo alimentar a la mascota?
								</Accordion.Header>
								<Accordion.Body>
									Al momento de llevarte el nuevo integrante de la familia a
									casa, te informaremos qué tipo de comida estábamos dando a tu
									perro o gato. Recuerda, que no debes cambiar la comida de un
									día para otro, sino progresivamente para evitar malestares
									gastrointestinales.
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="2">
								<Accordion.Header>¿Dónde prestan servicio?</Accordion.Header>
								<Accordion.Body>
									Actualmente prestamos servicio en CABA y Gran Buenos Aires.
									Los animalitos que pernoctan en las calles de la ciudad viven
									bajo condiciones de alto estrés y riesgo permanente. Esto, no
									sólo por la ausencia de cuidados y del suministro de sus
									necesidades básicas, sino también por el impacto del ruido,
									vehículos y posibles enfermedades.
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default FQA;
