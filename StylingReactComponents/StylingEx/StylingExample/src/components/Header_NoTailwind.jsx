import logo from '../assets/logo.png';
// import './Header.css'; // we split the css file and import into Header
import classes from './Header.module.css';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p className={classes.paragraph}>A community of artists and art-lovers.</p>
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
