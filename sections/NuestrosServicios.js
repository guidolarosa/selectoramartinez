import {useState} from 'react';
import Head from 'next/head';
import Button from '../pages/components/Button';
import Colors from './../utils/Colors';
import styled, {keyframes} from 'styled-components';
import {services, labels} from './../utils/uiconstants';
import MainContainer from './../pages/components/MainContainer';
import Card from './../pages/components/Card';

export default function NuestrosServicios() {
    const [selectedService, setSelectedService] = useState('mucamas');

    const handleServiceClick = (service) => {
        setSelectedService(service);
    };

    const Mucamas = () => {
        return (
            <div className="service-description-inner-wrp">
                <h2>Mucamas</h2>
                <div>
                    <p>Mucamas con cama, con retiro, franqueras y por horas. <b>Contamos con personal calificado y preparado para responder frente cada una de sus necesidades. </b></p>
                    <p>Atendemos cada búsqueda de manera detallada y entendemos que cada casa
        necesita un cuidado particular, por eso <b>nuestro servicio es totalmente personalizado</b> y nos avocamos exclusivamente a la
        búsqueda y selección de personal doméstico.</p>
                </div>
                <Button 
                    element="link" 
                    label={labels.headerCTA} 
                    href={'/entreviste-personal'} 
                    variant="primary" 
                />
            </div>
        )
    }

    const Cuidadoras = () => {
        return (
            <div className="service-description-inner-wrp">
                <h2>Cuidadoras</h2>
                <div>
                    <p>Contamos con acompañantes, cuidadoras y enfermeras con cama, con retiro y eventuales. Contáctenos y entreviste personal en menos de 24 hs. Nuestro equipo especializado, con más de veinte años de experiencia en el rubro lo guiará durante todo el proceso para que encuentre el personal que su familia necesita y merece.</p>
                    <p>Un servicio rápido y a la altura de sus necesidades. </p>
                </div>
                <Button 
                    element="link" 
                    label={labels.headerCTA} 
                    href={'/entreviste-personal'} 
                    variant="primary" 
                />
            </div>
        )
    }

    const Niñeras = () => {
        return (
            <div className="service-description-inner-wrp">
                <h2>Niñeras</h2>
                <div>
                    <p>El cuidado de los más chicos siempre nos impulsa a dar lo mejor, por eso trabajamos con un equipo de profesionales para
confeccionar una serie de test pre-ocupacionales* especialmente diseñados para el servicio doméstico. </p>
                    <p className={'disclaimer'}>*Este servicio tiene un costo adicional.</p>
                </div>
                <Button 
                    element="link" 
                    label={labels.headerCTA} 
                    href={'/entreviste-personal'} 
                    variant="primary" 
                />
            </div>
        )
    }

    const Caseros = () => {
        return (
            <div className="service-description-inner-wrp">
                <h2>Caseros</h2>
                <div>
                    <p>La tranquilidad de contar con personal preparado para responder a cada una de sus necesidades, matrimoños de caseros,
cuidadores y encargados de mantenimiento para estancias, casas quinta, casas de campo o de fin de semana. </p>
                </div>
                <Button 
                    element="link" 
                    label={labels.headerCTA} 
                    href={'/entreviste-personal'} 
                    variant="primary" 
                />
            </div>
        )
    }

    const Cocineras = () => {
        return (
            <div className="service-description-inner-wrp">
                <h2>Cocineras</h2>
                <div>
                    <p>El placer y la tranquilidad de poder disfrutar una cena en familia o agasajar a sus invitados. Cocineras profesionales con
cama, con retiro o eventuales. Los sabores del mundo a su mesa.  </p>
                </div>
                <Button 
                    element="link" 
                    label={labels.headerCTA} 
                    href={'/entreviste-personal'} 
                    variant="primary" 
                />
            </div>
        )
    }

    const Choferes = () => {
        return (
            <div className="service-description-inner-wrp">
                <h2>Choferes</h2>
                <div>
                    <p>Contrate un chofer con registro profesional y experiencia comprobable. Contrate tanquilidad y comodidad para llegar
donde desee con seguridad y siempre a tiempo. </p>
                </div>
                <Button 
                    element="link" 
                    label={labels.headerCTA} 
                    href={'/entreviste-personal'} 
                    variant="primary" 
                />
            </div>
        )
    }

    return (
        <StyledNuestrosServicios>
            <Head>
                <title>Selectora Martinez - Nuestros servicios</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <StyledMainContainer selectedService={selectedService} className="container" Colors={Colors}>
                <StyledCard Colors={Colors} className="services-viewer container regular-padding">
                    <div className="service-sidebar">
                        <ul>
                            {services.map((service) => (
                                <li
                                    className={`${service == selectedService ? 'selected' : ''}`}
                                    onClick={() => {handleServiceClick(service)}}
                                >
                                    <span>{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="service-image"></div>
                    <div className="service-description">
                        {
                            selectedService == 'mucamas' ? (
                                <Mucamas />
                            ) : selectedService == 'cuidadoras' ? (
                                <Cuidadoras />
                            ) : selectedService == 'niñeras' ? (
                                <Niñeras />
                            ) : selectedService == 'caseros' ? (
                                <Caseros />
                            ) : selectedService == 'cocineras' ? (
                                <Cocineras />
                            ) : selectedService == 'choferes' ? (
                                <Choferes />
                            ) : ''
                        }
                    </div>
                </StyledCard>
            </StyledMainContainer>
        </StyledNuestrosServicios>
    )
}

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const StyledNuestrosServicios = styled.div`
    height: 100%;
    @media screen and (max-width: 1070px) {
        
    } 
`;

const StyledMainContainer = styled(MainContainer)`
    @media screen and (max-width: 1070px) {
        .services-viewer {
            flex-direction: column;
            .service-sidebar {
                height: unset !important;
                padding-top: 8px !important;
                margin: 0;
                display: flex;
                ul {
                    display: flex;
                    ${'' /* flex-wrap: wrap; */}
                    justify-content: space-between;
                    li {
                        display: inline-block;
                        border-bottom: 5px solid ${({Colors}) => (Colors.black)};
                        font-size: .9rem !important;
                        text-align: center;
                        flex-grow: 1;
                        &.selected {
                            font-weight: normal;
                            opacity: 1;
                            background: linear-gradient(0deg, rgba(255,255,255,.2), transparent) !important;
                            border-left: none !important;
                            border-bottom: 5px solid ${({Colors}) => (Colors.mainBlue)};
                        }
                    }
                }
            }
            .service-image {
                height: 240px !important;
            }
        }
    }
    .services-viewer {
        animation: ${fadeIn} .5s ease-out;
        display: flex;
        box-shadow: 0 0 10px 2px rgba(0,0,0,.2);
        padding: 0;
        .service-sidebar {
            height: 100%;
            background: ${({Colors}) => (Colors.black)};
            min-width: 180px;
            overflow-y: auto;
            padding-top: 24px;
            ul {
                list-style: none;
                color: white;
                li {
                    line-height: 42px;
                    text-transform: capitalize;
                    font-weight: 300;
                    font-size: 14px;
                    cursor: pointer;
                    padding: 0 24px;
                    opacity: .6;
                    transition: 0.2s ease-in-out border;
                    &:hover {
                        opacity: 1;
                    }
                    &.selected {
                        font-weight: normal;
                        opacity: 1;
                        background: linear-gradient(90deg, rgba(255,255,255,.2), transparent);
                        border-left: 5px solid ${({Colors}) => (Colors.mainBlue)};;
                    }
                }
            }
        }
        .service-image {
            background-image: ${({selectedService}) => (
                selectedService == 'mucamas' ? 'url(./mucamas.jpg)' :
                selectedService == 'cuidadoras' ? 'url(./cuidadoras.png)' :
                selectedService == 'niñeras' ? 'url(./niñera.jpg)' : 
                selectedService == 'caseros' ? 'url(caseros.png)' : 
                selectedService == 'cocineras' ? 'url(./cocinera.jpg)' : 
                selectedService == 'choferes' ? 'url(./chofer.png)' : ''
            )};
            background-position: ${({selectedService}) => (
                selectedService == 'mucamas' ? '70% center' :
                selectedService == 'cuidadoras' ? '40% center' :
                selectedService == 'niñeras' ? '25% center' :
                selectedService == 'caseros' ? '30% center' : 
                selectedService == 'cocineras' ? '40% center' : 
                selectedService == 'choferes' ? '70% center' : ''
            )};
            background-color: ${({Colors}) => (Colors.black)};
            background-size: cover;
            background-repeat: no-repeat;
            min-width: 260px;
            height: 100%;
            position: relative;
        }
        .service-description {
            background: white;
            overflow-y: auto;
            backdrop-filter: blur(10px)
            flex-grow: 1;
            .service-description-inner-wrp {
                padding: 24px;
                position: relative;
                animation: ${fadeIn} .3s ease-out;
                @media screen and (max-width: 1070px) { 
                    .styled-button-wrp {
                        a {
                            font-size: 1.2rem;
                            padding: .5rem 1rem;
                            height: unset;
                        }
                    }
                }
                .styled-button-wrp {
                    margin-top: 24px;
                }
                h2 {
                    margin-bottom: 24px;
                    font-size: 28px;
                    padding-bottom: 10px;
                    font-weight: 400;
                    border-bottom: 1px solid rgba(0,0,0,.3);
                }
                p {
                    margin-bottom: 12px;
                    line-height: 25px;
                    font-size: 14px;
                    opacity: .6;
                    &.disclaimer {
                        font-size: 12px;
                        opacity: .5;
                    }
                }
            }
        }
    }
`;

const StyledCard = styled(Card)`

`; 


