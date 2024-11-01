import { useState, useEffect } from "react";
import Persons from "./components/Persons";
import PersonsFrom from "./components/PersonForm";
import Filter from "./components/Filter";

import personsService from "./service/persons";

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    personsService
      .getAll()
      .then((initialPersons) => setPersons(initialPersons));
  }, []);

  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setPhoneNumber] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    //according to documentation in json-server id has to be string type
    const personObject = {
      name: newName,
      number: newPhoneNumber,
      id: (persons.length + 1).toString(),
    };

    const compareAdd = persons.filter(
      (persons) => persons.name === personObject.name
    );

    if (compareAdd.length === 0) {
      personsService
        .create(personObject)
        .then((returnedPersons) => setPersons(persons.concat(returnedPersons)));
    } else {
      // alert(`${newName} is already added to phonebook`);
      if (
        window.confirm(
          `${compareAdd[0].name} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const changedNumber = { ...compareAdd[0], number: newPhoneNumber };
        //console.log(compareAdd[0].id);
        // console.log(changedNumber);

        personsService
          .update(compareAdd[0].id, changedNumber)
          .then((returnedPerson) =>
            setPersons(
              persons.map((person) =>
                person.id !== compareAdd[0].id ? person : returnedPerson
              )
            )
          );
      }
    }
    setNewName("");
    setPhoneNumber("");
  };

  const handleNewNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNewPhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const personsToShow = searchInput
    ? persons.filter((persons) =>
        persons.name.toLowerCase().includes(searchInput.toLowerCase())
      )
    : persons;

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
    console.log(personsToShow);
  };

  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name} ?`)) {
      personsService.deletePerson(id);
      setPersons(persons.filter((n) => n.id !== id));
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filterValue={searchInput} filterOnChange={handleSearchInput} />

      <h2>add new</h2>

      <PersonsFrom
        formOnSubmit={addPerson}
        nameValue={newName}
        nameOnChange={handleNewNameChange}
        numberValue={newPhoneNumber}
        numberOnChange={handleNewPhoneNumberChange}
      />

      <h2>Numbers</h2>
      <ul>
        {personsToShow.map((persons) => (
          <Persons
            key={persons.id}
            persons={persons}
            deletePerson={() => deletePerson(persons.id, persons.name)}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
