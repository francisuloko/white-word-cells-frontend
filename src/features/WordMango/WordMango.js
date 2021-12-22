import React from "react";
import { PencilSquare, Trash } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

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
      <Button
        type="submit"
        value="Submit"
        variant="white"
        onClick={() => handleEdit(obj)}
        handleDelete={handleDelete}
      >
        <PencilSquare className="fs-4" />
      </Button>
      <Button
        type="submit"
        variant="white"
        value="Submit"
        onClick={() => handleDelete(obj.id)}
      >
        <Trash className="fs-4" />
      </Button>
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
