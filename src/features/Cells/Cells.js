import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PencilSquare } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import CreateButton from '../CreateButton/CreateButton';
import { getCells } from '../../slices/cells';
import './Cells.css';

const Cells = () => {
  const { cells } = useSelector((state) => state.cells);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCells());
  }, []);

  const cellsCollection = cells.map((cell) => (
    <Carousel.Item key={cell.id} className="h-100">
      <Carousel.Caption className="py-0">
        <Link
          to="/edit"
          state={{ item: cell }}
          className="d-flex align-items-center border border-0 bg-transparent text-white text-decoration-none"
        >
          <span className="fs-1 py-3 m-0 text-lowercase text-capitalize">{cell.title}</span>
          <PencilSquare className=" mx-3 fs-6" />
        </Link>
        <p className="px-3 col col-lg-6 font-weight-light">{cell.description}</p>
      </Carousel.Caption>
    </Carousel.Item>
  ));

  return (
    <div className="module mid h-100">
      {cellsCollection.length > 0 ? (
        <Carousel interval={7000} className="h-100">{cellsCollection}</Carousel>
      ) : (
        <Carousel className="h-100">
          <Carousel.Item className="h-100">
            <Carousel.Caption className="col-6">
              <h2 className="d-flex align-items-center p-3 m-0">
                Create Word
              </h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      )}
      <CreateButton />
    </div>
  );
};

export default Cells;
