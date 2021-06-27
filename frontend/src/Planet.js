import Card from 'react-bootstrap/Card'

function Planet(props) {

    const {planetary} = props

    return (
        <>
            <Card border="dark">
                <Card.Header><b>Planet {planetary.name}</b></Card.Header>
                <Card.Body>
                    <Card.Text>
                        <ul>
                            <li>Has a population of {planetary.population} residents</li>
                            <li>{planetary.terrain} terrain</li>
                            <li>Has a {planetary.climate} climate</li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )

}

export default Planet;