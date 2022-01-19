import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/cells');
    }
  });

  return (
    <div className="module h-100">
      <div className="container text-center py-5 text-white">
        <h1>Create your words</h1>
        <h2>Stay Positive</h2>
      </div>
    </div>
  );
};

export default LandingPage;
