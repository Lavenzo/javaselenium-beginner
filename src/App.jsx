import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JavaSeleniumBeginnerIntroPage from "./pages/JavaSeleniumBeginnerIntroPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JavaSeleniumBeginnerIntroPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
