import Card from 'react-bootstrap/Card'

function Starship (props) {

    const {starships} = props

    return (
        <>
            <Card border="dark">
                <Card.Header><b>{starships.name} starship</b></Card.Header>
                <Card.Body>
                    <Card.Text>
                        <ul>
                            <li>Created by {starships.manufacturer}</li>
                            <li>Worth {starships.cost_in_credits} credits</li>
                            <li>Holds a crew of {starships.crew}</li>
                            <li>Holds {starships.passengers} passengers</li>
                            <li>Capable of carrying {starships.cargo_capacity} loads</li>
                            <li>{starships.hyperdrive_rating} hyperdrive</li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Starship;