
const Header =(props) =><h1>{props.course.name}</h1>

const Content = (props) =>{
  const parts = props.course.parts 
  const total = parts.reduce((sum , parts) => {
    return sum + parts.exercises
  }, 0)

  console.log(props.course.parts, 'total exercises = ' + total)
 
  return(
    <div>
       {parts.map( parts => <p key={parts.id}>{parts.name} {parts.exercises}</p>)}
       <b>total of {total} excercises</b>
    </div>
  )
}



const Course = (props) => {
  console.log(props.course.id)
  return(
    <div>
      <Header course = {props.course}/>
      <Content course = {props.course}/> 
    
      </div>
  )

}

export default Course