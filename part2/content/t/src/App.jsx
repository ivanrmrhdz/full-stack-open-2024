
import Note from './components/Note'

const App = (props) => {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(notes => 
        <Note key={notes.id} note={notes}/>
          
        
        )}
      </ul>
  
    </div>
  )
}

export default App