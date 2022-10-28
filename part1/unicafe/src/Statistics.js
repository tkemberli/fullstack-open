import StatisticLine from "./StatisticLine"

const App = (props) => {
    const {good, neutral, bad} = props

    const total = good + neutral + bad
    
    const getAverage = () => {
        const average = ((good - bad) / total)
        if(isNaN(average)) return 0
  
        return parseFloat(average).toFixed(2)
      }

      const getPositive = () => {
        const positive = good / total
        if(isNaN(positive)) return "0%"
  
        return parseFloat(positive).toFixed(2)+"%"
      }

  return(
    total === 0 ?
     <p>No feedback given</p>   
     :
    <>
        <h1>statistics</h1>
        <table>
            <tbody>
            <StatisticLine text = "good" value = {good}/>
            <StatisticLine text = "neutral" value = {neutral}/>
            <StatisticLine text = "bad" value = {bad}/>
            <StatisticLine text = "total" value = {total}/>
            <StatisticLine text = "average" value = {getAverage()}/>
            <StatisticLine text = "positive" value = {getPositive()}/>
            </tbody>
        </table>
    </>
  )
}

export default App