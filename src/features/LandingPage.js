import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  if (isLoggedIn) {
    navigate('/cells');
  }

  return (
    <div className="module h-100">
      <div className="container text-center py-5">
        <h1 className="text-white">Welcome to white word cells</h1>
      </div>
    </div>
  );
};

export default LandingPage;
