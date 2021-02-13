import Head from 'next/head'
import Header from './components/Header';
import styled from 'styled-components';
import Colors from './../utils/Colors';
import FloatingLinks from './components/FloatingLinks';

export default function Home() {

  const IndexCarousel = () => {
    return (
        <StyledIndexCarousel Colors={Colors}>
          <FloatingLinks />
            <div className="carousel-text-wrp">
              CUIDADORAS
            </div>
            <div className="overlay"></div>
            <div className="middle"></div>
            <div className="underlay"></div>
        </StyledIndexCarousel>
    )
}
  return (
    <StyledRootContainer className="root-container">
      <Head>
        <title>Selectora Martínez | Soluciones en personal doméstico</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="home">
        <IndexCarousel />
      </main>
    </StyledRootContainer>
  )
}

const StyledRootContainer = styled.div`
  overflow: hidden;
`;

const StyledIndexCarousel = styled.div`
    width: 300vw;
    height: 100%;
    flex-grow: 1;
    background: ${({Colors}) => (Colors.black)};
    display: flex;
    position: relative;
    @media screen and (max-width: 1070px) { 
      height: calc(100vh - 45px);
    }
    .carousel-text-wrp {
      position: absolute;
      color: white;
      font-size: 8rem;
      text-align: center;
      bottom: 2rem;
      text-shadow: 0 0 10px rgba(0,0,0,.6);
      font-weight: 200;
      margin: 0;
      line-height: 7rem;
      font-style: italic;
      display: inline-block;
      text-align: center;
      width: 100vw;
      @media screen and (max-width: 1070px) { 
        font-size: 2.9rem;
        padding: 0 1rem;
        bottom: 0;
      }
    }
    .overlay,
    .middle,
    .underlay {
        width: 100%;
        height: 100%;
    }
    .overlay {
      background-image: url('./cuidadoras.png');
      background-size: cover;
      background-position: top;
      @media screen and (max-width: 1070px) { 
        background-position: 58% 160px;
      }
    }
`;


