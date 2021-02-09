import Colors from './../utils/Colors';
import styled, {keyframes} from 'styled-components';
import Head from 'next/head';

export default function QuienesSomos() {
    return (
        <StyledQuienesSomos className="container" Colors={Colors}>
            <Head>
                <title>Selectora Martinez - Quienes somos</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="quienes-somos container regular-padding">
                <div className="picture-container">

                </div>
                <div className="text-container">
                    <h2>Nuestra historia</h2>
                    <p>Selectora Martínez es una empresa jóven, pero no <em>nueva</em></p>
                    <p>Contamos con más de cien años de trayectoria en el rubro y <b>pertenecemos a una familia de pioneros en la búsqueda y selección de personal
    doméstico</b> con presencia en <span className="underlined">Buenos Aires, Montevideo, Punta del Este</span>, y ahora también en <span className="underlined">Rosario</span>.</p>
                    <p>Nos especializamos en la búsqueda y selección de personal para casas particulares, brindamos un servicio totalmente personalizado y ofrecemos una garantía de servicio (reposición de personal) de tres meses o un año.</p>
                    <p>Mucamas, cuidadoras de adultos mayores, enfermeras, nocheras, acompañantes terapéuticas, niñeras, cocineras, jardineros, matrimonios de caseros y <b>todas las soluciones en personal doméstico.</b> Consúltenos y entreviste personal <b>sin cargo.</b></p>
                    <p>Confianza es poder contar con una empresa sólida y de trayectoria como Selectora Martínez.</p>

                </div>
            </div>
        </StyledQuienesSomos>
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

const StyledQuienesSomos = styled.section`
    padding: 48px 0;
    height: 100%;
    display: flex;
    background-image: url("https://www.transparenttextures.com/patterns/3px-tile.png");
    background-color: rgba(0,0,0,.6);
    @media screen and (max-width: 1070px) {
        padding: 0;
        .quienes-somos {
            flex-direction: column;
            .picture-container {
                height: 240px !important;
            }
        }
    }
    .quienes-somos {
        animation: ${fadeIn} .5s ease-out;
        box-shadow: 0 0 10px 2px rgba(0,0,0,.2);
        background: white;
        min-height: 0;
        overflow-y: auto;
        display: flex;
        .picture-container {
            min-width: 320px;
            height: 100%;
            background-image: url('./mucamas_nt.png');
            background-size: cover;
            background-position: center;
        }
        .text-container {
            padding: 2rem;
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
    }
`;


