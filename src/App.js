import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cells from "./features/Cells/Cells";
import NewCell from "./features/NewCell/NewCell";
import EditCell from "./features/EditCell/EditCell";
import Header from "./features/Header/Header";
import About from "./features/About/About";
import Login from "./features/Login";
import Register from "./features/Register";
import Profile from "./features/Profile";
import { logout } from "./slices/auth";
import { clearMessage } from "./actions/message";
import { history } from "./helpers/history";

import "./App.css";

function App() {
  const [list, setList] = useState([]);

  const handleCreate = (word) => {
    setList([...list, word]);
  };

  const handleModify = (list) => {
    list.forEach((obj, index) => ({ ...obj, id: index + 1 }));
    setList(list);
  };

  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <div>
          <Routes>
            <Route exact path="/login" element={Login} />
            <Route exact path="/signup" element={Register} />
            <Route exact path="/profile" element={Profile} />
            <Route
              exact
              path="/new"
              element={<NewCell addNewWord={handleCreate} list={list} />}
            />
            <Route
              exact
              path="/edit"
              element={<EditCell updateWord={handleModify} list={list} />}
            />
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/"
              element={<Cells wordList={list} updateList={handleModify} />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
