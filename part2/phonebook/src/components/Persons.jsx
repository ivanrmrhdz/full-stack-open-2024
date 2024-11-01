const Persons = ({ persons, deletePerson }) => {
  return (
    <li>
      {" "}
      {persons.name} {persons.number + " "}
      <button type="checkbox" onClick={deletePerson}>
        delete
      </button>{" "}
    </li>
  );
};

export default Persons;
