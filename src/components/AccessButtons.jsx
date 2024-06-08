import { Link } from "react-router-dom";

const AccessButtons = () => {
    return (
        <div className="w-full h-full bg-blue-1 rounded-lg p-1">
        <Link to="/"><button className="w-1/2 text-center h-11 bg-white rounded-md">Sign In</button></Link>
        <Link to="/SignUp">
          <button className="w-1/2 text-center h-11 rounded-md">
            Sign Up
          </button>
        </Link>
      </div>
    )
};

export default AccessButtons;