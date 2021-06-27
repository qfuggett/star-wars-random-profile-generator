function Person (props) {

    const {people} = props

    return (
        <div>
            {people.name}
        </div>
    )
}

export default Person;