import { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
//  const { notes } = props

const [notes, setNotes] = useState(props.notes)
const [newNote, setNewNote] = useState('a new note...')
const [showAll, setShowAll] = useState(true)

const addNote = (event) => {
  event.preventDefault()
  //console.log('button clicked', event.target)

  const noteObject = {
    content: newNote, 
    important: Math.random() < 0.5,
    id: notes.length +1, 
  }
  setNotes(notes.concat(noteObject))
  setNewNote('')
}

const handleNoteChange = (event) => {
 // console.log(event.target.value)
  setNewNote(event.target.value)
}

const notesToShow = showAll ? notes : notes.filter(notes => notes.important)

return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={()=> setShowAll(!showAll)}>
          show {showAll? 'important':'all'}
        </button>
      </div>
      <ul>

        {notesToShow.map(notes => 
        <Note key={notes.id} note={notes}/>
          
        
        )}
      </ul>
  
  <form onSubmit={addNote}>
        <input 
        value={newNote} 
        onChange={handleNoteChange}
        />
        <button type='submit'>save</button>
  </form>
    </div>
  )
}

export default App