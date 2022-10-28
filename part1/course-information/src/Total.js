const App = (props) => {
    const values = props.course.parts.map((part) => 
        part.exercises
    )

    const sum = values.reduce((previous, next) =>
        previous + next, 0
    )

    return(
        <>
            <p>Number of exercises : {sum}</p>
        </>
    )
}

export default App