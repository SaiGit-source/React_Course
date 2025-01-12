import Header from './components/Header/Header';
import { useState, Fragment } from 'react'; // this is React hooks, but must be called only within React functions
import CoreConcepts from './components/CoreConcepts';
import Examples from './components/Examples';

function App() {

  {/* we can use <Fragment> or <> instead of <div> for wrapping, we dont need the unnecessary div */}
  return (
    <Fragment>
    {/*<> also works */}
    {/*<div>*/}
      <Header></Header>
      <main>
        <CoreConcepts></CoreConcepts>
        <Examples></Examples>
      </main>
    {/*</div>*/}
    </Fragment>
  );
}

export default App;
