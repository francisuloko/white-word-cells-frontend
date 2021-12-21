import React, { useState } from "react";
import words from "../WordMango/wordMangoAPI";

const NewWord = (props) => {
  const [word, setWord] = useState({
    id: '',
    word: '',
    story: ''
  });

  const handleChange = (e) => {
    const value = e.target.value;

    setWord({
      ...word,
      id: words.length + 1,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNewWord(word);
  };

  return (
    <div>
      <h1>Add New Word</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="word"
          value={word.word}
          placeholder="Add new word"
          onChange={handleChange}
        />
        <br />
        <textarea
          name="story"
          value={word.story}
          placeholder="What's your story"
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default NewWord;
