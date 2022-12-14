import { useState } from 'react'

const Button = ({ text, clickEvent }) => {

  return (
    <button onClick={clickEvent}>{text}</button>
  )
}

const VoteCount = ({ count }) => {
  return (
    <p>has {count} votes</p>
  )
}

const MaxVotes = ({ anecdote }) => {
  return (
    <div>
      <h2>Anecdote with most votes</h2>
      <p>{anecdote}</p>
    </div>
  )
}

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
  const [votes, setVotes] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 })

  const castVote = () => {
    const newVotes = { ...votes };
    newVotes[selected] = newVotes[selected] + 1;
    setVotes(newVotes);
  }

  const refreshAnecdote = () => {
    const newIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(newIndex)
  }

  const getAnecdoteMaxVotes = () => {
    return Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b);
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <VoteCount count={votes[selected]} />
      <Button clickEvent={castVote} text="vote" />
      <Button clickEvent={refreshAnecdote} text="next anecdote" />

      <MaxVotes anecdote={anecdotes[getAnecdoteMaxVotes()]} />
    </div>
  )
}

export default App