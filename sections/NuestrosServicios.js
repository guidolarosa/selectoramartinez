import {useState} from 'react';
import Colors from './../utils/Colors';
import styled, {keyframes} from 'styled-components';
import {services} from './../utils/uiconstants';

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
            </div>
        )
    }

    return (
        <StyledNuestrosServicios selectedService={selectedService} className="container" Colors={Colors}>
            <div className="services-viewer container regular-padding">
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
            </div>
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

const StyledNuestrosServicios = styled.section`
    display: flex;
    padding: 2rem 0;
    background-image: url("https://www.transparenttextures.com/patterns/3px-tile.png");
    ${'' /* background-image: url('./classy-fabric.png'); */}
    background-color: rgba(0,0,0,.6);
    height: 100%;
    @media screen and (max-width: 1070px) {
        padding: 0;
        .services-viewer {
            flex-direction: column;
            .service-sidebar {
                height: unset !important;
                ul {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    li {
                        display: inline-block;
                        border-bottom: 5px solid black;
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
        .service-sidebar {
            height: 100%;
            ${'' /* background: ${({Colors}) => (Colors.mainBlue)}; */}
            background: black;
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
                selectedService == 'mucamas' ? 'url(./mucamas_nt.png)' :
                selectedService == 'cuidadoras' ? 'url(./cuidadoras_nt.png)' :
                selectedService == 'niñeras' ? 'url(./niñeras_nt.png)' : ''
            )};
            background-position: ${({selectedService}) => (
                selectedService == 'mucamas' ? 'center' :
                selectedService == 'cuidadoras' ? 'center' :
                selectedService == 'niñeras' ? 'center' : ''
            )};
            background-color: black;
            background-size: cover;
            background-repeat: no-repeat;
            filter: grayscale(.5);
            min-width: 180px;
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
                h2 {
                    margin-bottom: 24px;
                    font-size: 28px;
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


