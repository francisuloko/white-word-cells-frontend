import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WordMango from "./features/WordMango/WordMango";
import "./App.css";
import NewWord from "./features/NewWord/NewWord";
import EditWord from "./features/EditWord/EditWord";
import Header from "./features/Header/Header";

function App() {
  const [list, setList] = useState([]);

  const handleCreate = (word) => {
    setList([...list, word]);
  };

  const handleModify = (list) => {
    list.forEach((obj, index) => {
      obj.id = index + 1;
    });
    setList(list);
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <div>
          <Routes>
            <Route
              exact
              path="/new"
              element={<NewWord addNewWord={handleCreate} list={list} />}
            />
            <Route
              exact
              path="/edit"
              element={<EditWord updateWord={handleModify} list={list} />}
            />
            <Route
              exact
              path="/"
              element={<WordMango wordList={list} updateList={handleModify} />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
