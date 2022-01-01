import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Container, Stack, Form, Button } from "react-bootstrap";
import CharacterCount from "../CharacterCount/CharacterCount";
import UserService from '../../services/user.service';

const EditCell = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [cell, setCell] = useState(state);

  const validateCell = (cell) => {
    if (cell.title) {
      UserService.editCell(cell.id).then(
        (response) => {
          setCells(response.data);
        },
        (error) => {
          const noCells =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();

          setCells(noCells);
        }
      );
      updateWord(updatedItem); // updating global state
      return "";
    }
    return "title can't be blank";
  };

  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;

    setCell({
      ...cell,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateCell(cell);
    navigate("/home");
  };

  const handleDelete = (id) => {
    UserService.deleteCell(cell.id).then(
      (response) => {
        return response.data;
      },
      (error) => {
        const noCells =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        return noCells;
      }
    );
    updateWord(updatedList); // updating global state
    navigate("/home");
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
            style={{ height: "200px" }}
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
