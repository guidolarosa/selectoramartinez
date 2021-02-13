import styled, {keyframes} from 'styled-components';
import Colors from './../../utils/Colors';

const FormContainer = (props) => {
    return (
        <StyledFormContainer Colors={Colors}>
            {props.children}
        </StyledFormContainer>
    )
}

const StyledFormContainer = styled.form`
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
                    display: none;
                }
                input {
                    height: 32px;
                }
                textarea {
                    padding: .5rem !important;
                    height: 80px;
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
`;

export default FormContainer;