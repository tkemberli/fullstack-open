import { useState } from 'react'
import Button from './Button'
import Anecdote from './Anecdote'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(anecdotes.length))


  const handleClick = () => {
    const min = 0
    const max = anecdotes.length - 1
    const randomNumber = (Math.random() * (max - min) + min).toFixed(0)
    setSelected(randomNumber)
  }

  const handleVote = () => {
    const newPoints = [...points]
    newPoints[selected]++

    setPoints(newPoints)
  }

  const getMostVoted = () => {
    let index = 0;
    let mostPoints = 0;

    for(let i = 0; i < points.length; i++) {
      if(points.at(i) > mostPoints) {
        index = i
        mostPoints = points.at(i)
      }
    }

    
    return index
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdotes = {anecdotes} points = {points} index = {selected}/>
      <Button handleClick={() => handleVote()} text = "vote"/>
      <Button handleClick={() => handleClick()} text = "next anecdote"/>

      <h1>Anecdote with most votes</h1>
      <Anecdote anecdotes = {anecdotes} points = {points} index = {getMostVoted()}/>
    </div>
  )
}

export default App