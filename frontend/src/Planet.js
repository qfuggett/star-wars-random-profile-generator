function Planet(props) {

    const {planetary} = props

    return (
        <div>
            Planet: {planetary.name}
        </div>
    )

}

export default Planet;