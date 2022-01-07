import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Container, Stack, Form, Button,
} from 'react-bootstrap';
import Cells from '../Cells/Cells';
// import CharacterCount from '../CharacterCount/CharacterCount';
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
    navigate(<Cells />);
  };

  return (
    <>
      <Container>
        <Stack
          gap={2}
          className="col-md-5 p-3 pb-4 mx-auto mt-3 border border-1 rounded shadow"
        >
          <h2 className="text-center">Edit Word</h2>
          <Form.Control
            type="text"
            name="title"
            value={cell.title}
            onChange={handleChange}
            size="lg"
          />
          <Form.Control
            as="textarea"
            name="description"
            value={cell.description}
            onChange={handleChange}
            style={{ height: '200px' }}
          />
          {/* <CharacterCount cell={cell} /> */}
          <Button variant="primary" onClick={() => handleSubmit()}>
            Done
          </Button>
          <Button
            type="submit"
            variant="secondary"
            value="Submit"
            onClick={() => handleDelete(cell)}
          >
            Delete
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default EditCell;
