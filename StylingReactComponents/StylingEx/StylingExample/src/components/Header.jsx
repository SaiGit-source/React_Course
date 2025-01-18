import logo from '../assets/logo.png';
import './Header.css'; // we split the css file and import into Header

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
      {/* inline style prop */}
      {/*
            <p style={{
        color: 'red',
        textAlign: 'left' 
      }}>A community of artists and art-lovers.</p>*/}
    </header>
  );
}
