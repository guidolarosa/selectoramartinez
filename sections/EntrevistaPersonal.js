import Head from 'next/head'
import Colors from './../utils/Colors';
import styled, {keyframes} from 'styled-components';

export default function EntrevistaPersonal() {

    return (
        <StyledEntrevistaPersonal className="container" Colors={Colors}>
            <Head>
                <title>Selectora Martinez - Entrevista personal sin cargo</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="entrevista-personal container regular-padding">
                <h2>¿Está buscando personal?</h2>
                <p>Complete este breve formulario y nos pondremos en contacto con usted a la brevedad para dar inicio al proceso de selección. </p>
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
        </StyledEntrevistaPersonal>
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

const StyledEntrevistaPersonal = styled.section`
    padding: 48px 0;
    height: 100%;
    display: flex;
    background-image: url('./classy-fabric.png');
    background-color: rgba(0,0,0,.3);
    @media screen and (max-width: 1070px) {
        padding: 0;
        .form-input-wrp {
            flex-direction: column;
        }
    }
    .entrevista-personal {
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
            border-bottom: 1px solid rgba(0,0,0,.3);
            padding-bottom: 10px;
        }
        p {
            margin-bottom: 24px;
            opacity: .7;
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


