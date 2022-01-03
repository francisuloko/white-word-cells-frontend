import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Container, Stack, Form, Button,
} from 'react-bootstrap';
import CharacterCount from '../CharacterCount/CharacterCount';
import UserService from '../../services/user.service';

const EditCell = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [cell, setCell] = useState(state);

  const handleEdit = (cell) => {
    if (cell.title) {
      UserService.editCell(cell).then(
        () => {

        },
        (error) => {
          const noCells = (error.response && error.response.data)
            || error.message
            || error.toString();

          setCell(noCells);
        },
      );
    }

    return "title can't be blank";
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
    handleEdit(cell);
    navigate('/cells');
  };

  const handleDelete = (cell) => {
    UserService.deleteCell(cell).then(
      (response) => response.data,
      (error) => {
        const noCells = (error.response && error.response.data)
          || error.message
          || error.toString();

        return noCells;
      },
    );
    navigate('/cell');
  };

  return (
    <>
      <Container className="pt-5">
        <Stack
          gap={2}
          className="col-md-6 p-4 mx-auto mt-5 border border-1 rounded shadow"
        >
          <h2 className="text-center">Edit Word</h2>
          <Form.Control
            type="text"
            name="word"
            value={cell.title}
            onChange={handleChange}
            size="lg"
          />
          <Form.Control
            as="textarea"
            name="story"
            value={cell.description}
            onChange={handleChange}
            style={{ height: '200px' }}
          />
          <CharacterCount cell={cell} />
          <Button variant="primary" onClick={handleSubmit}>
            Done
          </Button>
          <Button
            type="submit"
            variant="secondary"
            value="Submit"
            onClick={() => handleDelete(cell.id)}
          >
            Delete
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default EditCell;
