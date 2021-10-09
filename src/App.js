import React, {useState} from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Hero from './components/Hero';
import Filler from './components/Filler';
import FillerTwo from './components/FillerTwo';
import Skills from './components/Skills';
import './App.css';

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
    <Nav 
    contactSelected = {contactSelected}
    setContactSelected={setContactSelected}
    ></Nav>
    {!contactSelected ? (
        <>
      <Hero></Hero>
      <main>
      <Filler></Filler>
      <FillerTwo></FillerTwo>
      <Skills></Skills>
      </main>
      </>
      ) : (
        <main>
        <Hero></Hero>
        <About></About>
        </main>
      )}
    </div>
  );
}

export default App;