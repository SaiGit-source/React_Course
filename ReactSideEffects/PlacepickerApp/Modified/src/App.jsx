import { useEffect, useRef, useState } from 'react';

import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import { sortPlacesByDistance } from './loc.js';

// i want to load userSelectedPlaces into storedIds when the App starts, only once
const storedIds = JSON.parse(localStorage.getItem('userSelectedPlaces')) || []
const storedPlaces = storedIds.map(id => 
  AVAILABLE_PLACES.find((place)=>place.id===id)
) //convert IDs into Places
// it gives array of Place object based on array of IDs stored

function App() {
  const modal = useRef();
  const selectedPlace = useRef();
  //const [pickedPlaces, setPickedPlaces] = useState([]);
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);
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

    // to store selected places locally so we dont lose them when we re-load the page
    // we will store data in browser's storage
    // JSON.stringify takes in an array and converts into String
    const storedIds = JSON.parse(localStorage.getItem('userSelectedPlaces')) || [] // parse is the opposite of stringfy() method
    if (storedIds.indexOf(id)===-1){
      localStorage.setItem(
        'userSelectedPlaces', 
        JSON.stringify([id, ...storedIds])
      )
  } // we cannot use useEffect() as well because useEffect() must be used directly at the root level of the component just like useState()
  // also we need to store the places only when the user clicks the place not when the App component loads, unlike the Navigator code above. so this condition is different
  // it will not cause an infinite loop even if we are updating a state value here
}

  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    modal.current.close();

    // delete places from localStorage

    const storedIds = JSON.parse(localStorage.getItem('userSelectedPlaces')) || [] // parse is the opposite of stringfy() method
    localStorage.setItem(
        'userSelectedPlaces', 
        JSON.stringify(storedIds.filter((id) => id!==selectedPlace.current))
      )
  } // we cannot use useEffect() as well because useEffect() must be used directly at the root level of the component just like useState()

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
