import {useRouter} from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import Colors from '../../utils/Colors';
import {labels, navigation} from '../../utils/uiconstants';
import Button from './Button'
import {FaWhatsapp} from 'react-icons/fa';

export default function Header() {
    const router = useRouter();
    console.log(router)
  return (
    <StyledHeader Colors={Colors}>
        <div className="top-header container">
            <div className="container regular-padding">
                <a href="/" title={labels.indexTitle}>
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
                    <ul>
                        {navigation.map((navItem) => (
                            <li className={`${router.asPath === '/' + navItem.url ? 'current' : ''}`}>
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
    .top-header {
        border-bottom: 1px solid rgba(255,255,255,0.3);
        height: 82px;
        & > .container {
            display: flex;
            justify-content: space-between;
            height: 100%;
            align-items: center;
            .logo-header-image {
                max-height: 40px;
            }
            .right-controls {
                display: flex;
                .styled-button-wrp {
                    margin-right: 2rem;
                }
                .whatsapp-wrp {
                    display: flex;
                    align-items: center;
                    white-space: nowrap;
                    svg {
                        margin-right: 5px;
                    }
                }
            }
        }
    }
    .lower-header {
        height: 46px;
        ul {
            display: flex;
            list-style: none;
            justify-content: space-between;
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
                        ${'' /* font-weight: bold; */}
                    }
                }
            }
        }
    }
    * {
        color: white;
    }
`;

