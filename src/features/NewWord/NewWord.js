import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Stack, Form, Button } from "react-bootstrap";
import { CharacterCount } from "../CharacterCount/CharacterCount";

const NewWord = (props) => {
  const navigate = useNavigate();
  const [state, setWord] = useState({
    id: "",
    word: "",
    story: "",
  });

  const validateWord = (obj) => {
    if (obj.word) {
      props.addNewWord(state);
    } else {
      console.log("Word can't be blank");
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setWord({
      ...state,
      id: props.list.length + 1,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.story.length <= 300) {
      validateWord(state);
      console.log(state.word + " added");
      setWord({ word: "", story: "" });
    } else {
    }
  };

  return (
    <>
      <Container className="pt-5">
        <Stack
          gap={2}
          className="col-md-6 p-4 mx-auto mt-5 border border-1 rounded shadow"
        >
          <h2>Add New Word</h2>
          <Form.Control
            type="text"
            name="word"
            value={state.word}
            size="lg"
            placeholder="Add new word"
            onChange={handleChange}
          />
          <Form.Control
            as="textarea"
            name="story"
            value={state.story}
            placeholder="Add story here"
            onChange={handleChange}
            style={{ height: "200px" }}
          />
          <CharacterCount cell={state} />
          <Button variant="primary" onClick={handleSubmit}>
            Add
          </Button>
          <Button variant="secondary" onClick={() => navigate("/")}>
            Cancel
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default NewWord;
