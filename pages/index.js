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
    <div className="root-container">
      <Head>
        <title>Selectora Martínez | Soluciones en personal doméstico</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="home">
        <IndexCarousel />
      </main>
    </div>
  )
}

const StyledIndexCarousel = styled.div`
    width: 100%;
    height: 100%;
    flex-grow: 1;
    background: black;
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


