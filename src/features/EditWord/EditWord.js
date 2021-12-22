import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Stack, Form, Button } from "react-bootstrap";

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
    <>
      <Container>
        <h1>Edit Word</h1>
        <Stack gap={2} className="col-md-5 mx-auto">
          <Form.Control
            type="text"
            name="word"
            value={word.word}
            onChange={handleChange}
            value={word.word}
            size="lg"
          />
          <Form.Control
            as="textarea"
            name="story"
            value={word.story}
            onChange={handleChange}
            style={{ height: "100px" }}
          />
          <Button variant="primary" onClick={handleSubmit}>
            Save
          </Button>
          <Button variant="secondary" onClick={() => navigate("/")}>
            Cancel
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default EditWord;
