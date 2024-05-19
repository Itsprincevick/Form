
import CreateNewPassword from "./createNewPassword.jsx";
import SignIn from "./SignIn.jsx";
import SignUp from "./SignUp.jsx";
import ResetPassword from "./ResetPassword.jsx";
import ResetLinkPage from "./ResetLinkPage.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function RoutesTransition() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/createNewPassword" element={<CreateNewPassword />} />
        <Route path="/ResetLinkPage" element={<ResetLinkPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default RoutesTransition;