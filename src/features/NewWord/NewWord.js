import React, { useState } from "react";

const NewWord = (props) => {
  const [word, setWord] = useState({ id: "", word: "", story: "" });
  const validateWord = (obj) => {
    if (obj.word) {
      props.addNewWord(word);
    } else {
      console.log('Word can\'t be blank');
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setWord({
      ...word,
      id: props.list.length + 1,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateWord(word);
    setWord({ id: "", word: "", story: "" });
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
