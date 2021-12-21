import React from "react";

const WordMango = (props) => {
  const wordList = props.wordList.map((obj) => (
    <li key={obj.id}>
      <span>{obj.word}: </span>
      <span>{obj.story}</span>
    </li>
  ));

  return (
    <div>
      <h1>Word Mango</h1>
      <ul>{wordList}</ul>
    </div>
  );
};

export default WordMango;
