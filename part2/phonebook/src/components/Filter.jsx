const Filter =(props) =>{

    return(
        <div>
        filter shown whit <input 
        value={props.filterValue}
        onChange={props.filterOnChange}
        />
    </div>

    )
}

export default Filter