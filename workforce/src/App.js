import './App.css';
import React, { useState, useEffect } from 'react';
function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <h1>Characters</h1>
      <ul>
        {characters.map((character, index) => (
          <li key={index}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;