import React from "react";
import { BoxArrowUpRight } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { Container, Carousel } from "react-bootstrap";
import "./WordMango.css";

const WordMango = (props) => {
  const navigate = useNavigate();

  const handleEdit = (obj) => {
    navigate("/edit", { state: obj });
  };

  const wordList = props.wordList.map((obj) => (
    <Carousel.Item style={{ height: "", backgroundColor: "#000" }}>
      <img
        className="w-100"
        src="https://picsum.photos/200"
        alt="First slide"
      />
      <Carousel.Caption>
        <div
          onClick={() => handleEdit(obj)}
          className="d-flex align-items-center"
        >
          <span className="fs-1">{obj.word}</span>
          <BoxArrowUpRight className=" mx-3 fs-5" />
        </div>
        <pre className="story">{obj.story}</pre>
      </Carousel.Caption>
    </Carousel.Item>
  ));

  return (
    <Container className="">
      {wordList.length > 0 ? (
        <Carousel>{wordList}</Carousel>
      ) : (
        <h2 className="">Add a new word</h2>
      )}
    </Container>
  );
};

export default WordMango;
