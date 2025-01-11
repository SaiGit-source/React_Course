import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data'; // for named exports we use {}
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcepts';
import TabButton from './components/TabButton';

// note in index.css, we have core-concepts id selector
// <CoreConcept title></CoreConcept>: we can pass in different data each time we use these components
// shorter alternative {...CORE_CONCEPTS[0]}
function App() {
  // for the TabButton click
  function handleClick(clickedButton){
    // clickedButton should be a string => 'components', 'jsx', 'props', 'state'
    // then if-else to return Dynamic content
    console.log(clickedButton)
  }

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
        <section id="examples">
        <h2>Examples</h2>
        <menu>
          {/* Anonymous arrow function ()=> passing custom parameter / value to whenClicked */}
          <TabButton whenClicked={() => handleClick('components')}>Components</TabButton>
          <TabButton whenClicked={() => handleClick('jsx')}>JSX</TabButton>
          <TabButton whenClicked={() => handleClick('props')}>Props</TabButton>
          <TabButton whenClicked={() => handleClick('state')}>State</TabButton>
        </menu>
        Dynamic Content
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