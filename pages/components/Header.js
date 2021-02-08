import {useRouter} from 'next/router';
import {useState} from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Colors from '../../utils/Colors';
import {labels, navigation} from '../../utils/uiconstants';
import Button from './Button'
import {FaWhatsapp} from 'react-icons/fa';
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
                        href={'#'} 
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
                <nav>
                    <span className="mobile-menu-trigger">
                        <Hamburger toggled={isOpen} toggle={setIsOpen} size={18}/>
                    </span>
                    <ul className={`${isOpen ? 'mobile-show' : ''}`}>
                        {navigation.map((navItem) => (
                            <li onClick={() => {setIsOpen(false)}}className={`${router.asPath === '/' + navItem.url ? 'current' : ''}`}>
                                <Link href={`/${navItem.url}`} title={navItem.name}>
                                    {navItem.name} 
                                </Link>
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
        @media screen and (max-width: 1070px) { 
            & > .container {
                width: unset !important;
            }
        }
        ul {
            display: flex;
            list-style: none;
            justify-content: space-between;
            z-index: 100;
            @media screen and (max-width: 1070px) { 
                display: none;
                width: unset;
                padding: 0 24px;
                li {
                    margin-left: 24px;
                }
                &.mobile-show {
                    display: block;
                    background: black;
                    text-align: center;
                    padding: 24px 0;
                    margin-top: -1px;
                    box-shadow: 0 0 10px 2px rgba(0,0,0,.2);
                    li {
                        margin: 0;
                        font-size: 14px;
                    }
                }
            }
            li {
                line-height: 46px;
                white-space: nowrap;
                font-size: 12px;
                opacity: .8;
                transition: 0.2s ease-in-out opacity;
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
        }
    }
    * {
        color: white;
    }
`;

