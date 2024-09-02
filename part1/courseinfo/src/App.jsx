const Header = (props) => {
return(
  <div>
    <h1>{props.course}</h1></div>
)

}

const Content = props => {
  return(
    <div>
      <Part part_n={props.parts[0].name} exercises_n={props.parts[0].exercises}/>
      <Part part_n={props.parts[1].name} exercises_n={props.parts[1].exercises}/>
      <Part part_n={props.parts[2].name} exercises_n={props.parts[2].exercises}/>
      </div>
  )
  }

 const Part = (props) => {
return(
  <div>
    <p>{props.part_n} {props.exercises_n}</p>
  </div>
)
 } 

  const Total = (props) => {
    return(
     <div>
     <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
     </div>
    )
    }

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>   
      <Content parts={course.parts}/>
      <Total parts={course.parts} />

    </div>
  )
}

export default App; Header; Content; Part; Total

/*
import { useState } from 'react'

const Display = ({counter}) => <div>{counter}</div>

const Button = ({onSmash, text}) => <button onClick={onSmash}>{text}</button>
 
const App = () => {
  const [ counter, setCounter ] = useState(0)
  console.log('rendering with counter value', counter)
/*
  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)
  const decreaseByOne = () => setCounter(counter - 1)
  *//*
  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }

  const decreaseByOne = () => { 
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }

  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }
  
  return (
    <div> <div>
    <Display counter={counter}/></div>
    <Button onSmash={increaseByOne} text='plus'></Button>
    <Button onSmash={setToZero} text='zero'></Button>
    <Button onSmash={decreaseByOne} text='minus'></Button>
    
    </div>
  )
}
export default App


import { useState } from 'react'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    console.log('left before', left)
    const updatedLeft = left +1

    setLeft(updatedLeft)
    console.log('left after', left)
    setTotal(updatedLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    console.log('right after', right)
    const updatedRight  = right + 1 
    setRight(updatedRight)
    console.log('right before', right)
    setTotal(left + updatedRight)
  }

  return (
    <div>
      {left}
    
      <Button handleClick={handleLeftClick} text='left'></Button>
      <Button handleClick={handleRightClick} text='right'></Button>
      {right}
      
      <History allClicks={allClicks}></History><p>{total}</p>
    </div>
  )
}
export default App
*/