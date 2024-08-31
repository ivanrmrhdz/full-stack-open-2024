import { useState } from 'react'


//const StatisticLine = ({text, value}) => <p>{text} {value}</p>

const StatisticRow = ({text, value}) => {
  return(
    <tr>
    <td>{text}</td>
    <td>{value}</td>
    </tr>
  )  
}


const Statistics = (props) => {
  if(props.valueTotal === 0){
    return(
      <div><p>No feeedback given</p></div>
    )
  }
  
  return(
    /*<div>
    <StatisticLine text="good" value={props.valueGood}/>
    <StatisticLine text="neutral" value={props.valueNeutral}/>
    <StatisticLine text="bad" value={props.valueBad}/>
    <StatisticLine text="all" value={props.valueBad}/>
    <StatisticLine text="average" value={props.valueAverage}/>
    <StatisticLine text="positive" value={props.valuePercentage}/>
    </div>
    */
    <table>
      <tbody>
      <StatisticRow text="good" value={props.valueGood}/>
      <StatisticRow text="neutral" value={props.valueNeutral}/>
      <StatisticRow text="bad" value={props.valueBad}/>
      <StatisticRow text="all" value={props.valueTotal}/>
      <StatisticRow text="average" value={props.valueAverage}/>
      <StatisticRow text="positive" value={props.valuePercentage}/>
      </tbody>
    </table>
  )
}


const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [percentage, setPercetage] = useState('')

  const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(updatedGood + neutral + bad)  

    
    setAverage((updatedGood + (neutral*0) + (bad*-1))/(total+1))
    setPercetage(updatedGood/(total+1) *100 + '%')
  }
  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1 
    setNeutral(updatedNeutral)
    setTotal(good + updatedNeutral + bad)  
   
    setAverage((good + (updatedNeutral*0) + (bad*-1))/(total+1))
    setPercetage(good/(total+1)*100 + '%')
  }
  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setTotal(good + neutral + updatedBad)  
    
    setAverage((good + (neutral*0) + (updatedBad*-1))/(total+1))
    setPercetage(good/(total+1)*100 + '%')
   
  }

  return (
    <div>
      <h1>give feedback</h1>

      <div>
        <Button handleClick={handleGoodClick} text='good'></Button>
        <Button handleClick={handleNeutralClick} text='neutral'></Button>
        <Button handleClick={handleBadClick} text='bad'></Button>
      </div>

      <h1>statistics</h1>

       <Statistics valueGood={good} valueNeutral={neutral} 
       valueBad={bad} valueTotal={total}
       valueAverage={average} valuePercentage={percentage}/>

    </div>
  )
}

export default App