import { useState } from 'react'
import Button from './Button'
import Statistics from './Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increase = (feedbackType) => {

    switch(feedbackType) {
      case "good":
        setGood(good + 1)
        break

      case "neutral":
        setNeutral(neutral + 1)
        break

      case "bad":
        setBad(bad + 1)
        break

      default:
    }

    
    
  }

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button handleClick={() => increase("good")} text="good"/>
        <Button handleClick={() => increase("neutral")} text="neutral"/>
        <Button handleClick={() => increase("bad")} text="bad"/>
      </div>

      <div>
        <Statistics good = {good} neutral = {neutral} bad = {bad}/>
      </div>
    </div>

    
  )
}

export default App