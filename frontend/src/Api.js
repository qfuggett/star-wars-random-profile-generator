import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Person from "./Person";
import Planet from "./Planet";
import Starship from './Starship';
import Vehicle from './Vehicle';
import starwars from './img/starwars.png';

function Api () {

    // Establishes state in component
    const [person, setPersons] = React.useState([]);
    const [planet, setPlanets] = React.useState([]);
    const [starship, setStarships] = React.useState([]);
    const [vehicle, setVehicles] = React.useState([]);
    // const [profile, setProfile] = React.useState({savedPerson: "", savedPlanet: "", savedStarship: "", savedVehicle: ""});

    function searchApi(evt) {
        // Automatically fetches api on load
        evt.preventDefault()
        // Fetch from people url
        fetch('https://swapi.dev/api/people')
        // Returns a promise and parses it as json object
        .then(response => response.json())
        // Returns another promise that we can actually handle
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

            // Fetch from planets url
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

            // Fetch from Vehicle url
            return fetch('https://swapi.dev/api/vehicles') 
        })
        .then(response => response.json())
        .then((data) => {

            let vehicles = data.results

            const vehicleKeys = Object.keys(vehicles)
            const randIndex3 = Math.floor(Math.random() * vehicleKeys.length)
            const randKey3 = vehicleKeys[randIndex3]
            const vhcle = vehicles[randKey3]
            setVehicles(vhcle)


            // Fetch from Starship url
            return fetch('https://swapi.dev/api/starships')
        })
        .then(response => response.json())
        .then((data) => {

            let starships = data.results

            const starshipKeys = Object.keys(starships)
            const randIndex4 = Math.floor(Math.random() * starshipKeys.length)
            const randKey4 = starshipKeys[randIndex4]
            const strshp = starships[randKey4]
            setStarships(strshp)
        })
    }

    // function saveProfile(evt) {
    //     evt.preventDefault()
    //     console.log("test")

    //     setProfile({
    //         savedPerson: person,
    //         savedPlanet: planet,
    //         savedStarship: starship,
    //         savedVehicle: vehicle
    //     })

    //     console.log(profile)

    // }
    
    
    return (
        <>
            <Jumbotron style={{ backgroundImage: `url(${starwars})`, backgroundSize: 'contain' }}></Jumbotron>
            <Container>
                <Row>
                    <p style={{color: "white"}}>
                        Randomly generate your Star Wars profile!
                    </p>
                </Row>
                <Row>
                    <CardGroup>
                        <Person people={person}/>
                        <Planet planetary={planet}/>
                        <Starship starships={starship}/>
                        <Vehicle vehicles={vehicle}/>
                    </CardGroup>
                </Row>
                <Row>
                    <Button onClick={(evt) => {searchApi(evt)}} variant="dark">Toggle this profile</Button>
                </Row>
                {/* Future Feature
                <Row>
                    <Button onClick={(evt) => {saveProfile(evt)}} variant="dark">Save this profile!</Button>
                </Row> */}
            </Container>
            
        </>
    )
}

export default Api;