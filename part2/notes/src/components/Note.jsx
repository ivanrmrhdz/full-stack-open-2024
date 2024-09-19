const Note = ({note})=>{
    return(

      <li style={ note.important ? {color:'red'} : {color:'black'} }>{note.content}</li>
    )
  }

  export default Note