import styled from 'styled-components';
import Colors from './../../utils/Colors';
import {FaWhatsapp} from 'react-icons/fa'
import {AiOutlinePhone} from 'react-icons/ai';
import {FiMail} from 'react-icons/fi';

const socialLinks = [
    {
        name: 'WhatsApp',
        href: '#',
        component: FaWhatsapp
    },
    {
        name: 'Phone',
        href: '#',
        component: AiOutlinePhone
    },
    {
        name: 'Mail',
        href: '#',
        component: FiMail
    }
]

const FloatingLinks = () => {
    return (
        <StyledFloatingLinks Colors={Colors}>
            {socialLinks.map((socialLink) => (
                <div className="social-link">
                    <socialLink.component/>
                </div>
            ))}
        </StyledFloatingLinks>
    )
}

const StyledFloatingLinks = styled.div`
    position: fixed;
    right: 0;
    top: calc(50% - 75px);
    display: flex;
    flex-direction: column;
    height: 170px;
    z-index: 1;
    @media screen and (max-width: 1070px) {
        top: unset;
        bottom: -3px;
        flex-direction: row;
        right: 20px;
        height: unset;
    }
    .social-link {
        background: ${({Colors}) => (Colors.mainBlue)};
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 2px;
        color: white;
        transition: 0.2s ease-in-out border;
        cursor: pointer;
        svg {
            width: 24px;
            height: 24px;
        }
    }
`;

export default FloatingLinks;