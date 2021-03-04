import Colors from './../utils/Colors';
import styled, {keyframes} from 'styled-components';
import {labels} from './../utils/uiconstants';
import Head from 'next/head';
import MainContainer from '../components/MainContainer';
import Card from '../components/Card';
import Button from '../components/Button';

export default function QuienesSomos() {
    return (
        <StyledMainContainer className="container" Colors={Colors}>
            <Head>
                <title>Selectora Martinez - Quienes somos</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <StyledCard Colors={Colors} className="quienes-somos container regular-padding">
                <div className="picture-container"/>
                <div className="text-container">
                    <h2>Nuestra historia</h2>
                    <p>Selectora Martínez es una empresa jóven, pero no nueva</p>
                    <p>Contamos con más de cien años de trayectoria en el rubro y <b>pertenecemos a una familia de pioneros en la búsqueda y selección de personal
    doméstico</b> con presencia en <b>Buenos Aires, Montevideo, Punta del Este</b>, y ahora también en <b>Rosario</b>.</p>
                    <p>Nos especializamos en la búsqueda y selección de personal para casas particulares, brindamos un servicio totalmente personalizado y ofrecemos una garantía de servicio (reposición de personal) de tres meses o un año.</p>
                    <p>Mucamas, cuidadoras de adultos mayores, enfermeras, nocheras, acompañantes terapéuticas, niñeras, cocineras, jardineros, matrimonios de caseros y <b>todas las soluciones en personal doméstico.</b> Consúltenos y entreviste personal <b>sin cargo.</b></p>
                    <p>Confianza es poder contar con una empresa sólida y de trayectoria como Selectora Martínez.</p>
                    <Button 
                        element="link" 
                        label={labels.headerCTA} 
                        href={'/entreviste-personal'} 
                        variant="primary" 
                    />
                </div>
            </StyledCard>
        </StyledMainContainer>
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

const StyledCard = styled(Card)`
    display: flex;
    padding: 0;
    @media screen and (max-width: 1070px) {
        padding: 0;
        flex-direction: column;
        .picture-container {
            height: 240px !important;
        }
    }
    .picture-container {
        min-width: 320px;
        height: 100%;
        background-image: url('./logo-header.png');
        filter: invert(1);
        background-size: 80%;
        background-position: center;
        background-repeat: no-repeat;

    }
    .text-container {
        padding: 2rem;
        overflow: auto;
    }
    h2 {
        margin-bottom: 24px;
        font-size: 28px;
        font-weight: 400;
        border-bottom: 1px solid rgba(0,0,0,.3);
        padding-bottom: 10px;
    }
    p {
        margin-bottom: 12px;
        line-height: 25px;
        font-size: 14px;
        opacity: .6;
        .underlined {
            text-decoration: underline;
        }
        &.disclaimer {
            font-size: 12px;
            opacity: .5;
        }
    }
    .styled-button-wrp {
        margin-top: 2rem;
    }
`;

const StyledMainContainer = styled(MainContainer)``;


