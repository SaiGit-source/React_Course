import {useState} from 'react';
import { EXAMPLES } from '../data-with-examples';
import TabButton from './TabButton';
import Section from './Section';
import Tabs from './Tabs';

// now clicking on the TabButtons doesn't change the header text: Crucial React concepts you will need for almost any app you are going to build!
// the reason it doesn't changes because only this 'Examples' component is reloaded when state changes and not the 'App' component (along with 'Header' component), unlike earlier

export default function Examples(){
    const [ selectedTopic, setSelectedTopic ] = useState(); // Hooks must be called at top-level of components
    // for the TabButton click
    function handleClick(clickedButton){
        setSelectedTopic(clickedButton);
        console.log(selectedTopic)
      }
    
    let tabContent = <p>Please select a topic</p>;

    if (selectedTopic) {
        tabContent = (
                    <div id="tab-content">
                    <h3>{EXAMPLES[selectedTopic].title}</h3>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                    <pre>
                      <code>{EXAMPLES[selectedTopic].code}</code>
                    </pre>
                  </div>
                );
            }
      

    return (
            <Section title="Examples" id="examples">
            <Tabs 
            buttonsTag={"menu"}
            buttons={
              <>
              {/* Anonymous arrow function ()=> passing custom parameter / value to whenClicked */}
              {/* for dynamic styling: {selectedTopic==='components'}, we pass either true or false, if components is selected the value will be 'components' => true*/}
              <TabButton isSelected={selectedTopic==='components'} whenClicked={() => handleClick('components')}>Components</TabButton>
              <TabButton isSelected={selectedTopic==='jsx'} whenClicked={() => handleClick('jsx')}>JSX</TabButton>
              <TabButton isSelected={selectedTopic==='props'} whenClicked={() => handleClick('props')}>Props</TabButton>
              <TabButton isSelected={selectedTopic==='state'} whenClicked={() => handleClick('state')}>State</TabButton>
              </>
            }>{tabContent}</Tabs>
            {/*<h2>Examples</h2>*/}
             </Section>
    )
    
}