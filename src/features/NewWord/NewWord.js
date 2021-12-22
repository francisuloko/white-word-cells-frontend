import React, { useState } from "react";

const NewWord = (props) => {
  const [word, setWord] = useState({ id: "", word: "", story: "" });
  const required_fields = ["id", "word", "story"];

  const handleChange = (e) => {
    const value = e.target.value;

    setWord({
      ...word,
      id: props.list.length + 1,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    required_fields.forEach(function (field) {
      if (word.hasOwnProperty(field)) {
        if (word[field]) {
          console.log(field + ": " + word[field]);
          props.addNewWord(word);
        } else {
          console.log(field + " exists but is empty");
        }
      }
    });
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
