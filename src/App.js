import React from "react";
import homePage from './pages/homePage'
import aboutPage from './pages/aboutPage'
import businessPage from './pages/businessPage'
import blogPage from './pages/blogPage'
import supportPage from './pages/supportPage'
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
<Routes>
  <Route path="/" exact Component={homePage} />
  <Route path="/about" exact Component={aboutPage} />
  <Route path="/business" exact Component={businessPage} />
  <Route path="/blog" exact Component={blogPage} />
  <Route path="/support" exact Component={supportPage} />
</Routes>
    </>
  );
}

export default App;
