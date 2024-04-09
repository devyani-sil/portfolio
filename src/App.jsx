import React from "react";
import { Hero, Contact, Expertise, Footer, Work } from "./componetns";
import Navbar from "./componetns/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "./componetns/Project";
import Home from "./Pages/Home";
const App = () => {
  return (
    <BrowserRouter>
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />}>
            <Route path=":projectId" element={<Project />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
