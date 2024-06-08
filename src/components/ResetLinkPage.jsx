
// eslint-disable-next-line no-unused-vars
import React from "react"; // Importing React from react
import { Link } from "react-router-dom"; // Importing Link from react-router-dom
import Message from "../assets/Message.svg"
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

const ResetLinkPage = () => {
  return (
    <motion.div className="flex flex-col md:justify-center items-center md:w-1/2 h-screen text-center relative gap-5"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 1}}
    transition={{duration: 1.5}}
    >

      {/*Tot-left back Icon... */}
      <Link to="/ResetPassword">
       <ChevronLeftIcon className="h-10 w-10 text-[#191919] absolute top-1 left-0" />
      </Link>

      {/* message icon... */}
     
     <img src={Message} alt="Message logo" className="mt-12 w-[200px] h-[136px]"/>


       {/* Text part.. */}
      <h4 className="text-[39px] font-medium text-blue-10">Reset Link Sent</h4>
      <p className="font-normal text-xs md:text-sm text-[#757575] md:w-[460px]">
        Thank you for submitting your email address to reset your password. 
        Your email has been successfully verified, and a password reset link 
        has been sent to the email address associated with your account.
      </p>
       
       {/*Link back to home page */}
      <Link to="/"
      className="font-normal text-base text-green-6">
        Go back Home
      </Link>
      
    </motion.div>
  );
};

export default ResetLinkPage;
