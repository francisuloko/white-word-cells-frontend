import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Container, Stack, Form, Button,
} from 'react-bootstrap';
import CharacterCount from '../CharacterCount/CharacterCount';

const EditWord = (props) => {
  const { list, updateWord } = props;
  const navigate = useNavigate();
  const { state } = useLocation();
  const [word, setWord] = useState(state);

  const validateWord = (obj) => {
    if (obj.word) {
      const updatedItem = list.map((item) => (item.id === obj.id ? obj : item));
      updateWord(updatedItem);
      return '';
    }
    return "Word can't be blank";
  };

  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;

    setWord({
      ...word,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateWord(word);
    navigate('/');
  };

  const handleDelete = (id) => {
    const updatedList = list.filter((obj) => obj.id !== id);
    updateWord(updatedList);
    navigate('/');
  };

  return (
    <>
      <Container className="pt-5">
        <Stack gap={2} className="col-md-6 p-4 mx-auto mt-5 border border-1 rounded shadow">
          <h2 className="text-center">Edit Word</h2>
          <Form.Control
            type="text"
            name="word"
            value={word.word}
            onChange={handleChange}
            size="lg"
          />
          <Form.Control
            as="textarea"
            name="story"
            value={word.story}
            onChange={handleChange}
            style={{ height: '200px' }}
          />
          <CharacterCount cell={word} />
          <Button variant="primary" onClick={handleSubmit}>
            Done
          </Button>
          <Button
            type="submit"
            variant="secondary"
            value="Submit"
            onClick={() => handleDelete(word.id)}
          >
            Delete
          </Button>
        </Stack>
      </Container>
    </>
  );
};

EditWord.propTypes = {
  list: PropTypes.isRequired,
  updateWord: PropTypes.func.isRequired,
};

export default EditWord;
