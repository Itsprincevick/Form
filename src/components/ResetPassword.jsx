import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

const ResetPassword = () => {
  return (
    <m.div
      className="flex flex-col items-center md:w-1/2 h-screen text-center relative"
      initial={{ opacity: 0 }} // Initial state of the component when it is first rendered or about to appear
      animate={{ opacity: 1 }} // Animate to this state when the component appears or is in view
      exit={{ opacity: 1 }}    // State when the component is about to be removed or transitioned out
      transition={{ duration: 1.5 }} // Transition Timing
    >
      <div className="mt-20 w-full max-w-sm sm:max-w-sm">
        <Link to="/">
          <ChevronLeftIcon className="h-10 w-10 text-[#191919] absolute top-1 left-0" />
        </Link>
        <h1 className="font-medium text-4xl text-blue-10">Reset Password</h1>
        <span>
          <p className="w-full font-normal text-sm text-[#757575] mt-3 leading-normal">
            By entering your email address to reset your password, you&apos;ll
            receive a link in your inbox that will allow you reset your
            password.
          </p>
        </span>
        <form className="text-left mt-8">
          <label htmlFor="email" className="text-blue-10 font-semibold">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Registered Email Address here "
            required
            className="w-full border-2 border-grey rounded-xl px-3 py-2 mt-2 mb-2 outline-none"
          />
          <Link to="/ResetLinkPage">
            <m.button
              type="submit"
              className="w-full border-2 rounded-xl px-3 py-3 mt-6 text-center bg-blue-10 text-white "
              initial={{ y: "50px" }} // Initial state of the component when it is first rendered or about to appear
              animate={{ y: 0 }}      // Animate to this state when the component appears or is in view
              exit={{ y: 0 }}         // State when the component is about to be removed or transitioned out
              transition={{ duration: 1.5 }}  // Transition Timing
            >
              Reset Password
            </m.button>
          </Link>
        </form>
      </div>
    </m.div>
  );
};

export default ResetPassword;
