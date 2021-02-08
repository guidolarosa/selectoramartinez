import {useState} from 'react';
import Colors from './../utils/Colors';
import styled, {keyframes} from 'styled-components';

export default function EntrevistaPersonal() {

    return (
        <StyledEntrevistaPersonal className="container" Colors={Colors}>
            <div className="entrevista-personal container regular-padding">

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
    }
    .entrevista-personal {
        animation: ${fadeIn} .5s ease-out;
        box-shadow: 0 0 10px 2px rgba(0,0,0,.2);
        background: white;
        min-height: 0;
        overflow-y: auto;
        display: flex;
    }
`;


