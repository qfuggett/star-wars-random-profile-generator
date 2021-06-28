import Card from 'react-bootstrap/Card'

function Starship (props) {

    const {starships} = props

    return (
        <>
            <Card border="dark" bg="light">
                <Card.Header><b>You own the {starships.name} starship</b></Card.Header>
                <Card.Body>
                    <Card.Text>
                        <ul>
                            <li>Created by {starships.manufacturer}, with a {starships.hyperdrive_rating} hyperdrive</li><br/>
                            <li>Worth {starships.cost_in_credits} credits</li><br/>
                            <li>Holds a crew of {starships.crew}</li>
                            <li>Holds {starships.passengers} passengers</li><br/>
                            <li>Capable of carrying {starships.cargo_capacity} loads</li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Starship;