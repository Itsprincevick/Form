import { Link } from "react-router-dom";

/**
 * AccessButtons component that renders two buttons for signing in and signing up.
 */
const AccessButtons = () => {
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
                <button className="w-1/2 text-center h-11 bg-white rounded-md">
                    Sign In
                </button>
            </Link>
            {/**
             * Link to the "/SignUp" route with a sign up button.
             */}
            <Link to="/SignUp">
                <button className="w-1/2 text-center h-11 rounded-md">
                    Sign Up
                </button>
            </Link>
        </div>
    )
};

export default AccessButtons;