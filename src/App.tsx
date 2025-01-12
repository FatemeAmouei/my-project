import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home.jsx";
import Favorites from "./component/Favorites/Favorites.jsx";
import Blogs from "./component/Blog/Blogs.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/blogs" element={<Blogs />} />
    </Routes>
  );
};

export default App;
