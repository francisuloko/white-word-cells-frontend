import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Container, Stack, Form, Button,
} from 'react-bootstrap';
// import CharacterCount from '../CharacterCount/CharacterCount';
import UserService from '../../services/user.service';

const EditCell = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [cell, setCell] = useState(state);
  const { cells } = useSelector((state) => state.cells);
  const [cellsCopy, setCellsCopy] = useState(cells);

  const handleEdit = (cell) => {
    if (cell.title) {
      UserService.editCell(cell);
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
    handleEdit(cell);
    const updateCells = cellsCopy.map((item) => (item.id === cell.id ? cell : item));
    setCellsCopy(updateCells);
    navigate('/cells');
  };

  const handleDelete = (cell) => {
    UserService.deleteCell(cell);
    const updateCells = cellsCopy.filter((item) => item.id === cell.id);
    setCellsCopy(updateCells);
    navigate('/cells');
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
          <Button variant="primary" onClick={handleSubmit}>
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
