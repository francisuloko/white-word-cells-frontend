import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Stack, Form, Button } from "react-bootstrap";

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
    console.log(word.word + " added");
    setWord({ id: "", word: "", story: "" });
  };

  return (
    <>
      <Container className="py-4">
        <Stack gap={2} className="col-md-5 mx-auto">
          <h2>Add New Word</h2>
          <Form.Control
            type="text"
            name="word"
            value={word.word}
            size="lg"
            placeholder="Add new word"
            onChange={handleChange}
          />
          <Form.Control
            as="textarea"
            name="story"
            value={word.story}
            placeholder="Add story here"
            onChange={handleChange}
            style={{ height: "200px" }}
          />
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
