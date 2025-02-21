import { useEffect, useRef, useState } from 'react';

import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import { sortPlacesByDistance } from './loc.js';

function App() {
  const modal = useRef();
  const selectedPlace = useRef();
  const [pickedPlaces, setPickedPlaces] = useState([]);
  const [placesSorted, setSortedPlaces] = useState([]);

  useEffect(() => {
      navigator.geolocation.getCurrentPosition((position)=>{
        const sortedPlaces = sortPlacesByDistance(AVAILABLE_PLACES, 
        position.coords.latitude, 
        position.coords.longitude)
    // once this user location is available we set placesSorted

    setSortedPlaces(sortedPlaces);
  });
}, []); // so when the side effect function is executed after the component function, we are setting state inside, technically the component should re-render as well but that's prevented by the '[]' dependency function. this ensures the component is re-executed only when something changes in the sortedPlaces

// Actually React only executes the side effect / useEffect() only once after the App component is done
// however, without empty '[]' dependency array, side-effect function will get executed after every App component render cycle causing an infinite loop


  function handleStartRemovePlace(id) {
    modal.current.open();
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    modal.current.close();
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });
  }

  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    modal.current.close();
  }

  return (
    <>
      <Modal ref={modal}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={placesSorted}
          fallbackText="Loading... Sorting places by distance from user location...."
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
