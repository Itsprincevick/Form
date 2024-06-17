
import GoogleLogoIcon from "../assets/icons/Google.svg";
import ApplelogoIcon from "../assets/icons/apple_logo_icon.svg";
import FacebookLogoIcon from "../assets/icons/circle-facebook.svg";
import { motion as m } from "framer-motion";
import AccessButtons from "../components/AccessButtons";

function SignUp() {
  return (
    <div className="h-screen md:w-1/2 flex items-center" >
      <div className=" lg:w-[65%] md:mx-auto md:translate-y-8">
        <m.div
          initial={{y: "20px" }} // Initial state of the component when it is first rendered or about to appear
          animate={{ y: "0" }}   // Animate to this state when the component appears or is in view
          exit={{ y: "20px" }}   // State when the component is about to be removed or transitioned out
          transition={{ duration: 1.5, type: 'tween', ease: 'easeInOut' }} // Transition Timing
        >
          <h2 className="mt-1 text-center text-4xl font-medium text-blue-10">
            Create an Account
          </h2>
          <p className="my-4 text-center text-sm text-gray-500">
            Bold underline draft ipsum background. Background plugin figja
          </p>
          <AccessButtons />
        </m.div>
        <form className="mt-2 space-y-2">
          <m.div 
            initial={{ y: 20 }} // Initial state of the component when it is first rendered or about to appear
            animate={{ y: 0 }}  // Animate to this state when the component appears or is in view
            exit={{ y: 20 }}    // State when the component is about to be removed or transitioned out
            transition={{ duration: 1.5, type: 'tween', ease: 'easeInOut' }} // Transition Timing
          >
            <div className="flex flex-col">
              <label className="text-blue-10 font-semibold">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter Name here"
                className="w-full border-2 border-grey rounded-xl px-3 py-2 mt-2 mb-2 outline-none"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-blue-10 font-semibold">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="Enter Email Address here"
                className="w-full border-2 border-grey rounded-xl px-3 py-2 mt-2 mb-2 outline-none"
                required
              />
            </div>
          </m.div>
          <m.div
             initial={{ opacity: 0, y: -20 }} // Initial state of the component when it is first rendered or about to appear
             animate={{ opacity: 1, y: 0 }}   // Animate to this state when the component appears or is in view
             exit={{ opacity: 0, y: -20 }}    // State when the component is about to be removed or transitioned out
             transition={{ duration: 1.5, type: 'tween', ease: 'easeInOut' }} // Transition Timing
          >
            <div className="flex flex-col">
              <label className="text-blue-10 font-semibold">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your Password"
                className="w-full border-2 border-grey rounded-xl px-3 py-2 mt-2 mb-2 outline-none"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-blue-10 font-semibold">
                Confirm Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Confirm your Password"
                className="w-full border-2 border-grey rounded-xl px-3 py-2 mt-2 mb-2 outline-none"
                required
              />
            </div>
          </m.div>
          </form>
          <m.div
            initial={{ y: -20 }} // Initial state of the component when it is first rendered or about to appear
            animate={{ y: 0 }}   // Animate to this state when the component appears or is in view
            exit={{ y: -20 }}    // State when the component is about to be removed or transitioned out
            transition={{ duration: 1.5, type: 'tween', ease: 'easeInOut' }} // Transition Timing
          >
            <button
              type="submit"
              className="w-full border-2 rounded-xl px-3 py-3 mt-6 text-center bg-blue-10 text-white "
            >
              Sign Up
            </button>
            <div className="flex items-center justify-center my-4">
              <div className="border-t border-grey-3 flex-grow mr-3"></div>
              <p className="text-center text-grey-3">Or continue with</p>
              <div className="border-t border-grey-3 flex-grow ml-3"></div>
            </div>
            <div className="flex items-center justify-center gap-5">
              <img src={GoogleLogoIcon} alt="google logo" className="w-14 h-14 cursor-pointer" />
              <img src={ApplelogoIcon} alt="apple logo" className="w-14 h-14 cursor-pointer" />
              <img
                src={FacebookLogoIcon}
                alt="facebook logo"
                className="w-14 h-14 cursor-pointer"
              />
            </div>
                  </m.div>
          </div>
    </div>
  );
}

export default SignUp;
