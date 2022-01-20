import React, { useState, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Container, Stack, Form, Button,
} from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';
import CharacterCount from '../CharacterCount/CharacterCount';
import { editCell, deleteCell } from '../../slices/cells';
import AlertContext from '../Alerts/AlertProvider';

const EditCell = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useContext(AlertContext);
  const location = useLocation();
  const { item } = location.state;
  const [cell, setCell] = useState(item);
  const [charTooLong, setCharTooLong] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCell({
      ...cell,
      [name]: value,
    });
  };

  const handleSubmit = (cell) => {
    if (cell.title) {
      dispatch(editCell(cell)).then(
        alert.success('Update succesful!'),
      );
    } else {
      alert.success('Title can\'t be blank');
    }
    navigate('/cells');
  };

  const handleDelete = (cell) => {
    dispatch(deleteCell(cell)).then(
      alert.success('Delete successful!'),
    );
    navigate('/cells');
  };

  useEffect(() => {
    setCharTooLong(false);
    if (/\s/.test(cell.title)) {
      setCharTooLong(true);
      alert.error('No space allowed');
    }

    if (cell.description.length > 300
      || cell.title === '') {
      setCharTooLong(true);
    }
  }, []);

  return (
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
        <Button disabled={charTooLong} variant="primary" onClick={() => handleSubmit(cell)}>
          Save
        </Button>
      </Stack>
    </Container>
  );
};

export default EditCell;
