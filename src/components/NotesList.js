import Note from "./Note";
import AddNote from "./AddNote";
const NoteList = ({ notes, handleAddNote, deleteNote }) => {

    return (
        <div className="notes-list">
            {notes.map((note) => (
                <Note key={note.id} 
                          {...note} 
                      deleteNote={deleteNote}/>  
            ))}
             <AddNote handleAddNote={handleAddNote} />
        </div>
    )
}
export default NoteList;