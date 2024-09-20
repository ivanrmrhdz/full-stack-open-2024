import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonsFrom from './components/PersonForm'
import Filter from './components/Filter'
import axios from 'axios'
const App = () => {
  const [persons, setPersons] = useState([]) 

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  
  console.log('render', persons.length, 'notes')


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