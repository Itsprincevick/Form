import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const AccessButtons = () => {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState("signIn");

  useEffect(() => {
    if (location.pathname === "/SignUp") {
      setActiveButton("signUp");
    } else {
      setActiveButton("signIn");
    }
  }, [location.pathname]);


    /**
     * Returns a div element with a blue background and rounded corners, 
     * containing two buttons for signing in and signing up.
     */
    return (
        <div className="w-full h-full bg-blue-1 rounded-lg p-1">
           {/*
             * Link to the root route ("/") with a sign in button.
             */}
            <Link to="/">
                <button className={`w-1/2 text-center h-11 rounded-md ${activeButton == `signIn` ? `bg-white` : `bg-inherit`} `}>
                    Sign In
                </button>
            </Link>
            {/**
             * Link to the "/SignUp" route with a sign up button.
             */}
            <Link to="/SignUp">
                <button className={`w-1/2 text-center h-11 rounded-md ${activeButton == `signUp`? `bg-white` : `bg-inherit`} `}>
                    Sign Up
                </button>
            </Link>
        </div>
    )
};

export default AccessButtons;