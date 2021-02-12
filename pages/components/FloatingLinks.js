import styled from 'styled-components';
import Colors from './../../utils/Colors';
import {FaWhatsapp} from 'react-icons/fa'
import {AiOutlinePhone} from 'react-icons/ai';
import {FiMail} from 'react-icons/fi';

const socialLinks = [
    {
        name: 'WhatsApp',
        href: 'https://wa.me/3400498589',
        component: FaWhatsapp
    },
    {
        name: 'Phone',
        href: 'tel://+5493400498589',
        component: AiOutlinePhone
    },
    {
        name: 'Mail',
        href: 'mailto:selectoramartinez@gmail.com',
        component: FiMail
    }
]

const FloatingLinks = () => {
    return (
        <StyledFloatingLinks Colors={Colors}>
            {socialLinks.map((socialLink) => (
                <div className="social-link">
                    <a target="_blank" href={socialLink.href} title={socialLink.name}>
                        <socialLink.component/>
                    </a>
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
        bottom: -5px;
        flex-direction: row;
        right: ;
        height: unset;
        left: 0;
        width: 100%;
        justify-content: center;
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