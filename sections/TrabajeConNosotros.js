import {useState, useEffect} from 'react';
import Colors from './../utils/Colors';
import styled, {keyframes} from 'styled-components';
import Head from 'next/head';
import MainContainer from './../pages/components/MainContainer';
import FormContainer from './../pages/components/FormContainer';
import Card from './../pages/components/Card';

export default function TrabajeConNosotros() {
    return (
        <MainContainer className="container" Colors={Colors}>
            <Head>
                <title>Selectora Martinez - Trabaje con nosotros</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Card className="trabaje-con-nosotros container regular-padding">
                <h2>¿Está buscando trabajo?</h2>
                <div className="paragraph-container">
                    <p>Complete este breve formulario para formar parte de nuestra base de datos y trabajar con nosotros.</p>
                    <p>En Selectora Martínez no le cobramos ni le descontamos absolutamente nada de su sueldo. </p>
                </div>
                <FormContainer>
                    <div className="form-input-wrp">
                        <div className="form-col">
                            <label>
                                <span className="form-label">Nombre</span>
                                <input type="text" id="name" name="name"/>
                            </label>
                            <label>
                                <span className="form-label">Mail</span>
                                <input type="email" id="email" name="email"/>
                            </label>
                            <label>
                                <span className="form-label">Zona / Barrio de residencia</span>
                                <input type="text" id="zone" name="zone"/>
                            </label>
                        </div>
                        <div className="form-col">
                            <label>
                                <span className="form-label">Teléfono</span>
                                <input type="text" id="name" name="name"/>
                            </label>
                            <label>
                                <span className="form-label">Su mensaje</span>
                                <textarea type="text" id="message" name="message"/>
                            </label>
                        </div>
                    </div>
                    <input className="submit-button" type="submit" value="Enviar" />
                </FormContainer>
            </Card>
        </MainContainer>
    )
}


