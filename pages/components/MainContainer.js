import styled from 'styled-components';
import Colors from './../../utils/Colors';

const MainContainer = (props) => {
    return (
        <StyledMainContainer Colors={Colors} className={props.className}>
            {props.children}
        </StyledMainContainer>
    )
}

const StyledMainContainer = styled.section`
    padding: 48px 0;
    height: 100%;
    display: flex;
    background-image: url("/bg.png");
    background-color: rgba(0,0,0,.6);
    background-size: cover;
    background-position: center;
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
`;

export default MainContainer;