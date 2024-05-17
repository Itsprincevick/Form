import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import CreateNewPassword from "./components/createNewPassword.jsx";
import SignIn from "./components/SignIn.jsx"
import ErrorBoundary from "./components/ErrorBoundary";
import ResetLinkPage from './components/ResetLinkPage.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ErrorBoundary>
        <div className="flex px-24">
          <App />
          <Routes>
            <Route path="/" element={<SignIn/>} />
            <Route path="/createNewPassword" element={<CreateNewPassword />} />
            <Route path="/ResetLinkPage" element={<ResetLinkPage />} />
            <Route path="/ErrorBoundary" element={<ErrorBoundary />} />
          </Routes>
        </div>
      </ErrorBoundary>
    </Router>
  </React.StrictMode>
);