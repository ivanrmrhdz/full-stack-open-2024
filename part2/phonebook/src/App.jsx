import { useState } from 'react'
import Persons from './components/Persons'
import PersonsFrom from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setPhoneNumber] = useState('')
  const [searchInput, setSearchInput] = useState('')

  const addPerson = (event) =>{
    event.preventDefault()
    const personObject = {
      name: newName, 
      number: newPhoneNumber, 
      id: persons.length+1,
    }
    
    if(persons.filter(persons => persons.name === personObject.name).length === 0){
    setPersons(persons.concat(personObject))
   }else{
    alert(`${newName} is already added to phonebook`)
   }
    setNewName('')
   	setPhoneNumber('')
  }


  const handleNewNameChange = (event)=>{
    setNewName(event.target.value)
  }
  const handleNewPhoneNumberChange = (event) =>{
    setPhoneNumber(event.target.value)
  }


  const personsToShow = searchInput ? 
  persons.filter((persons) => persons.name.toLowerCase().includes(searchInput.toLowerCase()))
  : persons

const handleSearchInput = (event) =>{
  setSearchInput(event.target.value)
  console.log(personsToShow)
}


  return (
    <div>
      <h2>Phonebook</h2>
       
        <Filter filterValue={searchInput} filterOnChange={handleSearchInput} />

      <h2>add new</h2>

        <PersonsFrom 
           formOnSubmit={addPerson} 
           nameValue ={newName} nameOnChange = {handleNewNameChange}
           numberValue={newPhoneNumber} numberOnChange={handleNewPhoneNumberChange}
        />

      <h2>Numbers</h2>
       <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App