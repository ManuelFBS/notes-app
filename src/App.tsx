import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Test #1',
      content: 'This is a test... #1'
    },
    {
      id: 2,
      title: 'Test #2',
      content: 'This is a test... #2'
    },
    {
      id: 3,
      title: 'Test #3',
      content: 'This is a test... #3'
    },
    {
      id: 4,
      title: 'Test #4',
      content: 'This is a test... #4'
    },
    {
      id: 5,
      title: 'Test #5',
      content: 'This is a test... #5'
    },
    {
      id: 6,
      title: 'Test #6',
      content: 'This is a test... #6'
    }
  ]);

  return (
    <div className='app-container'>
      <form className='note-form'>
        <input placeholder='title' required></input>
        <textarea placeholder='content' rows={10} required></textarea>

        <button type='submit'>Add Note</button>
      </form>
      <div className='note-grid'>
        {notes.map((note) => (
          <div className='note-item'>
            <div className='notes-header'>
              <button>x</button>
            </div>
            <h2>Note Title</h2>
            <p>Note Content</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
