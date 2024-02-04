import './App.css';

const App = () => {
  return (
    <div className='app-container'>
      <form className='note-form'>
        <input placeholder='Title' required />
        <textarea placeholder='Content' rows={10} required />

        <button type='submit'>Agregar Nota</button>
      </form>
      <div className='notes-grid'>
        <div className='note-item'>
          <div className='notes-header'>
            <button>x</button>
          </div>
          <h2>Título de la Nota</h2>
          <p>Note content...</p>
        </div>
      </div>
    </div>
  );
};

export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
