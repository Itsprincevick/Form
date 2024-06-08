// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/16/solid";
import { motion as m } from "framer-motion";

/**
 * CreateNewPassword component that allows users to create a new password.
 */
const CreateNewPassword = () => {
  /**
   * State variable to store the new password.
   */
  const [password, setPassword] = useState("");

  /**
   * State variable to store the confirmed password.
   */
  const [confirmPassword, setConfirmPassword] = useState("");

  /**
   * Handles changes to the new password input field.
   * Updates the 'password' state variable with the new value.
   */
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  /**
   * Handles changes to the confirm password input field.
   * Updates the 'confirmPassword' state variable with the new value.
   */
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  /**
   * Handles form submission.
   * Prevents the default form submission behavior.
   * Checks if the new password and confirmed password match.
   * Logs a message to the console indicating whether the passwords match.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log("Passwords match!");
    } else {
      console.log("Passwords do not match!");
    }
  };

  /**
   * Returns a motion div element with animation properties.
   * The div contains a form with input fields for the new password and confirmed password.
   */
  return (
    <m.div
      className="text-center md:w-1/2 flex flex-col items-center  mt-20"
      initial={{ opacity: 0, x: 0 }}  // Initial state of the component when it is first rendered or about to appear
      animate={{ opacity: 1, x: 0 }}  // Animate to this state when the component appears or is in view
      exit={{ opacity: 0.75, x: 0 }}  // State when the component is about to be removed or transitioned out
      transition={{ duration: 1.5 }}  // Transition Timing
    >
      <div className="w-full max-w-sm sm:max-w-sm">
        {/**
         * Renders a heading element with the title "Create a New Password".
         */}
        <h1 className="font-medium text-4xl text-blue-10">
          Create a New Password
        </h1>
        {/**
         * Renders a paragraph element with a description.
         */}
        <p className="text-xs text-grey-4 font-normal mt-2 w-full">
          Bold underline draft ipsum background. Background plugin figja
        </p>
      </div>
{/**
       * Renders a form element with a submit event handler.
       */}
      <form onSubmit={handleSubmit} className="flex flex-col text-blue-10 mt-9 w-full ">
        <label className="block text-left relative">
          Password
          {/**
           * Renders an input field for the new password.
           * The input field is bound to the 'password' state variable.
           */}
          <input
            className="w-full border-grey-3 border rounded-xl h-10 my-2 p-3 text-sm outline-none"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your New Password"
          />
          {/**
           * Renders a LockClosedIcon element.
           */}
          <LockClosedIcon className="w-4 h-4 text-grey-3 absolute right-2 bottom-5" />
        </label>
        <label className="block text-left relative">
          Confirm Password
          {/**
           * Renders an input field for the confirmed password.
           * The input field is bound to the 'confirmPassword' state variable.
           */}
          <input
            className="w-full border border-grey-3 rounded-xl h-10 my-2 p-3 text-sm outline-none"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder="Confirm your New Password"
          />
          {/**
           * Renders a LockClosedIcon element.
           */}
          <LockClosedIcon className="w-4 h-4 text-grey-3 absolute right-2 bottom-5" />
        </label>
        {/**
         * Renders a submit button with the text "Reset Password".
         */}
        <button className="text-white w-full h-10 bg-blue-10 rounded-xl mt-3" type="submit">
          Reset Password
        </button>
      </form>
    </m.div>
  );
};

export default CreateNewPassword;