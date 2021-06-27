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
                            <li>The {vehicles.model} model</li>
                            <li>Worth {vehicles.cost_in_credits} credits</li>
                            <li>Holds a crew of {vehicles.crew}</li>
                            <li>Holds {vehicles.passengers} passengers</li>
                            <li>Capable of carrying {vehicles.cargo_capacity} loads</li>
                            <li>{vehicles.vehicle_class} vehicle type</li>
                            <li>Has a max speed of {vehicles.max_atmosphering_speed}</li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Vehicle;