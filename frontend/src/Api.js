import React from 'react';
import Person from "./Person"
import Planet from "./Planet"

function Api () {

    const [person, setPersons] = React.useState([]);
    const [planet, setPlanets] = React.useState([]);
    const [starship, setStarships] = React.useState([]);
    const [vehicle, setVehicles] = React.useState([]);

    React.useEffect(() => {

        //Automatically fetches api on load
        fetch('https://swapi.dev/api/people')
        .then(response => response.json())
        .then((data) => {
            let people = data.results

            // Create an array of elements whose strings correspond to the enumerable properties found upon the object
            const keys = Object.keys(people)
            console.log(keys)
            // Generates random index based on number of keys
            const randIndex = Math.floor(Math.random() * keys.length)
            // Select a key from the array of keys using the random index
            const randKey = keys[randIndex]
            //Use the key to get its corresponding person from people
            const ppl = people[randKey]
            // Updates the state
            setPersons(ppl)

            return fetch('https://swapi.dev/api/planets')
        })
        .then(response => response.json())
        .then((data) => {

            let planets = data.results

            const planetKeys = Object.keys(planets)
            const randIndex2 = Math.floor(Math.random() * planetKeys.length)
            const randKey2 = planetKeys[randIndex2]
            const plnt = planets[randKey2]
            setPlanets(plnt)
        })
    }, [])
    
    
    return (
        <div>
            
            <Person people={person}/>
            <Planet planetary={planet}/>
        </div>
    )
}

export default Api;