import reactImg from '../../assets/react-core-concepts.png';
// up one level out of 'Components' folder -> then 'src' folder before diving into assets folder so ../
// for up two levels, we use ../../ 
import './Header.css';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

// the problem now is, whenever i click the buttons, the page is reloaded and this function gets reexecuted and thats wrong
// we are not managing state correctly
function genRandomInt(max){
  return Math.floor(Math.random() * (max+1));
}

// our first custom component
export default function Header() {
  const desc = reactDescriptions[genRandomInt(2)];
  return (
    <header>
    {/*<img src="src/assets/react-core-concepts.png" alt="Stylized atom" />*/}
    <img src={reactImg} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {desc} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>
  )
}
// instead of calling the function, we use it like an HTML element (<Header></Header>)
// Header();
