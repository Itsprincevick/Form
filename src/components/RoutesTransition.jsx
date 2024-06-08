import React from "react";
import CreateNewPassword from "./createNewPassword.jsx";
import SignIn from "./SignIn.jsx";
import SignUp from "./SignUp.jsx";
import ResetPassword from "./ResetPassword.jsx";
import ResetLinkPage from "./ResetLinkPage.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NotFound  from "./ErrorPage.jsx"

// eslint-disable-next-line react/prop-types
const RoutesTransition = ({ setIsErrorPage }) => {
  const location = useLocation();

  React.useEffect(() => {
    // List of known paths in the application
    const knownPaths = ["/", "/SignUp", "/ResetPassword", "/ResetLinkPage", "/createNewPassword"];
    // Check if the current path is in the list of known paths
    const isKnownPath = knownPaths.includes(location.pathname);
    // Set the error page state based on whether the path is known
    setIsErrorPage(!isKnownPath);
  }, [location.pathname, setIsErrorPage]); // Only re-run if the path changes


  return (
    <AnimatePresence mode="wait" duration={1.5}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/ResetLinkPage" element={<ResetLinkPage />} />
        <Route path="/createNewPassword" element={<CreateNewPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default RoutesTransition;
