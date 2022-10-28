const App = (props) => {
    const{text, value} = props

    return(
        <tr>
            <td>{text}: {value}</td>
        </tr>
    )
}

export default App