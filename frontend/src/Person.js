import React from 'react';
import Card from 'react-bootstrap/Card';

function Person (props) {

    const {people} = props

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
                        </ul>
                        
                    </Card.Text>
                </Card.Body>
            </Card>
       </>
    )
}

export default Person;