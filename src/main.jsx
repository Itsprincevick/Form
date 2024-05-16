import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Form from "./components/form.jsx";
import ErrorBoundary from "./components/ErrorBoundary";
import ResetLinkPage from './components/ResetLinkPage.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/form" element={<Form />}

            //input the route for the form pages in here {DELETE THIS COMMENT AFTER}
            
          />
          <Route path="/resetlinkpage" element={<ResetLinkPage />} />
          <Route path="/ErrorBoundary" element={<ErrorBoundary />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  </React.StrictMode>
);