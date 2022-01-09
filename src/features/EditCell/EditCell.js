import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Container, Stack, Form, Button,
} from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';
import CharacterCount from '../CharacterCount/CharacterCount';
import UserService from '../../services/user.service';

const EditCell = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [cell, setCell] = useState(state);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCell({
      ...cell,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (cell.title) {
      UserService.editCell(cell);
      navigate('/cells');
    }
  };

  const handleDelete = (cell) => {
    UserService.deleteCell(cell);
    navigate('/cells');
  };

  return (
    <>
      <Container>
        <Stack
          gap={2}
          className="col-md-6 col-lg-4 p-3 pb-4 mx-auto mt-3 border border-1 rounded shadow position-relative"
        >
          <h2 className="text-center">Edit Word</h2>
          <div className="d-flex align-items-center">
            <Form.Control
              type="text"
              name="title"
              value={cell.title}
              onChange={handleChange}
              size="lg"
            />
            <Trash
              className="fs-3 mx-2"
              onClick={() => handleDelete(cell)}
            />
          </div>
          <CharacterCount desc={cell.description} />
          <Form.Control
            as="textarea"
            name="description"
            value={cell.description}
            onChange={handleChange}
            style={{ height: '200px' }}
          />
          <Button variant="primary" onClick={() => handleSubmit()}>
            Done
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default EditCell;
