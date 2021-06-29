import React from 'react';
import Card from 'react-bootstrap/Card';
import Overlay from 'react-bootstrap/Overlay';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover'



function Person (props) {

    const [film, setFilms] = React.useState([]);
    const [movie, setMovies] = React.useState([]);
    const {people} = props

    function getMovie(evt) {
        evt.preventDefault()

        let films = people.films
        for (let item in films) {
        console.log(films[item])
            setFilms(films[item])
            fetch(film)
            .then(response => response.json())
            .then((data) => {
                let movies = data.title
                setMovies(movies)
            })
        }
    }

    const popover = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">{movie}</Popover.Title>
          <Popover.Content>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
          </Popover.Content>
        </Popover>
      );
    const Trigger = () => (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <Button onClick={(evt) => {getMovie(evt)}} variant="success">As seen in . . .</Button>
        </OverlayTrigger>
      );
    

    return (
       <>
            <Card border="dark" bg="light">
                <Card.Header><b>You are {people.name}!</b></Card.Header>
                <Card.Body>
                    <Card.Text>
                        <ul>
                            <li>Gender: {people.gender}</li>
                            <li>Height: {people.height}</li>
                            <li>Eye Color: {people.eye_color}</li>
                            <li>Hair Color: {people.hair_color}</li>
                            <li>Skin Color: {people.skin_color}</li>
                            <li><Trigger/></li>
                        </ul>
                        
                    </Card.Text>
                </Card.Body>
            </Card>
       </>
    )
}

export default Person;