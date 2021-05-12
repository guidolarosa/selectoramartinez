import {useState, useEffect} from 'react';
import Colors from './../utils/Colors';
import Button from './../components/Button';
import styled, {keyframes} from 'styled-components';
import Head from 'next/head';
import MainContainer from '../components/MainContainer';
import FormContainer from '../components/FormContainer';
import Card from '../components/Card';

export default function TrabajeConNosotros() {
    return (
        <StyledMainContainer className="container" Colors={Colors}>
            <Head>
                <title>Selectora Martinez - Trabaje con nosotros</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Card fitContent className="trabaje-con-nosotros container regular-padding">
                <h2>¿Está buscando trabajo?</h2>
                <div className="paragraph-container">
                    <p>En Selectora Martínez no le cobramos al personal ni le descontamos nada del sueldo, ni antes ni después de conseguirle un trabajo. </p>
                    <p>Por favor tómese unos minutos para completar el siguiente formulario y formar parte de nuestra base de datos.</p>
                    <Button 
                        element="link" 
                        label={'Completar formulario'} 
                        href={'https://forms.gle/VRtNHVD2j9ZwFhaFA'} 
                        variant="primary" 
                    />
                </div>
            </Card>
        </StyledMainContainer>
    )
}

const StyledMainContainer = styled(MainContainer)`
    .styled-button-wrp {
        margin-top: 2rem;
    }
`


