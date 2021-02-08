import Head from 'next/head'
import Header from './components/Header';
import styled from 'styled-components';


export default function Home() {

  const IndexCarousel = () => {
    return (
        <StyledIndexCarousel>
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
    background: black;
    display: flex;
    @media screen and (max-width: 1070px) { 
      height: calc(100vh - 195px);
    }
    .overlay,
    .middle,
    .underlay {
        width: 100%;
        height: 100%;
    }
    .overlay {
      background-image: url('./cuidadoras_nt.png');
      background-size: cover;
    }
`;


