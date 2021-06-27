function Starship (props) {

    const {starships} = props

    return (
        <div>
            Starship: {starships.name}
        </div>
    )
}

export default Starship;