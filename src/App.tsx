import './App.css';
import React, { useState } from 'react';

type Note = {
  id: number;
  title: string;
  content: string;
};

const App = () => {
  const [notes, setNotes] = useState<Note[]>([
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

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('title: ', title);
    console.log('content: ', content);
  };

  return (
    <div className='app-container'>
      <form className='note-form' onSubmit={(event) => handleSubmit(event)}>
        <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder='Title' required></input>
        <textarea value={content} onChange={(event) => setContent(event.target.value)} placeholder='Content' rows={10} required></textarea>

        <button type='submit'>Add Note</button>
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
