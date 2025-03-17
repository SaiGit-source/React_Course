import { useRef, useState, useCallback, useEffect } from 'react';

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import { fetchUserPlaces, updateUserPlaces } from './http.js';
import Error from './components/Error.jsx';

function App() {
  const selectedPlace = useRef();

  const [userPlaces, setUserPlaces] = useState([]);
  const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState()
  const [isFetching, setIsFetching] = useState(false)
  const [errorState, setError] = useState(undefined)


  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    // similar to Available places
    async function fetchUPlaces(){
      setIsFetching(true)
      try {
        const pickedPlaces = await fetchUserPlaces()
        setUserPlaces(pickedPlaces)
      }
      catch (error)  {
        setError({message: error.message || 'Failed to fetch user-picked places'})
      }

      setIsFetching(false)
    }
    fetchUPlaces()
  }, [])


  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });

  // we have two functions in Backend to get and save places we selected earlier
  // app.get('/user-places', async (req, res)
  // app.put('/user-places', async (req, res) 

    // send POST request Backend with updated array of data
    try {
    await updateUserPlaces([selectedPlace, ...userPlaces])
    } catch (error) {
      setUserPlaces(userPlaces) // incase of error, i will update the state with old user places
      setErrorUpdatingPlaces({message: error.message || 'Failed to update places', 
      })
    }
  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
    );

    try {
      await updateUserPlaces(
        userPlaces.filter((place) => place.id!==selectedPlace.current.id)
      )
    } catch (error) {
      setUserPlaces(userPlaces) // to roll back change
      setErrorUpdatingPlaces({
        message: error.message || 'Failed to remove place',
      })
  } 

    setModalIsOpen(false);
  }, 
  [userPlaces]); // reexecute this function if 'userPlaces' state changes

  function handleError() {
    setErrorUpdatingPlaces(null)
  }


  return (
    <>
    <Modal open={errorUpdatingPlaces} onClose={handleError}>
      {errorUpdatingPlaces && (
      <Error 
        title="An error occurred!" 
        message={errorUpdatingPlaces.message}
        onConfirm={handleError}>
      </Error>
      )}
    </Modal>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
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
        {errorState && <Error title="An Error Occurred!"
                  message={errorState.message}>
                </Error>
        }

        {!errorState && (
        <Places
          title="I'd like to visit ..."
          fallbackText="Select the places you would like to visit below."
          isLoading={isFetching}
          loadingText="Fetching your places..."
          places={userPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        )
        }

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
