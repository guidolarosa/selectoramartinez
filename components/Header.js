import {useRouter} from 'next/router';
import {useState} from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Colors from '../utils/Colors';
import {labels, navigation} from '../utils/uiconstants';
import Button from './Button'
import {FaWhatsapp} from 'react-icons/fa';
import {BiLinkExternal} from 'react-icons/bi';
import Hamburger from 'hamburger-react'


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
  return (
    <StyledHeader Colors={Colors}>
        <div className="top-header container">
            <div className="container regular-padding">
                <a className="logo-header-image-wrp" href="/" title={labels.indexTitle}>
                    <img className="logo-header-image" src="./logo-header.png" title={labels.indexTitle} />
                </a>
                <div className="right-controls">
                    <Button 
                        element="link" 
                        label={labels.headerCTA} 
                        href={'./entreviste-personal'} 
                        variant="primary" 
                    />
                    <div className="whatsapp-wrp">
                        <FaWhatsapp />
                        <span> | <a href={`https://wa.me/${labels.whatsappPhone}`}>{labels.whatsappPhone}</a></span>
                    </div>
                </div>
            </div>
        </div>
        <div className="lower-header container">
            <div className="container regular-padding">
                <nav className={isOpen ? 'show-underlay' : ''}>
                    <span className="mobile-menu-trigger">
                        <Hamburger toggled={isOpen} toggle={setIsOpen} size={18}/>
                        <span onClick={() => {setIsOpen(!isOpen)}}>
                            {!isOpen ? 'Ver menú' : 'Cerrar menú'}
                        </span>
                    </span>
                    <ul className={`${isOpen ? 'mobile-show' : ''}`}>
                        {navigation.map((navItem, i) => (
                            <li key={i} onClick={() => {setIsOpen(false)}}className={`${router.asPath === '/' + navItem.url ? 'current' : ''}`}>
                                {
                                    navItem.type == 'external' ? (
                                        <a className="external" target="_blank" href={navItem.url} title={navItem.name}>
                                            {navItem.name}
                                            <BiLinkExternal />
                                        </a>
                                    ) : (
                                        <Link href={`/${navItem.url}`} title={navItem.name}>
                                            {navItem.name} 
                                        </Link>
                                    )
                                }
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    </StyledHeader>
  )
};

const StyledHeader = styled.header`
    background: ${({Colors}) => (Colors.black)};
    z-index: 2;
    @media screen and (max-width: 1070px) { 
        position: fixed;
        width: 100%;
    }
    @media screen and (max-width: 1070px) and (max-height: 420px) { 
        position: relative;
    }
    .top-header {
        border-bottom: 1px solid rgba(255,255,255,0.3);
        height: 82px;
        @media screen and (max-width: 1070px) {
            height: unset;
        }
        & > .container {
            display: flex;
            justify-content: space-between;
            height: 100%;
            align-items: center;
            @media screen and (max-width: 1070px) { 
                padding: 1rem 2rem;
            }
            @media screen and (max-width: 640px) {
                width: unset;
                flex-direction: column;
                padding: 24px 0;
                .logo-header-image-wrp {
                    margin-bottom: 24px;
                }
            }
            .logo-header-image-wrp {
                .logo-header-image {
                    max-height: 40px;
                }
            }
            .right-controls {
                display: flex;
                align-items: center;
                @media screen and (max-width: 1070px) { 
                    flex-direction: column;
                    .styled-button-wrp {
                        margin-right: 0 !important;
                        margin-bottom: 1rem;
                    }
                }
                @media screen and (max-width: 640px) { 
                    flex-direction: row;
                    .styled-button-wrp {
                        margin-right: 1rem !important;
                        margin-bottom: 0;
                    }
                }
                @media screen and (max-width: 1070px) and (max-height: 420px) { 
                    flex-direction: row;
                    align-content: center;
                    justify-content: center;
                    .styled-button-wrp {
                        margin-right: 1rem !important;
                        margin-bottom: 0rem;
                    }
                }
                .styled-button-wrp {
                    margin-right: 2rem;
                    color: white;
                }
                .whatsapp-wrp {
                    display: flex;
                    align-items: center;
                    white-space: nowrap;
                    color: white;
                    svg {
                        margin-right: 5px;
                    }
                }
            }
        }
    }
    .lower-header {
        height: 46px;
        position: relative;
        @media screen and (max-width: 1070px) { 
            border-bottom: 1px solid rgba(255,255,255,.2);
            & > .container {
                width: unset !important;
            }
            nav {
                position: relative;
                background: ${({Colors}) => (Colors.black)};
                &:after {
                    position: absolute;
                    content: '';
                    background: ${({Colors}) => (Colors.black)};
                    width: 100vw;
                    height: calc(100vh - 150px);
                    left: 0;
                    top: 0;
                    z-index: -1;
                    opacity: 0;
                    transition: 0.5s ease-in-out opacity;
                    pointer-events: none;
                }
                &.show-underlay {
                    &:after {
                        opacity: .8;
                    }
                }
            }
        }
        ul {
            display: flex;
            list-style: none;
            justify-content: space-between;
            z-index: 100;
            @media screen and (max-width: 1070px) { 
                width: unset;
                padding: 24px 0;
                position: absolute;
                width: 100%;
                right: 0;
                display: block;
                transition: 0.5s ease-in-out all;
                text-align: center;
                background: ${({Colors}) => (Colors.black)};
                box-shadow: 0 0 10px 2px rgba(0,0,0,.2);
                margin-top: -1px;
                top: calc(100% - 1px);
                clip: rect(0,100vw,0,0);
                li {
                    margin: 0;
                    font-size: 16px !important;
                    a {
                        display: flex;
                        justify-content: center;
                    }
                }
                &.mobile-show {
                    clip: rect(0,100vw,300px,0);
                }
            }
            li {
                line-height: 46px;
                white-space: nowrap;
                font-size: 12px;
                opacity: .8;
                transition: 0.2s ease-in-out opacity;
                .external {
                    display: flex;
                    align-items: center;
                    svg {
                        margin-left: .5rem;
                    }
                }
                &:hover {
                    opacity: 1;
                }
                &.current {
                    opacity: 1;
                    a {
                        color: ${({Colors}) => (Colors.mainBlue)};
                    }
                }
            }
        }
        .mobile-menu-trigger {
            line-height: 3rem;
            text-align: center;
            display: flex;
            align-content: center;
            justify-content: center;
            @media screen and (min-width: 1070px) { 
                display: none;
            }
            span {
                cursor: pointer;
            }
        }
    }
    * {
        color: white;
    }
`;

