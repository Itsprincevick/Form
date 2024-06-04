// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

const CreateNewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add your password submission logic here
    // For example, check if password and confirmPassword match
    if (password === confirmPassword) {
      console.log("Passwords match!");
    } else {
      console.log("Passwords do not match!");
    }
  };

  return (
    <m.div className="text-center w-1/2 flex flex-col items-center  mt-20"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 1}}
    >
      <div className=" w-[460px]">
          <h1 className="font-medium text-4xl text-blue-10">
            Create a New Password
          </h1>
          <p className="text-xs text-grey-4 font-normal mt-2">
            Bold underline draft ipsum background. Background plugin figja
          </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col text-blue-10 mt-9 w-[460px] ">
        <label className="block text-left relative">
          Password
          <input className="w-full border-grey-3 border rounded-xl h-10 my-2 p-3 text-sm outline-none"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your New Password"
          />
          <LockClosedIcon className="w-4 h-4 text-grey-3 absolute right-2 bottom-5"/>
        </label>
        <label className="block text-left relative">
          Confirm Password
          <input className="w-full border border-grey-3 rounded-xl h-10 my-2 p-3 text-sm outline-none"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder="Confirm your New Password"
          />
           <LockClosedIcon className="w-4 h-4 text-grey-3 absolute right-2 bottom-5"/>
        </label>

        <Link to="/ResetLinkPage"><button className="text-white w-full h-10 bg-blue-10 rounded-xl mt-3" type="submit">Reset Password</button></Link>
      </form>
    </m.div>
  );
};

export default CreateNewPassword;