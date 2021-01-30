import './App.css';
import React, { useState, useRef } from 'react';
import { Parallax } from 'react-parallax';
import Tilt from 'react-tilt';
import menuImage from './menu.png';
import backg from './Black-Background-Picture.png';
import bg2 from './bg2.jpg';
import bg3 from './EducationPage.jpg';
import bg4 from './bg2.jpg';
import bg5 from './bg2.jpg';
import imp from './imp.jpg';
import ucl from './ucl.jpg';
import lgs from './lgs.jpg';
import ebc from './ebc.jpg';
import db from './db.jpg';

function App() {
    const [isShown, setIsShown] = useState(false);
    const Ref1 = useRef(null);
    const executeScroll = () => Ref1.current.scrollIntoView({ behavior: 'smooth' });
    const [isOpen, setIsOpen] = useState(false);
  return (
      <div className="App">
          <Parallax bgImage={backg} strength={500}>
              <Tilt options={{max:10,scale:1}} style={{height: window.innerHeight, width:window.innerWidth}}>
                  <h1 style={{
                      color: '#fff',
                      left: '20%',
                      top: '10%',
                      position: 'absolute',
                      fontSize: 0.1*window.innerWidth,
                      textAlign:'left'
                  }}>Sami-Ullah<br></br>Khan</h1>
              </Tilt>
              <p style={{
                  color: '#fff',
                  left: '50% ',
                  top: '85%',
                  position: 'absolute',
                  fontSize:'29px'
              }}>Scroll</p>
              <svg height={0.1*window.innerHeight} width={0.1*window.innerWidth} style={{
                  left: '50%',
                  top: '93%',
                  position: 'absolute'
              }} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} onClick={executeScroll}>
                  {!isShown && (<polygon points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 " stroke="white" fill="white" />)}
                  {!isShown && (<polygon points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 " stroke="white" fill="white" />)}
                  <polygon points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 " stroke="white" fill="white"/>
                  
              </svg>
          </Parallax>

          <Parallax bgImage={bg2} strength={500}>
              <div style={{ height: window.innerHeight, width: window.innerWidth }} ref={Ref1}>
                  <h1 style={{
                      backgroundColor:'#000',
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
                      backgroundColor: '#000',
                      color: '#fff',
                      left: '50%',
                      top: '5%',
                      position: 'absolute',
                      transform: 'translate(-50%, -50%)',
                      fontSize: '40px'
                  }}>Education</h1>
                  <div id="Opac" style={{ height: (window.innerHeight / 4), width: window.innerWidth, top: '15%', position: 'absolute', backgroundImage: `url(${imp})`}}>
                      <h2 style={{
                          backgroundColor: '#000',
                          color:'#fff',
                          left: '10%',
                          top: '30%',
                          position: 'absolute',
                          transform: 'translate(-50%, -50%)'
                      }}>Imperial College London</h2>
                      <h3 style={{
                          backgroundColor: '#000',
                          color: '#fff',
                          left: '10%',
                          top: '50%',
                          position: 'absolute',
                          transform: 'translate(-50%, -50%)'
                      }}>MSc Computing Science</h3>
                  </div>
                  <div id="Opac" style={{ height: (window.innerHeight / 4), width: window.innerWidth, top: '45%', position: 'absolute', backgroundImage: `url(${ucl})`, backgroundRepeat: 'no-repeat'}}>
                      <h2 style={{
                          backgroundColor: '#000',
                          color: '#fff',
                          left: '10%',
                          top: '30%',
                          position: 'absolute',
                          transform: 'translate(-50%, -50%)'
                      }}>University College London</h2>
                      <h3 style={{
                          backgroundColor: '#000',
                          color: '#fff',
                          left: '10%',
                          top: '50%',
                          position: 'absolute',
                          transform: 'translate(-50%, -50%)'
                      }}>BSc Mathematics</h3>
                  </div>
                  <div id="Opac" style={{ height: (window.innerHeight / 4), width: window.innerWidth, top: '75%', position: 'absolute', backgroundImage: `url(${lgs})`}}>
                      <h2 style={{
                          backgroundColor: '#000',
                          color: '#fff',
                          left: '10%',
                          top: '30%',
                          position: 'absolute',
                          transform: 'translate(-50%, -50%)'
                      }}>Langley Grammar School</h2>
                      <h3 style={{
                          backgroundColor: '#000',
                          color: '#fff',
                          left: '10%',
                          top: '50%',
                          position: 'absolute',
                          transform: 'translate(-50%, -50%)'
                      }}>A-Levels</h3>
                  </div>
              </div>
          </Parallax>

          <Parallax bgImage={bg4} strength={500}>
              <div style={{ height: window.innerHeight, width: window.innerWidth }}>
                  <h1 style={{
                      backgroundColor: '#000',
                      color: '#fff',
                      left: '50%',
                      top: '5%',
                      position: 'absolute',
                      transform: 'translate(-50%, -50%)',
                      fontSize: '40px'
                  }}>Work Experience</h1>
                  <div id="Opac" style={{ height: (window.innerHeight / 3), width: window.innerWidth, top: '15%', position: 'absolute', backgroundImage: `url(${ebc})` }}>
                      <h2 style={{
                          backgroundColor: '#000',
                          color: '#fff',
                          left: '10%',
                          top: '30%',
                          position: 'absolute',
                          transform: 'translate(-50%, -50%)'
                      }}>Sigma Tutors</h2>
                      <h3 style={{
                          backgroundColor: '#000',
                          color: '#fff',
                          left: '10%',
                          top: '50%',
                          position: 'absolute',
                          transform: 'translate(-50%, -50%)'
                      }}>Co-founder/Head Tutor</h3>
                  </div>
                  <div id="Opac" style={{ height: (window.innerHeight / 3), width: window.innerWidth, bottom: '0%', position: 'absolute', backgroundImage: `url(${db})` }}>
                      <h2 style={{
                          backgroundColor: '#000',
                          color: '#fff',
                          left: '10%',
                          top: '30%',
                          position: 'absolute',
                          transform: 'translate(-50%, -50%)'
                      }}>Deutsche Bank</h2>
                      <h3 style={{
                          backgroundColor: '#000',
                          color: '#fff',
                          left: '10%',
                          top: '50%',
                          position: 'absolute',
                          transform: 'translate(-50%, -50%)'
                      }}>Technology Spring Intern</h3>
                  </div>
              </div>
          </Parallax>

          <Parallax bgImage={bg5} strength={500}>
              <div style={{ height: window.innerHeight, width: window.innerWidth }}>
                  <h1 style={{
                      backgroundColor: '#000',
                      color: '#fff',
                      left: '50%',
                      top: '10%',
                      position: 'absolute',
                      transform: 'translate(-50%, -50%)',
                      fontSize: '40px'
                  }}>Personal Projects</h1>
              </div>
          </Parallax>

          <img src={menuImage} alt="Menu" style={{
              width: '5%',
              height: '8%',
              left: '90%',
              top: '10%',
              position: 'absolute',
              transform: 'translate(-50%, -50%)'
          }}></img>
    </div>
  );
}

export default App;
