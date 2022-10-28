const App = (props) => {
  const {handleClick, text} = props

  return(
    <>
        <button onClick={handleClick}>{text}</button>
    </>
  )
}

export default App