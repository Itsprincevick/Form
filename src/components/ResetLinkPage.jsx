// eslint-disable-next-line no-unused-vars
import React from "react"; // Importing React from react
import { Link } from "react-router-dom"; // Importing Link from react-router-dom
import Message from "../assets/Message.svg"
import { ChevronLeftIcon } from "@heroicons/react/20/solid";

const ResetLinkPage = () => {
  return (
    <form className="flex flex-col justify-center items-center h-screen text-center relative gap-5">

      {/*Tot-left back Icon... */}
      <Link to="/">
       <ChevronLeftIcon className="h-10 w-10 text-[#191919] absolute top-0 left-0" />
      </Link>

      {/* message icon... */}
     
     <img src={Message} alt="Message logo" className="w-[200px] h-[136px]"/>


       {/* Text part.. */}
      <h4 className="text-[39px] font-medium text-blue-10">Reset Link Sent</h4>
      <p className="font-normal text-sm text-[#757575]">
        Thank you for submitting your email address to reset your password. 
        <br/>
        Your email has been successfully verified, and a password reset link 
        <br/>
        has been sent to the email address associated with your account.
      </p>
       
       {/*Link back to home page */}
      <Link to="/"
      className="font-normal text-base text-green-6">
        Go back Home
      </Link>
      
    </form>
  );
};

export default ResetLinkPage;