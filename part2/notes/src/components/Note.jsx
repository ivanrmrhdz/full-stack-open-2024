const Note = ({ note, toggleImportance }) => {
  const label = note.important ? "make not important" : "make important";

  return (
    <li style={note.important ? { color: "red" } : { color: "black" }}>
      {note.content + " "}
      <button type="checkbox" onClick={toggleImportance}>
        {label}
      </button>
    </li>
  );
};

export default Note;
