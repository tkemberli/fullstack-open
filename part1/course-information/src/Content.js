const App = (props) => {

    const parts = props.course.parts.map((part) => 
    <p key={part.name}>{part.name} : {part.exercises}</p>
    )

    return(
        <>
            {parts}
        </>
    )
}

export default App