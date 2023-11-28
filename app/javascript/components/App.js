import React from "react";
import Greeting from './Greeting';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
  </BrowserRouter>
)

export default App;