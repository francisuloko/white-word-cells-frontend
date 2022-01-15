import React, { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Container, Stack, Form, Button,
} from 'react-bootstrap';
import CharacterCount from '../CharacterCount/CharacterCount';
import AlertContext from '../Alerts/AlertProvider';
import { createCell } from '../../slices/cells';

const NewCell = () => {
  const dispatch = useDispatch();
  const alert = useContext(AlertContext);

  const navigate = useNavigate();
  const [cell, setCell] = useState({ title: '', description: '' });

  const handleCreate = (cell) => {
    if (cell.title) {
      dispatch(createCell(cell)).then(
        alert.success('Create successful!'),
      );
    } else {
      alert.success('Invalid word');
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
          className="col-md-5 col-lg-4 text-center p-3 pb-4 mx-auto mt-3 border border-1 rounded shadow"
        >
          <h2>Create word</h2>
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
            Save
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
