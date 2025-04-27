import { useState, useEffect } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import HeroEffects from './components/HeroEffects';
import DarkHero from './components/DarkHero';
import TestbootNav from './components/TestbootNav';
import Intro from './components/Intro';

function App() {


  return (
    <>
      <div className='body'>
        <header>
          {/* <Navbar /> */}
          <TestbootNav />
          <Intro />
        </header>
      </div>
    </>
  );
}

export default App;
