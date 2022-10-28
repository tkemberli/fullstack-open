const App = (props) => {
    const {anecdotes, points, index} = props

    return(
        <>
            <p>{anecdotes[index]}</p>
            <p>has {points[index]} votes</p>
        </>
    )
}

export default App