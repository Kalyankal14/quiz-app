import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import {Quiz} from "./components/Quiz";
import Score from "./components/Score";
function App() {
  return (
    <div className="flex flex-col justify-center items-center"> 
      <h1 className="text-center block font-sans text-5xl antialiased font-semibold leading-tight tracking-normal text-inherit">
        Quiz App
      </h1>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/score" element={<Score />} />
      </Routes>
    </div>
  );
}

export default App;
