import logo from './logo.svg';
import './App.css';
import React, { useState, useRef } from 'react';
import { Parallax } from 'react-parallax';
import nameImage from './name.png';
import menuImage from './menu.png';
import backg from './Black-Background-Picture.png';
import bg2 from './bg2.jpg';
import bg3 from './EducationPage.jpg';

const inlineStyle = {
    background: '#000',
    width: '60%',
    height:'80%',
    left: '40%',
    top: '70%',
    position: 'absolute',
    padding: '200px',
    transform: 'translate(-50%, -50%)'
}

function App() {
    const [isShown, setIsShown] = useState(false);
    const Ref1 = useRef(null);

    const executeScroll = () => Ref1.current.scrollIntoView({behavior:'smooth'});
  return (
      <div className="App">
          <Parallax bgImage={backg} strength={500}>
              <div style={{height: window.innerHeight, width:window.innerWidth}}>
                  <img src={nameImage} alt="Sami-Ullah Khan" style={{
                      background: '#000',
                      width: '60%',
                      height: '60%',
                      left: '40%',
                      top: '50%',
                      position: 'absolute',
                      transform: 'translate(-50%, -50%)'
                  }}></img>
              </div>
              <p style={{
                  color: '#fff',
                  left: '46.7%',
                  top: '80%',
                  position: 'absolute',
                  transform: 'translate(-50%, -50%)',
                  fontSize:'29px'
              }}>Scroll</p>
              <svg height="100" width="200" style={{
                  left: '50%',
                  top: '90%',
                  position: 'absolute',
                  transform: 'translate(-50%, -50%)'
              }} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} onClick={executeScroll}>
                  {!isShown && (<polygon points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 " stroke="white" fill="white" />)}
                  {!isShown && (<polygon points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 " stroke="white" fill="white" />)}
                  <polygon points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 " stroke="white" fill="white"/>
                  
              </svg>
          </Parallax>

          <Parallax bgImage={bg2} strength={500}>
              <div style={{ height: window.innerHeight, width: window.innerWidth }} ref={Ref1}>
                  <h1 style={{
                      color: '#fff',
                      left: '50%',
                      top: '10%',
                      position: 'absolute',
                      transform: 'translate(-50%, -50%)',
                      fontSize: '40px'
                  }}>About Me</h1>
              </div>
          </Parallax>

          <Parallax bgImage={bg3} strength={500}>
              <div style={{ height: window.innerHeight, width: window.innerWidth }}>
                  <h1 style={{
                      color: '#fff',
                      left: '50%',
                      top: '5%',
                      position: 'absolute',
                      transform: 'translate(-50%, -50%)',
                      fontSize: '40px'
                  }}>Education</h1>
                  <div style={{ height: (window.innerHeight / 4), width: window.innerWidth }}>
                      <h1 style={{
                          color: '#fff',
                          left: '50%',
                          top: '10%',
                          position: 'absolute',
                          transform: 'translate(-50%, -50%)',
                          fontSize: '40px'
                      }}>Education</h1>
                  </div>
                  <div style={{ height: (window.innerHeight / 4), width: window.innerWidth }}>
                      <h1 style={{
                          color: '#fff',
                          left: '50%',
                          top: '40%',
                          position: 'absolute',
                          transform: 'translate(-50%, -50%)',
                          fontSize: '40px'
                      }}>Education</h1>
                  </div>
                  <div style={{ height: (window.innerHeight / 4), width: window.innerWidth }}>
                      <h1 style={{
                          color: '#fff',
                          left: '50%',
                          top: '70%',
                          position: 'absolute',
                          transform: 'translate(-50%, -50%)',
                          fontSize: '40px'
                      }}>Education</h1>
                  </div>
              </div>
          </Parallax>

          <img src={menuImage} alt="Menu" style={{
              background: '#000',
              width: '5%',
              height: '8%',
              left: '90%',
              top: '10%',
              position: 'absolute',
              transform: 'translate(-50%, -50%)'
          }}></img>
          <div style={{height:'100vh'}}></div>
    </div>
  );
}

export default App;
