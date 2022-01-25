import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Carousel } from 'react-bootstrap';
import { getInstructions } from '../../slices/how-it-works';

const Instructions = () => {
  const { instructions } = useSelector((state) => state.instructions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInstructions());
  }, []);

  const instructionsCollection = instructions.map((instruction) => (
    <Carousel.Item key={instruction.id} className="h-100">
      <Carousel.Caption className="py-0">
        <button
          type="button"
          className="d-flex align-items-center border border-0 bg-transparent text-white"
        >
          <span className="fs-1 py-3 m-0 text-capitalize">{instruction.title}</span>
        </button>
        <p className="px-3 col col-lg-5" style={{ fontWeight: 'light' }}>{instruction.description}</p>
      </Carousel.Caption>
    </Carousel.Item>
  ));

  return (
    <div className="module mid h-100">
      <Carousel interval={7000} className="h-100">{instructionsCollection}</Carousel>
    </div>
  );
};

export default Instructions;
