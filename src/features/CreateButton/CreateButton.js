import React from 'react';
import { PlusLg } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
// import createIcon from "../../feather.svg";

const CreateButton = () => (
  <div
    className="
      container
      fixed-bottom
      p-3
      d-flex
      justify-content-end
      align-items-center"
  >
    <Link
      to="/new"
      className="d-flex btn p-3 mb-3 text-white fs-5 btn-primary rounded-circle align-items-center"
    >
      {/* <img src={createIcon} alt="createIcon" style={{width: "18px"}} /> */}
      <PlusLg />
    </Link>
  </div>
);

export default CreateButton;
