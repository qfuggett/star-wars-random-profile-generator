function Vehicle (props) {

    const {vehicles} = props

    return (
        <div>
            Vehicle: {vehicles.name}
        </div>
    )
}

export default Vehicle;