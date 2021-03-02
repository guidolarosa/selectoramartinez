import Head from 'next/head'
import Header from '../components/Header';
import styled, {keyframes} from 'styled-components';
import Colors from './../utils/Colors';
import FloatingLinks from '../components/FloatingLinks';
import {useState, useEffect, useRef} from 'react';

export default function Home() {

  const [carouselStep, setCarouselStep] = useState(0);
  const [delay, setDelay] = useState(5000);

  function useInterval(callback, delay) {
      const savedCallback = useRef();
    
      // Remember the latest callback.
      useEffect(() => {
        savedCallback.current = callback;
      }, [callback]);
    
      // Set up the interval.
      useEffect(() => {
        function tick() {
          savedCallback.current();
        }
        if (delay !== null) {
          let id = setInterval(tick, delay);
          return () => clearInterval(id);
        }
      }, [delay]);
  }

  useInterval(() => {
    setCarouselStep(
      carouselStep == carouselImages.length - 1 ? 0 : carouselStep + 1
    )
  } , delay);

  const nextStep = () => {
    if (carouselStep == carouselImages.length - 1) {
      setCarouselStep(0);
    } else {
      setCarouselStep(carouselStep + 1)
    }
  }

  const carouselImages = [
    {
      url: './cuidadoras.jpg',
      text: 'Cuidadoras'
    },
    {
      url: './mucamas.jpg',
      text: 'Mucamas'
    },
    {
      url: './niñera.jpg',
      text: 'Niñeras'
    }
  ]
  const IndexCarousel = () => {
    return (
        <StyledIndexCarousel Colors={Colors}>
          <FloatingLinks />
          <div className="carousel-text-wrp">
            {carouselImages[carouselStep].text}
          </div>
          {carouselImages.map((item, index) => (
            <div 
              className={`carousel-img-container ${index == carouselStep ? 'current-step' : ''}`}
              style={{
                backgroundImage: `url(${item.url})`
              }}
              >
            </div>
          ))}
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
};

const kenBurns = keyframes`
  from {
    background-size: auto 100%;
  }
  
  to {
    background-size: auto 110%;
  }`;

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }

  10%, 90% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }`;

const StyledRootContainer = styled.div`
  overflow: hidden;
`;

const StyledIndexCarousel = styled.div`
    width: 100vw;
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
      z-index: 1;
      animation: ${fadeInOut} 5s linear infinite;
      @media screen and (max-width: 1070px) { 
        font-size: 3rem;
        padding: 0 1rem;
        bottom: 0;
      }
    }
    .carousel-img-container {
      background-size: cover;
      background-position: top;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      opacity: 0;
      transition: 1s ease-in-out opacity;
      animation: ${kenBurns} 5s linear infinite;
      &.current-step {
        opacity: 1;
      }
      @media screen and (max-width: 1070px) { 
        background-position: 58% 160px;
      }
    }
`;


