import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data'; // for named exports we use {}
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcepts';
import TabButton from './components/TabButton';
import { useState } from 'react'; // this is React hooks, but must be called only within React functions
import { EXAMPLES } from './data-with-examples';


// note in index.css, we have core-concepts id selector
// <CoreConcept title></CoreConcept>: we can pass in different data each time we use these components
// shorter alternative {...CORE_CONCEPTS[0]}
function App() {
  // we want to tell React to update UI -> special function useState
  // let tabContent = 'Please click a button'; // thats why this doesn't work
  const [ selectedTopic, setSelectedTopic ] = useState(); // Hooks must be called at top-level of components

  // for the TabButton click
  function handleClick(clickedButton){
    // clickedButton should be a string => 'components', 'jsx', 'props', 'state'
    // then if-else to return Dynamic content
    //tabContent = clickedButton;
    setSelectedTopic(clickedButton);
    console.log(selectedTopic)
  }

  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {/* the problem here is, we are not dynamically using the CORE_CONCEPTS array, say if we delete a value then it throws an errpr */}
          {/*
          <CoreConcept {...CORE_CONCEPTS[0]}></CoreConcept>
          <CoreConcept {...CORE_CONCEPTS[1]}> </CoreConcept>
          <CoreConcept {...CORE_CONCEPTS[2]}> </CoreConcept>
          <CoreConcept {...CORE_CONCEPTS[3]}> </CoreConcept> */}
          {/* Dynamically generate the list, use 'key' to get rid off the warning */}
          {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem}> </CoreConcept>)}       
        </ul>
        </section>
        <section id="examples">
        <h2>Examples</h2>
        <menu>
          {/* Anonymous arrow function ()=> passing custom parameter / value to whenClicked */}
          {/* for dynamic styling: {selectedTopic==='components'}, we pass either true or false, if components is selected the value will be 'components' => true*/}
          <TabButton isSelected={selectedTopic==='components'} whenClicked={() => handleClick('components')}>Components</TabButton>
          <TabButton isSelected={selectedTopic==='jsx'} whenClicked={() => handleClick('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedTopic==='props'} whenClicked={() => handleClick('props')}>Props</TabButton>
          <TabButton isSelected={selectedTopic==='state'} whenClicked={() => handleClick('state')}>State</TabButton>
        </menu>
        {/* div for styling purpose */}
        {!selectedTopic ? <p>Please select a topic</p> : (
          <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )}
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
