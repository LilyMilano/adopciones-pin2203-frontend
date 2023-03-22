import React from 'react';
import {
    Form,
    Button
} from "react-bootstrap";
import {Controller} from "react-hook-form";
import InputGroup from 'react-bootstrap/InputGroup';
function ContactForm({control, formState, loading}) {
    return (
        <>
            <Controller
                name={'name'}
                control={control}
                render={({field, fieldState: { error }})=>(
                    <Form.Group className='mb-2' controlId="formBasicName">
                        <Form.Control
                            className='field'
                            onChange={field.onChange}
                            value={field.value}
                            ref={field.ref}
                            placeholder="Nombre"
                        />
                        {!!error && (
                            <Form.Text className="text-danger">
                                {error.message}
                            </Form.Text>
                        )}
                    </Form.Group>
                )
                }
            />

            <Controller
                name={'email'}
                control={control}
                render={({field, fieldState:{ error}})=>(
                    <Form.Group className='mb-2' controlId="formBasicEmail">
                        <Form.Control
                            className='field'
                            onChange={field.onChange}
                            value={field.value}
                            ref={field.ref}
                            type="email"
                            placeholder="Correo"
                        />
                        {!!error && (
                            <Form.Text className="text-danger">
                                {error.message}
                            </Form.Text>
                        )}
                    </Form.Group>
                )
                }
            />
            <Controller
                name={'phone'}
                control={control}
                render={({field, fieldState:{ error}})=>(
                    <InputGroup className="mb-2 phoneInput">
                    <InputGroup.Text id="basic-addon1">+54 11</InputGroup.Text>
                    <Form.Group controlId="formBasicPhone">
                        <Form.Control
                            className='field'
                            type='tel'
                            onChange={field.onChange}
                            value={field.value}
                            ref={field.ref}
                            placeholder="Teléfono "
                            pattern="[0-9]{8}"
                        />
                        
                        
                        {!!error && (
                            <Form.Text className="text-danger">
                                {error.message}
                            </Form.Text>
                        )}
                    </Form.Group>
                    </InputGroup>
                )
                }
            />

            <Controller
                name={'message'}
                control={control}
                render={({field, fieldState:{ error}})=>(
                    <Form.Group className='mb-2' controlId="formBasicEmail">
                        <Form.Control
                            className='field'
                            onChange={field.onChange}
                            value={field.value}
                            ref={field.ref}
                            as="textarea"
                            rows={3}
                            placeholder='Mensaje'
                        />
                        {!!error && (
                            <Form.Text className="text-danger">
                                {error.message}
                            </Form.Text>
                        )}
                    </Form.Group>
                )
                }
            />
            <Button
                variant="primary"
                type="submit"
                id='contact-submit'
                disabled={!formState.isValid || loading}
            >
                Enviar
            </Button>
        </>
    );
}

export default ContactForm;