import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data'; // for named exports we use {}

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max){
  return Math.floor(Math.random() * (max+1));
}

// our first custom component
function Header() {
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

// we want to have different data everytime this CoreConcept component gets used: Props
/*
function CoreConcept(props) {
  return (
    <li>
        <img src={props.image} alt={props.title}></img>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
    </li>
  );
}
*/

// Object destructuring
function CoreConcept({image, title, description}) {
  return (
    <li>
        <img src={image} alt={title}></img>
        <h3>{title}</h3>
        <p>{description}</p>
    </li>
  );
}

// note in index.css, we have core-concepts id selector
// <CoreConcept title></CoreConcept>: we can pass in different data each time we use these components
// shorter alternative {...CORE_CONCEPTS[0]}
function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept {...CORE_CONCEPTS[0]}></CoreConcept>
          <CoreConcept {...CORE_CONCEPTS[1]}> </CoreConcept>
          <CoreConcept {...CORE_CONCEPTS[2]}> </CoreConcept>
          <CoreConcept {...CORE_CONCEPTS[3]}> </CoreConcept>        
        </ul>
        </section>
      </main>
    </div>
  );
}

/* longer alternative (title={CORE_CONCEPTS[0].title}) but it works 
function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept 
          title={CORE_CONCEPTS[0].title} 
          description={CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image}> 
          </CoreConcept>

          <CoreConcept 
          title={CORE_CONCEPTS[1].title} 
          description={CORE_CONCEPTS[1].description}
          image={CORE_CONCEPTS[1].image}> 
          </CoreConcept>

          <CoreConcept 
          title={CORE_CONCEPTS[2].title} 
          description={CORE_CONCEPTS[2].description}
          image={CORE_CONCEPTS[2].image}> 
          </CoreConcept>

          <CoreConcept 
          title={CORE_CONCEPTS[3].title} 
          description={CORE_CONCEPTS[3].description}
          image={CORE_CONCEPTS[3].image}> 
          </CoreConcept>
        </ul>
        </section>
      </main>
    </div>
  );
}
*/
/*
function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <h2>Time to get started!</h2>
        <h3>I am the first custom component!</h3>
      </main>
    </div>
  );
}
*/
export default App;
