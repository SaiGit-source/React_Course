import logo from '../assets/logo.png';
// import './Header.css'; // we split the css file and import into Header
// import classes from './Header.module.css';
import {styled} from 'styled-components';
// we can use either className or styled components

export default function Header() {
  return (

      <header className="flex flex-col items-center mt-8 mb-8 md:mb-16">
      <img src={logo} alt="A canvas" className="mb-8 w-44 h-44 object-contain"/>
      <h1 className="text-xl md:text-4xl font-semibold tracking-widest text-center uppercase text-amber-800 font-title">ReactArt</h1>
      <p className='text-stone-500'>A community of artists and art-lovers.</p>
      {/*<p className={classes.paragraph}>A community of artists and art-lovers.</p>*/}
      {/* CSS modules: if you right-click -> Elements -> Head -> style type -> .paragraph_1bgdv_71 is renamed */}
      {/* thats because .paragraph is transformed by build process and scoped to only component file i am importing into */}
      {/* inline style prop */}
      {/*
            <p style={{
        color: 'red',
        textAlign: 'left' 
      }}>A community of artists and art-lovers.</p>*/}
      </header>
  );
}
