import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const EditWord = (props) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [word, setWord] = useState(state);

  const validateWord = (obj) => {
    if (obj.word) {
      const updatedItem = props.list.map((item) => {
        return item.id === obj.id ? obj : item;
      });
      props.updateWord(updatedItem);
    } else {
      console.log("Word can't be blank");
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setWord({
      ...word,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateWord(word);
    navigate("/");
  };

  return (
    <div>
      <h1>Edit Word</h1>
      <div>
        <input
          type="text"
          name="word"
          value={word.word}
          placeholder="Edit word"
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
          Update
        </button>
        <button type="submit" value="Back" onClick={() => navigate("/")}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditWord;
