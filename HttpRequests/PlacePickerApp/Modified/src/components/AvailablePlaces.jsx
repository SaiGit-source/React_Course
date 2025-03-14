import { useEffect, useState } from 'react';
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([])
  

  // we start with empty [], we send HttpRequests to get data then update state

  // inBuilt fetch() function
  // this will send a Get request to the URL. 
  // fetch() returns a Promise, which is a JavaScript value that will eventually resolve to another value. wrapper object around a value that's not there yet but will eventually be there 
  // Promise will have different values, to access those different values, we can use chaning with different methods
  // function passed to then() will only be executed by the browser only once the response from Get is there, not instantly but some point in the future
  // the fetch() method however has a flaw, will cause an infinite loop because we are updating the state, which will inturn reload the component -> solution: useEffect()
  // so now this function within useEffect will immediately execute after the component is executed only if the dependency in the [] changed
  // since dependency [] is empty, useEffect will execute only once when the component is first executed and after that it wont get executed and we wont enter an infinite loop
  useEffect(() => {
  fetch('http://localhost:3000/places').then((response)=>{
    return response.json()
  }).then((resData)=>{
    // in app.js in Backend, the Get method returns ->   res.status(200).json({ places: placesData }); so we can access the key 'places' to get data
    // Available places
    setAvailablePlaces(resData.places)
  }) 
}, [])
  // other way is await keyword to access response but will only work with async
  // const response = await fetch('http://localhost:3000/places')



  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
