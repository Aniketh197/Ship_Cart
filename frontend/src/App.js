import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="div">
      <BrowserRouter>
        <NavBar />
        <hr></hr>
        <Routes>
          <Route path="/List" element={<List />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Form/:id" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
