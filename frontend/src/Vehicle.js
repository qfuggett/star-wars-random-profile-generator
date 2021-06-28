import Card from 'react-bootstrap/Card'

function Vehicle (props) {

    const {vehicles} = props

    return (
        <>
            <Card border="dark" bg="light">
                <Card.Header><b>You're riding on the {vehicles.name}</b></Card.Header>
                <Card.Body>
                    <Card.Text>
                        <ul>
                            <li>The {vehicles.model} model is worth {vehicles.cost_in_credits} credits</li><br/>
                            <li>Holds a crew of {vehicles.crew}</li>
                            <li>Holds {vehicles.passengers} passengers</li><br/>
                            <li>Capable of carrying {vehicles.cargo_capacity} loads and has a max speed of {vehicles.max_atmosphering_speed}</li><br/>
                            <li>Is a {vehicles.vehicle_class} vehicle type</li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Vehicle;