import styled from 'styled-components';
import Colors from '../../utils/Colors';

export default function Button(props) {
    const {
        variant,
        href,
        element,
        label
    } = props;

    return (
        <StyledButtonWrp className="styled-button-wrp" Colors={Colors}>
            {element == 'link' ? (
                <a className={variant} href={href}>{label}</a>
            ) : (
                <button className={variant} {...props}>{label}</button>
            )}
        </StyledButtonWrp>
    )
};

const StyledButtonWrp = styled.div`
    a, button {
        display: inline-block;
        padding: 0 15px;
        height: 30px;
        background: ${({Colors}) => (Colors.mainBlue)};
        line-height: 30px;
        font-size: 14px;
        transition: 0.2s ease-in-out box-shadow;
        &:hover {
            box-shadow: 0 0 5px 1px ${({Colors}) => (Colors.mainBlue)};
        }
        &:active {
            background: ${({Colors}) => (Colors.darkBlue)};
            box-shadow: none;
            transition: none;
        }
    }
`;
