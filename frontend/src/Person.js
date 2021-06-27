import Card from 'react-bootstrap/Card';

function Person (props) {

    const {people} = props

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{people.name}</Card.Title>
                <Card.Text>
                    <ul>
                        <li>Gender: {people.gender}</li>
                        <li>Height: {people.height}</li>
                        <li>Eye Color: {people.eye_color}</li>
                        <li>Hair Color: {people.hair_color}</li>
                        <li>Skin Color: {people.skin_color}</li>
                        <li>As seen in: {people.films}</li>
                    </ul>
                    
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Person;