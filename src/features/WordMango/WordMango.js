import React from "react";
import CreateButton from "../CreateButton/CreateButton";
import { PencilSquare } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import "./WordMango.css";

const WordMango = (props) => {
  const navigate = useNavigate();

  const handleEdit = (obj) => {
    navigate("/edit", { state: obj });
  };

  const wordList = props.wordList.map((obj) => (
    <Carousel.Item className="module mid">
      <Carousel.Caption className="py-0">
        <h2
          onClick={() => handleEdit(obj)}
          className="d-flex align-items-center edit-btn"
        >
          <span className="fs-1 py-3 m-0">{obj.word}</span>
          <PencilSquare className=" mx-3 fs-6" />
        </h2>
        <p className="px-3 col col-lg-8">{obj.story}</p>
      </Carousel.Caption>
    </Carousel.Item>
  ));

  return (
    <>
      {wordList.length > 0 ? (
        <Carousel interval={5000}>{wordList}</Carousel>
      ) : (
        <Carousel>
          <Carousel.Item className="module mid">
            <Carousel.Caption className="col-6">
              <h2 className="d-flex align-items-center p-3 m-0">Add a new word.</h2>
              <p>Word Mango helps you stay motivated throughout the day.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      )}
      <CreateButton />
    </>
  );
};

export default WordMango;
