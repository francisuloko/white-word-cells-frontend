import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewWord = (props) => {
  const navigate = useNavigate();
  const [word, setWord] = useState({ id: "", word: "", story: "" });

  const validateWord = (obj) => {
    if (obj.word) {
      props.addNewWord(word);
    } else {
      console.log("Word can't be blank");
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
    console.log(word.word + ' added');
    setWord({ id: "", word: "", story: "" });
  };

  return (
    <div>
      <h1>Add New Word</h1>
      <div>
        <input
          type="text"
          name="word"
          value={word.word}
          placeholder="Add new word"
          onChange={handleChange}
        />
      </div>
      <div>
        <textarea
          name="story"
          value={word.story}
          placeholder="What's your story"
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit" value="Submit" onClick={handleSubmit}>
          Add
        </button>
        <button type="submit" value="Back" onClick={() => navigate("/")}>
          Back
        </button>
      </div>
    </div>
  );
};

export default NewWord;
