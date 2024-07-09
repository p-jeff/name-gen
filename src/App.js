import React, { useState } from 'react';
import './App.css';

function App() {
  // Define the three arrays
  const firstArray = [
    "Administrative Assistant",
    "Human Resources Manager",
    "Consultant",
    "Secretary",
    "Dentist",
    "Call Center Employee",
    "Archaeologist",
    "Soldier",
    "Nymph",
    "Witch/Wizard",
    "Devil",
    "Dwarf",
    "Rumpelstiltskin",
    "Fairy",
    "Ball Lightning",
    "King/Queen",
    "Prophet",
    "Magician",
    "Shaman"
  ];
  const secondArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const thirdArray = ['Rain', 'Sunshine', 'Clouds', 'Storm', 'Fog'];

  // State to hold the generated words
  const [generatedWord, setGeneratedWord] = useState('');
  // State to hold saved words
  const [savedWords, setSavedWords] = useState([]);

  // Function to generate a new word
  const generateWord = () => {
    const word1 = firstArray[Math.floor(Math.random() * firstArray.length)];
    const word2 = secondArray[Math.floor(Math.random() * secondArray.length)];
    const word3 = thirdArray[Math.floor(Math.random() * thirdArray.length)];
    setGeneratedWord(`${word1} ${word2} ${word3}`);
  };

  // Function to save the current word
  const saveWord = () => {
    setSavedWords([...savedWords, generatedWord]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>
       {generatedWord}
        </h2>
        <button onClick={generateWord}>Generate New Word</button>
        <button onClick={saveWord} disabled={!generatedWord}>Save Word</button>
       <div>
  <ul className="saved-words-list">
    {savedWords.map((word, index) => (
      <li key={index}>{word}</li>
    ))}
  </ul>
</div>
      </header>
    </div>
  );
}

export default App;