import React from "react";
import { useNavigate } from "react-router-dom";

const WordMango = (props) => {
  const navigate = useNavigate();

  const handleEdit = (obj) => {
    navigate("/edit", { state: obj });
  };

  const handleDelete = (id) => {
    const updatedList = props.wordList.filter((obj) => obj.id !== id);
    props.updateList(updatedList);
    console.log("You deleted a word");
  };

  const wordList = props.wordList.map((obj) => (
    <li key={obj.id}>
      <span>{obj.word}: </span>
      <span>{obj.story}</span>
      <button
        type="submit"
        value="Submit"
        onClick={() => handleEdit(obj)}
        handleDelete={handleDelete}
      >
        Edit
      </button>
      <button type="submit" value="Submit" onClick={() => handleDelete(obj.id)}>
        Delete
      </button>
    </li>
  ));

  return (
    <div>
      <h1>Word List</h1>
      <ul>{wordList.length > 0 ? wordList : "Add a new word"}</ul>
    </div>
  );
};

export default WordMango;
