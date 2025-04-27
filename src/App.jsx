import { useState, useEffect } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import HeroEffects from './components/HeroEffects';
import DarkHero from './components/DarkHero';
import TestbootNav from './components/TestbootNav';

function App() {


  return (
    <>
      <div className='body'>
        <header>

          {/* <HeroEffects /> */}
          {/* <DarkHero /> */}
          {/* <Navbar /> */}
          <TestbootNav />
        </header>
      </div>
    </>
  );
}

export default App;
