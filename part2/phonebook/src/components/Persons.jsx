
const Persons = (props) => {

  const persons = props.personsToShow
    return(
        <ul>
        {  
        persons.map( 
          persons=> <li key={persons.id}>{persons.name} {persons.number}</li>
        )
         }

    </ul>
    )

}

export default Persons