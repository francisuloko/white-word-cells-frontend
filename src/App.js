import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cells from './features/Cells/Cells';
import NewCell from './features/NewCell/NewCell';
import EditCell from './features/EditCell/EditCell';
import Header from './features/Header/Header';
import About from './features/About/About';
import Login from './features/Login';
import Register from './features/Register';
import Profile from './features/Profile';
import { history } from './helpers/history';
import LandingPage from './features/LandingPage';

import './App.css';

function App() {
  // const [list, setList] = useState("");

  // const handleCreate = (word) => {
  //   setList([...list, word]);
  // };

  // const handleModify = (list) => {
  //   list.forEach((obj, index) => ({ ...obj, id: index + 1 }));
  //   setList(list);
  // };

  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <div>
          <Routes>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route
              exact
              path="/new"
              component={<NewCell addNewWord={handleCreate} list={list} />}
            />
            <Route
              exact
              path="/edit"
              component={<EditCell updateWord={handleModify} list={list} />}
            />
            <Route exact path="/about" component={<About />} />
            <Route
              exact
              path="/home"
              component={<Cells wordList={list} updateList={handleModify} />}
            />
            <Route exact path="/" component={LandingPage} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
