import './App.css';
import { useState } from 'react';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Test Note 1',
      content: 'Anything you want to say 1...'
    },
    {
      id: 2,
      title: 'Test Note 2',
      content: 'Anything you want to say 2...'
    },
    {
      id: 3,
      title: 'Test Note 3',
      content: 'Anything you want to say 3...'
    },
    {
      id: 4,
      title: 'Test Note 4',
      content: 'Anything you want to say 4...'
    },
    {
      id: 5,
      title: 'Test Note 5',
      content: 'Anything you want to say 5...'
    },
    {
      id: 6,
      title: 'Test Note 6',
      content: 'Anything you want to say 6...'
    }
  ]);

  return (
    <div className='app-container'>
      <form className='note-form'>
        <input placeholder='Title' required />
        <textarea placeholder='Content' rows={10} required />

        <button type='submit'>Agregar Nota</button>
      </form>
      <div className='notes-grid'>
        {notes.map((note) => (
          <div className='note-item'>
            <div className='notes-header'>
              <button>x</button>
            </div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
