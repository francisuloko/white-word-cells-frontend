import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './features/PrivateRoutes';
import Cells from './features/Cells/Cells';
import NewCell from './features/NewCell/NewCell';
import EditCell from './features/EditCell/EditCell';
import Header from './features/Header/Header';
import Instructions from './features/HowItWorks';
import About from './features/About/About';
import Login from './features/Login';
import Register from './features/Register';
import LandingPage from './features/LandingPage';

import './App.css';

function App() {
  // const data = JSON.parse(localStorage.getItem('user')) || null;
  // const UserContext = createContext();
  // const [user] = useState(data);

  return (
    <div className="App d-flex flex-column vh-100">
      <Router>
        <Header />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/login" exact element={<Login />} />
            <Route path="/signup" exact element={<Register />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/how-it-works" element={<Instructions />} />
            <Route path="/" exact element={<LandingPage />} />
            <Route exact path="/cells" element={<PrivateRoute />}>
              <Route exact path="/cells" element={<Cells />} />
            </Route>
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
}

export default App;
