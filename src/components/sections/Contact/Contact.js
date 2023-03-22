import React, { useState } from 'react';
import { Container, Row, Col, Form} from 'react-bootstrap';
import './Contact.css';
import Image from './formulario.jpg';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ContactForm from './Contact-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const defaultContactValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
}
const phoneRegExp = '[0-9]{8}'
const schema = yup.object().shape({
    name:  yup.string()
        .max(255,'Supera el maximo de caracteres')
        .required('Este campo es requerido'),
    email: yup.string()
        .max(255, 'Supera el maximo de caracteres')
        .email('Esto no parece un email')
        .required('Este campo es requerido'),
    phone: yup.string()
        .max(8, 'Supera el maximo de caracteres')
        .min(8, 'Esto no parece un número telefonico')
        .matches(phoneRegExp, 'Esto no parece un número'),
    message: yup.string()
        .min(4, 'Escriba un mensaje más largo')
        .required('Este campo es requerido'),
});

function Contact() {

    const [loading, setLoading] = useState(false);
    const methods = useForm({
        mode: 'onChange',
        defaultValues: defaultContactValues,
        resolver: yupResolver(schema)
    });
    const { handleSubmit, control, formState, reset } = methods;
    const onSubmit =  async (data) => {
        setLoading(true)
        try{
            const myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');
            myHeaders.append('Accept', 'application/json');

            const raw = JSON.stringify({
                name: data.name,
                email: data.email,
                phone: data.phone,
                message: data.message
            });
              
            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            const response = await fetch('https://adopciones-pin2203-g4-backend-production.up.railway.app/index.php/api/insertContactos', requestOptions)
            if (response.status === 200) {
                reset();
                toast.success('Contacto guardado!', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            } else {
                response.json().then(response => {
                    toast.error(response.message, {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                })
            }
        } catch (error) {
            toast.error('Internal Error', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        finally {
            setLoading(false)
        }
    }


    return (
        <section id='contact'>
            <Container>
                <Row>
                    <Col md={6} className='my-4'>
                        <h2>Regálate amor</h2>
                        <h2 style={{color: '#DB7093'}}>¡Contáctanos!</h2>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <ContactForm
                                control={control}
                                formState={formState}
                                loading={loading}
                                reset={reset}
                            />
                        </Form>

                    </Col>
                    <Col md={6} className='contact-img my-4'>
                        <img src={Image} alt='contact'></img>
                    </Col>
                </Row>
            </Container>
            <ToastContainer />
            
        </section>
    );
}

export default Contact;