// function decorated with async will yield a promise
// Get availablePlaces from Backend
export async function fetchAvailablePlaces() {
            const response = await fetch('http://localhost:3000/places')
            const resData = await response.json()
    
            if (!response.ok) {
              // handling errors from backend
              // if true 200, 300 status
              // if false, 400, 500 status code
              throw new Error('Failed to fetch places')
            }
    return resData.places
}

// update user-picked places --> POST
/* Backend expects
    app.put('/user-places', async (req, res) => {
    const places = req.body.places;
*/
export async function updateUserPlaces(places){
    const response = await fetch('http://localhost:3000/user-places', {
        method: 'PUT',
        body: JSON.stringify(
            {places: places}
        ),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const resData = await response.json()

    if (!response.ok){
        throw new Error('Failed to update user-picked places')
    }

    return resData.message
}

// Get user-picked places
export async function fetchUserPlaces() {
    const response = await fetch('http://localhost:3000/user-places')
    const resData = await response.json()

    if (!response.ok) {
      // handling errors from backend
      // if true 200, 300 status
      // if false, 400, 500 status code
      throw new Error('Failed to fetch user-picked places')
    }
return resData.places
}