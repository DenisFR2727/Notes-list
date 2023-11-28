import { useState } from 'react';
import NoteList from './components/NotesList';
import { nanoid } from 'nanoid'
import './App.css';
import Search from './components/Search';
import Header from './components/Header';

const App  = () => {
  const [notes, setNotes] = useState([
    { id: nanoid(),
      text: "This is my first note!",
      date: "15/04/2021"
    },
    { id: nanoid(),
      text: "This is my first note!",
      date: "22/04/2023"
    },
    { id: nanoid(),
      text: "This is my first note!",
      date: "23/11/2023"
    },
    { id: nanoid(),
      text: "This is my first note!",
      date: "24/11/2023"
    }
  ])
const [serachText, setSearchtext] = useState("");
const [darkMode, setDarkMode] = useState(false);

const addNote = (text) => {
     const date = new Date();
     const newNote = {
           id: nanoid(),
           text: text,
           date: date.toLocaleDateString()
     };
     setNotes((prevNote) => [...prevNote, newNote]);
}
const deleteNote = (id) => {
     const deleteNote = notes.filter((note) => note.id !== id);
     setNotes(deleteNote);
}

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
        <div className="container">
            <Header  handleToogleDarkMode={setDarkMode}/>
            <Search handleSearchNote={setSearchtext}/>
            <NoteList notes={notes.filter((note) => note.text.toLowerCase().includes(serachText))} 
                      handleAddNote={addNote} 
                      deleteNote={deleteNote}/>
        </div>
    </div>
  
  );
}
export default App;
