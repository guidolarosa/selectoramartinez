import styled, {keyframes} from 'styled-components';
import Colors from './../../utils/Colors';

const Card = (props) => {
    return (
        <StyledCard Colors={Colors} className={props.className}>
            {props.children}
        </StyledCard>
    )
};

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const StyledCard = styled.section`
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
        opacity: .6;
        font-size: 14px;
        &:last-child {
            margin-bottom: 24px;
        }
    }
`;

export default Card;
