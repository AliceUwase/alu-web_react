import logo from './h-logo.jpg';
import { getFullYear, getFooterCopy } from "./utils.js";
import React from 'react';
import './Notifications.css';
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
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <button type="submit">OK</button>
        </form>
      </main>
      <footer className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(false)}.
        </p>

      </footer>
    </div>
  );
}

export default App;
