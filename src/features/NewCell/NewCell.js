import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container, Stack, Form, Button,
} from 'react-bootstrap';
import UserService from '../../services/user.service';
import CharacterCount from '../CharacterCount/CharacterCount';

const NewCell = () => {
  const navigate = useNavigate();
  const [cell, setCell] = useState('');

  const handleCreate = (cell) => {
    if (cell.title) {
      UserService.createCell(cell).then(
        () => {},
        (error) => {
          const noCells = (error.response && error.response.data)
            || error.message
            || error.toString();

          setCell(noCells);
        },
      );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCell({
      ...cell,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreate(cell);
    setCell('');
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
            value={cell.title}
            size="lg"
            placeholder="Add new word"
            onChange={handleChange}
          />
          <Form.Control
            as="textarea"
            name="story"
            value={cell.description}
            placeholder="Add story here"
            onChange={handleChange}
            style={{ height: '200px' }}
          />
          <CharacterCount cell={cell} />
          <Button variant="primary" onClick={handleSubmit}>
            Add
          </Button>
          <Button variant="secondary" onClick={() => navigate('/cells')}>
            Done
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default NewCell;
