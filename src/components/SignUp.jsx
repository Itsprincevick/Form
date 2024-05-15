import React from "react";

function SignUp(){
    return(
        <div className= "min-h-screen flex items-start justify-center py-10">
           <div className="flex flex-col items-center justify-start">
            
            <h2 className="text-4xl font-medium text-blue-10">Welcome Back</h2>
            <p className="py-4 font-medium text-grey-4"> Bold underline draft ipsum background. Background plugin figja</p>
            <div className="Signin-Signup-btn">
            <button className="btn font-medium px-20 py-2 border-2 border-spacing-0 border-r-0 border-blue-100 bg-white rounded-md text-blue-10">Sign In</button>
            <button className="btn  font-medium px-20 py-2 border-2 border-spacing-0 border-blue-100 border-l-0 bg-blue-100 rounded-md text-blue-10">Sign Up</button>
            </div>
           </div>

            {/* <div className="flex flex-col">
            <div className="flex">
                <p className="text-gray-500">Email Address</p>
                <input type="email" alt="" /> 
            </div>
            <div className="flex">
                <p className="text-gray-500">Password</p>
                <input type="password" alt="" /> 
            </div>
            </div> */}
        </div>
    )
}

export default SignUp;