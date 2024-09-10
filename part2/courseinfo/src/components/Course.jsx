
const Header =(props) =><h1>{props.course.name}</h1>


const Part = (props) =>{
    
    return (<p>{props.name} {props.excercises} </p>)
}

const Total = (props) =>{
    const parts = props.course.parts 
    const total = parts.reduce((sum , parts) => {
      return sum + parts.exercises
    }, 0)

    console.log(props.course.parts, 'total exercises = ' + total)

    return <b>total of {total} excercises</b>
}


const Content = (props) =>{
  
  const parts = props.course.parts 
  return(
    <div>
       {parts.map( parts => <Part key={parts.id} name ={parts.name} excercises={parts.excercises} />)}
    </div>
  )
}



const Course = (props) => {
  console.log(props.course.id)
  return(
    <div>
      <Header course = {props.course}/>
      <Content course = {props.course}/> 
      <Total course = {props.course}/>
      </div>
  )

}

export default Course