import logo from './h-logo.jpg';

import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School Dashboard</h1>
      </header>

      <main className="App-body">
        <p>
          Login to access the full Dashboard.
        </p>
      </main>
      <footer className="App-footer">
        <p>
          Copyright 2020 - Holberton School. 
        </p>
      </footer>
    </div>
  );
}

export default App;
