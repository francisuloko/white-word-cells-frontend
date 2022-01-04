import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PencilSquare } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import CreateButton from '../CreateButton/CreateButton';
import { getCells } from '../../slices/cells';
import './Cells.css';

const Cells = () => {
  const { cells } = useSelector((state) => state.cells);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCells());
  }, [dispatch, cells]);

  const handleEdit = (cell) => {
    navigate('/edit', { state: cell });
  };

  const cellsCollection = cells.map((cell) => (
    <Carousel.Item key={cell.id} className="h-100">
      <Carousel.Caption className="py-0">
        <button
          type="button"
          onClick={() => handleEdit(cell)}
          className="d-flex align-items-center border border-0 bg-transparent text-white"
        >
          <span className="fs-1 py-3 m-0">{cell.title}</span>
          <PencilSquare className=" mx-3 fs-6" />
        </button>
        <p className="px-3 col col-lg-8">{cell.description}</p>
      </Carousel.Caption>
    </Carousel.Item>
  ));

  return (
    <div className="module mid h-100">
      {cellsCollection.length > 0 ? (
        <Carousel interval={5000} className="h-100">{cellsCollection}</Carousel>
      ) : (
        <Carousel className="h-100">
          <Carousel.Item className="">
            <Carousel.Caption className="col-6">
              <h2 className="d-flex align-items-center p-3 m-0">
                Add a new Cell.
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
