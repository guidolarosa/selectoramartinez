import Head from 'next/head'
import Colors from './../utils/Colors';
import styled, {keyframes} from 'styled-components';
import MainContainer from '../components/MainContainer';
import Card from '../components/Card';
import FormContainer from '../components/FormContainer';
import { useState } from 'react';
import { sendContactMail } from "../components/networking/mail-api"; 
import { AiFillCheckSquare } from 'react-icons/ai';
import { MdError } from 'react-icons/md';


export default function EntrevistaPersonal() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [zone, setZone] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const [submitState, setSubmitState] = useState(undefined);

    const onNameChange = (e) => {
        setName(e.target.value)
    }
    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const onZoneChange = (e) => {
        setZone(e.target.value)
    }
    const onPhoneChange = (e) => {
        setPhone(e.target.value)
    }
    const onMessageChange = (e) => {
        setMessage(e.target.value);
    }
    const submitContactForm = async (e) => {
        e.preventDefault();

        const recipientMail = 'selectoramartinez@gmail.com';
        const res = await sendContactMail(
            recipientMail, 
            name, 
            email, 
            zone, 
            phone, 
            message
        );

        if (res.status < 300) {
            resetForm();
            setSubmitState('sent');
        } else {
            setSubmitState('error');
        }
    }

    const resetForm = () => {
        setName('');
        setPhone('');
        setZone('');
        setMessage('');
        setEmail('');
    }

    return (
        <StyledMainContainer className="container" Colors={Colors}>
            <Head>
                <title>Selectora Martinez - Entrevista personal sin cargo</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <StyledCard Colors={Colors} className="entreviste-personal container regular-padding">
                <h2>¿Está buscando personal?</h2>
                <p>Complete este breve formulario y nos pondremos en contacto con usted a la brevedad para dar inicio al proceso de selección. </p>
                <FormContainer>
                    <div className="form-input-wrp">
                        <div className="form-col">
                            <label>
                                <span className="form-label">Nombre</span>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={name}
                                    name="fname"
                                    onChange={onNameChange} 
                                />
                            </label>
                            <label>
                                <span className="form-label">Mail</span>
                                <input
                                    type="emai"
                                    placeholder="Email"
                                    value={email}
                                    name="email"
                                    onChange={onEmailChange} 
                                />
                            </label>
                            <label>
                                <span className="form-label">Zona / Barrio de residencia</span>
                                <input
                                    type="text"
                                    placeholder="Zona / Barrio de residencia"
                                    value={zone}
                                    name="zone"
                                    onChange={onZoneChange} 
                                />
                            </label>
                        </div>
                        <div className="form-col">
                            <label>
                                <span className="form-label">Teléfono</span>
                                <input
                                    type="phone"
                                    placeholder="Teléfono"
                                    value={phone}
                                    name="phone"
                                    onChange={onPhoneChange} 
                                />
                            </label>
                            <label>
                                <span className="form-label">Su mensaje</span>
                                <textarea
                                    type="text"
                                    placeholder="Su mensaje"
                                    value={message}
                                    name="message"
                                    onChange={onMessageChange} 
                                />
                                
                            </label>
                        </div>
                    </div>
                    <button className="submit-button" type="submit" onClick={submitContactForm}>
                        Enviar
                    </button>
                    <div className="submit-status">
                        {submitState == 'error' ? (
                            <span className="error">
                                <MdError />
                                Hubo un problema al enviar su mensaje. Por favor revise los datos o inténtelo nuevamente a la brevedad.
                            </span> ) : submitState == 'sent' ? (
                            <span className="success">
                                <AiFillCheckSquare />
                                Muchas gracias, su mensaje ha sido enviado.
                            </span>
                        ) : ''}
                    </div>
                </FormContainer>
            </StyledCard>
        </StyledMainContainer>
    )
}

const StyledMainContainer = styled(MainContainer)`
`;

const StyledCard = styled(Card)`
    .submit-status {
        margin-top: 1rem;
        span {
            display: flex;
            align-items: center;
            font-size: .9rem;
            svg {
                margin-right: .5rem;
                position: relative;
                bottom: 1px;
            }
        }
        .error {
            color: rgb(235, 70, 59);
            svg {
                fill: rgb(235, 70, 59);
            }
        }
        .success {
            color: rgb(38 175 118);;
            svg {
                fill: rgb(38 175 118);;
            }
        }
    }
`;


