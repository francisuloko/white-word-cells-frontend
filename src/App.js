import React, { useState } from 'react';
import WordMango from './features/WordMango/WordMango';
import './App.css';
import NewWord from './features/NewWord/NewWord';
import WordList from './features/WordMango/wordMangoAPI';

function App() {
  const [list, setList] = useState(WordList);
  
  const handleNewWord = (word) => {
    setList([...list, word]);
  }

  return (
    <div className="App">
      <WordMango wordList={list} />
      <NewWord addNewWord={handleNewWord} />
    </div>
  );
}

export default App;
