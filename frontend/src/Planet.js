import Card from 'react-bootstrap/Card'

function Planet(props) {

    const {planetary} = props

    return (
        <>
            <Card border="dark" bg="light">
                <Card.Header><b>You live on Planet {planetary.name}</b></Card.Header>
                <Card.Body>
                    <Card.Text>
                        <ul>
                            <li>Has a population of {planetary.population} residents</li><br/>
                            <li>The planet has {planetary.terrain} terrain</li><br/>
                            <li>Has a {planetary.climate} climate</li><br/>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )

}

export default Planet;