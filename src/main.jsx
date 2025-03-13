import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import AddBook from "./pages/AddBook"; // Create this file in Step 4

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
