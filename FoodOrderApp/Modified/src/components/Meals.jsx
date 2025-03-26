// load dummy data from nodeJs backend
// '/meals' endpoint

import { useState, useEffect } from "react"
import MealItem from "./MealItem"

export default function Meals(){
    const [loadedMeals, setLoadedMeals] = useState([])

    useEffect(() => {
    async function fetchMeals() {

        // in app.js->app.get('/meals', async (req, res), meals.json() loaded from some file
        const response = await fetch('http://localhost:3000/meals', {method: 'GET'})
        if (!response.ok){
                // for 400 or 500 bad request

        }

        const meals = await response.json()
        setLoadedMeals(meals)
    }
        fetchMeals()
    }, []) // useEffects() to prevent infinite loop

            {/* in index.css, we have #meals */}
    return (
        <ul id="meals">
            {loadedMeals.map(meal=>
                <MealItem key={meal.id} meal={meal} />
            )}
        </ul>
    )
}