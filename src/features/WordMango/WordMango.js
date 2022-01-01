import React from 'react';
import PropTypes from 'prop-types';
import { PencilSquare } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import CreateButton from '../CreateButton/CreateButton';
import './WordMango.css';

const WordMango = (props) => {
  const { wordList } = props;
  const navigate = useNavigate();

  const handleEdit = (obj) => {
    navigate('/edit', { state: obj });
  };

  const list = wordList.map((obj) => (
    <Carousel.Item key={obj.id} className="module mid">
      <Carousel.Caption className="py-0">
        <button
          type="button"
          onClick={() => handleEdit(obj)}
          className="d-flex align-items-center border border-0 bg-transparent text-white"
        >
          <span className="fs-1 py-3 m-0">{obj.word}</span>
          <PencilSquare className=" mx-3 fs-6" />
        </button>
        <p className="px-3 col col-lg-8">{obj.story}</p>
      </Carousel.Caption>
    </Carousel.Item>
  ));

  return (
    <>
      {list.length > 0 ? (
        <Carousel interval={5000}>{list}</Carousel>
      ) : (
        <Carousel>
          <Carousel.Item className="module mid">
            <Carousel.Caption className="col-6">
              <h2 className="d-flex align-items-center p-3 m-0">
                Add a new word.
              </h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      )}
      <CreateButton />
    </>
  );
};

WordMango.propTypes = {
  wordList: PropTypes.string.isRequired,
};

export default WordMango;
