import React from "react";
import { Link } from "react-router-dom";
import { PlusLg } from "react-bootstrap-icons";

const CreateButton = () => {
  return (
    <div
      className="
      container
      fixed-bottom
      p-3
      d-flex
      justify-content-end
      align-items-center"
    >
      <Link to="/new" className="d-flex btn p-3 mb-3 text-white fs-5 btn-primary rounded-circle align-items-center">
        <PlusLg />
      </Link>
    </div>
  );
};

export default CreateButton;
