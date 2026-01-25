
import { useState } from 'react';
import './App.css';
import Task from './components/Task';

function App() {

  const [note, setNote] = useState([])
  const [curNote, setCurNote] = useState("")

  function handleSubmit() {
    const newNoteArray = [...note, curNote]
    setNote(newNoteArray)
    setCurNote("")
  }

  function handleDelete(indexToDelete) {
    const updatedNoteArray = note.filter((noteItem, index) => index !== indexToDelete)
    setNote(updatedNoteArray)
  }

  return (
    <div id='main-container'>

      <h1>Todo List Webapp</h1>

      <div className="add-task-container">
        <input id='input-task-box' type="text" onChange={(e) => setCurNote(e.target.value)} />
        <button id='add-task-button' onClick={handleSubmit} disabled={curNote.trim() === ""} >Add task</button>
      </div>

      <div className="display-task-container">
        <ul> {note.map((singleNote, index) => {
          return <li key={index} > <Task note={singleNote} onDelete={() => (handleDelete(index))} /> </li>
        })} </ul>
      </div>

    </div>
  );
}

export default App;
