function Person (props) {

    const {people} = props

    return (
        <div>
            Person: {people.name}
        </div>
    )
}

export default Person;