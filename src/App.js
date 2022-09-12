import React,{useEffect, useState} from 'react';
import './App.css';
import './css/variables.css'
import Home from "./pages/Home/Home";
import Page1 from "./pages/Page1/Page1";
import Page2 from "./pages/Page2/Page2";
import Page3 from "./pages/Page3/Page3";
import Layout from "./layout/Layout.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
 
function App() {
  

  


  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout  />}>
              <Route index element={<Home />} />
              <Route path='route1' element={<Page1 />} />
              <Route path="route2" element={<Page2 />} />
              <Route path="route3" element={<Page3 />} />
            </Route>
          </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
