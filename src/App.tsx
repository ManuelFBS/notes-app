import './App.css';
import React, { useState } from 'react';

const App = () => {
  return (
    <div className='app-container'>
      <form className='note-form'>
        <input placeholder='title' required></input>
        <textarea placeholder='content' rows={10} required></textarea>

        <button type='submit'>Add Note</button>
      </form>
      <div className='note-grid'>
        <div className='note-item'>
          <div className='notes-header'>
            <button>x</button>
          </div>
          <h2>Note Title</h2>
          <p>Note Content</p>
        </div>
      </div>
    </div>
  );
};

export default App;
