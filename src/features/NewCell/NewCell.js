import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container, Stack, Form, Button,
} from 'react-bootstrap';
import UserService from '../../services/user.service';
import CharacterCount from '../CharacterCount/CharacterCount';

const NewCell = () => {
  const navigate = useNavigate();
  const [cell, setCell] = useState({ title: '', description: '' });

  const handleCreate = (cell) => {
    if (cell.title) {
      UserService.createCell(cell);
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
    setCell({ title: '', description: '' });
  };

  return (
    <>
      <Container>
        <Stack
          gap={2}
          className="col-md-5 p-3 pb-4 mx-auto mt-3 border border-1 rounded shadow"
        >
          <h2>Add a new word</h2>
          <Form.Control
            type="text"
            name="title"
            value={cell.title}
            size="lg"
            placeholder="Add new word"
            onChange={handleChange}
          />
          <Form.Control
            as="textarea"
            name="description"
            value={cell.description}
            placeholder="Add story here"
            onChange={handleChange}
            style={{ height: '200px' }}
          />
          <CharacterCount desc={cell.description} />
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
