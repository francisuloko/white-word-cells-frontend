import React from "react";
import { BoxArrowUpRight } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { Button, Carousel } from "react-bootstrap";

const WordMango = (props) => {
  const navigate = useNavigate();

  const handleEdit = (obj) => {
    navigate("/edit", { state: obj });
  };

  const wordList = props.wordList.map((obj) => (
    <Carousel.Item>
      <img
        className="w-100"
        src="https://source.unsplash.com/random/300x200"
        alt="First slide"
      />
      <Carousel.Caption className="py-0">
        <h2>
          <Button
            className="d-flex align-top"
            type="submit"
            value="Submit"
            variant="white"
            onClick={() => handleEdit(obj)}
            style={{ fontSize: "30px", color: "#fff"}}
          >
            <span>{obj.word}</span>
            <BoxArrowUpRight className="m-3 fs-4" />
          </Button>
        </h2>
        <p>{obj.story}</p>
      </Carousel.Caption>
    </Carousel.Item>
  ));

  return (
    <div>
      <Carousel className="h-100">
        {wordList.length > 0 ? wordList : "Add a new word"}
      </Carousel>
    </div>
  );
};

export default WordMango;
