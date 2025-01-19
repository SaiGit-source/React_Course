import logo from '../assets/logo.png';
// import './Header.css'; // we split the css file and import into Header
// import classes from './Header.module.css';
import {styled} from 'styled-components';
// we can use either className or styled components

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 2rem;

    & img {
    object-fit: contain;
    margin-bottom: 2rem;
    width: 11rem;
    height: 11rem;
  }
  
   & h1 {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.4em;
    text-align: center;
    text-transform: uppercase;
    color: #9a3412;
    font-family: 'Pacifico', cursive;
    margin: 0;
  }

  & p {
    text-align: center;
    color: #a39191;
    margin: 0;
  }
  
  @media (min-width: 768px) {
    & {
      margin-bottom: 4rem;
    }
  
    & h1 {
      font-size: 2.25rem;
    }
  }
`;

export default function Header() {
  return (
      <StyledHeader>
      {/*<header>*/}
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
      {/*<p className={classes.paragraph}>A community of artists and art-lovers.</p>*/}
      {/* CSS modules: if you right-click -> Elements -> Head -> style type -> .paragraph_1bgdv_71 is renamed */}
      {/* thats because .paragraph is transformed by build process and scoped to only component file i am importing into */}
      {/* inline style prop */}
      {/*
            <p style={{
        color: 'red',
        textAlign: 'left' 
      }}>A community of artists and art-lovers.</p>*/}
      {/*</header>*/}
      </StyledHeader>
  );
}
