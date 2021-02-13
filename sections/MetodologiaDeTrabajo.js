import Colors from './../utils/Colors';
import styled, {keyframes} from 'styled-components';
import Head from 'next/head';
import {useEffect} from 'react';
import MainContainer from './../pages/components/MainContainer';
import Card from './../pages/components/Card';

export default function NuestrosServicios() {
    
    return (
        <StyledMainContainer className="container" Colors={Colors}>
            <Head>
                <title>Selectora Martinez - Metodología de trabajo</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <StyledCard className="metodologia-de-trabajo container regular-padding">
                <h2>Metodología de trabajo</h2>
                <section>
                    <div className={'step'} data-aos="fade-up">
                        <h3>1 - Definir un perfil</h3>
                        <p>Mediante breve conversacion telefónica o por video llamada vamos a definir <b></b>cuáles son las características y especificaciones del personal que usted necesita.</p>
                        <p>Algunos aspectos que vamos a tener en cuenta son: <b>qué tareas va a desempeñar el personal, cómo esta conformado su grupo familiar, qué tipo de vivienda posee, si tiene mascotas, etc.</b></p>
                    </div>
                    <div className={'step'} data-aos="fade-up">
                        <h3>2 - Entrevistas de personal</h3>
                        <p>Una vez que contemos con toda esta información vamos dar inicio a la selección de las candidatas que mejor se ajusten al puesto y coordinar así las entrevistas correspondientes. Las mismas <b>podrán realizarse en su domicilio, oficina o un lugar de su preferencia, o por video llamada.</b></p>
                    </div>
                    <div className={'step'} data-aos="fade-up">
                        <h3>3 - Elección del personal</h3>
                        <p>Después de conocer a las candidatas disponibles usted <b>podrá seleccionar la que considere más adecuada para el puesto.</b></p>
                    </div>
                    <div className={'step'} data-aos="fade-up">
                        <h3>4 - Garantia de servicio</h3>
                        <p>En Selectora Martínez contamos con dos formas de contratación, la primera es <b>abonar el arancel correspondiente a un sueldo del personal (100%)* y en este caso le ofrecemos una garantía de derecho a reposición de personal por 12 meses.</b></p>
                        <p>La segunda forma de pago es <b>abonar el 50% de un sueldo del personal*</b>, obteniendo una garantía de derecho a reposición de personal por 3 meses.</p>
                        <p className="disclaimer">* Este arancel no se descuenta del sueldo del personal.</p>
                    </div>
                </section>
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
    animation: ${fadeIn} .5s ease-out;
    box-shadow: 0 0 10px 2px rgba(0,0,0,.2);
    background: white;
    padding: 2rem;
    overflow-y: auto;
    min-height: 0;
    height: 100%;
    .step {
        margin-bottom: 48px;
        h3 {
            font-weight: 400;
            margin-bottom: 10px;
        }
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
        &.disclaimer {
            font-size: 12px;
            opacity: .5;
        }
    }
`;

const StyledMainContainer = styled(MainContainer)`
    @media screen and (max-width: 1070px) {
        padding: 0;
    }
`;