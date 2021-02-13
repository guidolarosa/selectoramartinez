import Head from 'next/head'
import Colors from './../utils/Colors';
import styled, {keyframes} from 'styled-components';
import MainContainer from './../pages/components/MainContainer';
import Card from './../pages/components/Card';
import FormContainer from './../pages/components/FormContainer';

export default function EntrevistaPersonal() {
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
            </StyledCard>
        </StyledMainContainer>
    )
}

const StyledMainContainer = styled(MainContainer)``;

const StyledCard = styled(Card)``;


