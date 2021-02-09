import {useState, useEffect} from 'react';
import Colors from './../utils/Colors';
import styled, {keyframes} from 'styled-components';
import Head from 'next/head';

export default function TrabajeConNosotros() {

    return (
        <StyledTrabajeConNosotros className="container" Colors={Colors}>
            <Head>
                <title>Selectora Martinez - Trabaje con nosotros</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="trabaje-con-nosotros container regular-padding">
                <h2>¿Está buscando trabajo?</h2>
                <div className="paragraph-container">
                    <p>Complete este breve formulario para formar parte de nuestra base de datos y trabajar con nosotros.</p>
                    <p>En Selectora Martínez no le cobramos ni le descontamos absolutamente nada de su sueldo. </p>
                </div>
                <form>
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
                </form>
            </div>
        </StyledTrabajeConNosotros>
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

const StyledTrabajeConNosotros = styled.section`
    padding: 48px 0;
    height: 100%;
    display: flex;
    background-image: url('./classy-fabric.png');
    background-color: rgba(0,0,0,.3);
    @media screen and (max-width: 1070px) {
        padding: 0;
        .form-input-wrp {
            flex-direction: column;
            .form-col {
                width: 100% !important;
            }
        }
        .submit-button {
            width: 100% !important;
        }
    }
    .trabaje-con-nosotros {
        animation: ${fadeIn} .5s ease-out;
        box-shadow: 0 0 10px 2px rgba(0,0,0,.2);
        background: white;
        min-height: 0;
        overflow-y: auto;
        padding: 24px;
        h2 {
            margin-bottom: 24px;
            font-size: 28px;
            font-weight: 400;
            padding-bottom: 10px;
            border-bottom: 1px solid rgba(0,0,0,.3);
        }
        p {
            margin-bottom: 12px;
            opacity: .7;
            &:last-child {
                margin-bottom: 24px;
            }
        }
        form {
            .submit-button {
                display: inline-block;
                padding: 0 15px;
                height: 30px;
                background: ${({Colors}) => (Colors.mainBlue)};
                line-height: 30px;
                font-size: 14px;
                transition: 0.2s ease-in-out box-shadow;
                color: white;
                border: 0;
                height: 32px;
                float: right;
                margin-top: 1rem;
                width: 120px;
                cursor: pointer;
                &:hover {
                    box-shadow: 0 0 5px 1px ${({Colors}) => (Colors.mainBlue)};
                }
                &:active {
                    background: ${({Colors}) => (Colors.darkBlue)};
                    box-shadow: none;
                    transition: none;
                }
            }
            .form-input-wrp {
                display: flex;
                justify-content: space-between;
                .form-col {
                    width: 49%;
                    label {
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                        margin-bottom: 12px;
                        .form-label {
                            font-size: .8rem;
                        }
                        input {
                            height: 32px;
                        }
                        textarea {
                            padding: .5rem !important;
                            height: 100px;
                        }
                        input,
                        textarea {
                            background: whitesmoke;
                            border: none;
                            margin-top: 6px;
                            padding: 0 .5rem;
                            border: 1px solid lightgray;
                            &:focus,
                            &:active {
                                border: 2px solid ${({Colors}) => (Colors.mainBlue)};
                                outline: none;
                            }
                        }
                    }
                }
            }
        }
    }
`;


