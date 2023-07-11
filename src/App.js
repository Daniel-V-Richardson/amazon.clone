import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import { PageNotFound } from "./Pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
