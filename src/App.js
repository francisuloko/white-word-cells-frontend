import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { loginStatus } from './slices/auth';
import PrivateRoute from './features/PrivateRoutes';
import Cells from './features/Cells/Cells';
import NewCell from './features/NewCell/NewCell';
import EditCell from './features/EditCell/EditCell';
import Header from './features/Header/Header';
import Instructions from './features/HowItWorks';
import About from './features/About/About';
// import Profile from './features/User/Profile';
import Login from './features/User/Login';
import Register from './features/User/Register';
import LandingPage from './features/LandingPage';
import Alert from './features/Alerts/Alert';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginStatus());
  }, []);

  return (
    <div className="App d-flex flex-column vh-100">
      <Router>
        <Header />
        <Alert />
        <div className="flex-grow-1 position-relative">
          <Routes>
            <Route path="/login" exact element={<Login />} />
            <Route path="/signup" exact element={<Register />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/how-it-works" element={<Instructions />} />
            <Route path="/" exact element={<LandingPage />} />
            <Route exact path="/cells" element={<PrivateRoute />}>
              <Route exact path="/cells" element={<Cells />} />
            </Route>
            {/* <Route exact path="/profile" element={<PrivateRoute />}>
              <Route exact path="/profile" element={<Profile />} />
            </Route> */}
            <Route exact path="/new" element={<PrivateRoute />}>
              <Route exact path="/new" element={<NewCell />} />
            </Route>
            <Route exact path="/edit" element={<PrivateRoute />}>
              <Route exact path="/edit" element={<EditCell />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
