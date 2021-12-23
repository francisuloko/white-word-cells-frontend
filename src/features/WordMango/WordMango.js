import React from "react";
import { BoxArrowUpRight } from "react-bootstrap-icons";
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
      <Carousel.Caption>
        <h2
          onClick={() => handleEdit(obj)}
          className="d-flex align-items-center edit-btn"
        >
          <span className="fs-1">{obj.word}</span>
          <BoxArrowUpRight className=" mx-3 fs-6" />
        </h2>
        <pre>{obj.story}</pre>
      </Carousel.Caption>
    </Carousel.Item>
  ));

  return (
    <>
      {wordList.length > 0 ? (
        <Carousel>{wordList}</Carousel>
      ) : (
        <Carousel>
          <Carousel.Item className="module mid">
            <Carousel.Caption>
              <h2 className="d-flex align-items-center">Add a new word.</h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      )}
    </>
  );
};

export default WordMango;
