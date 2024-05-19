import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ResetPassword = () => {
  return (
    <motion.div className="flex flex-col items-center w-1/2 h-screen text-center relative"
    initial={{opacity: 0, x:0}}
    animate={{opacity: 1, x: 0}}
    exit={{opacity: 0.75, x: 0}}
    transition={{duration: 1.5}}
    >
      <div className="mt-20">
        <Link to="/">
         <ChevronLeftIcon className="h-10 w-10 text-[#191919] absolute top-1 left-12" />
        </Link>
        <h1 className="font-medium text-4xl text-blue-10">Reset Password</h1>
        <span>
          <p className="w-[430px] font-normal text-sm text-[#757575] mt-3 leading-normal">
            By entering your email address to reset your password, you&apos;ll
            receive a link in your inbox that will allow you reset your password.
          </p>
        </span>
        <form className="text-left mt-8">
          <label htmlFor="email" className="text-blue-10 font-semibold">Email Address</label>
          <input type="email" id="email" name="email" placeholder="Enter Registered Email Address here " required className="w-full border-2 border-grey rounded-xl px-3 py-2 mt-2 mb-2 outline-none"/>
          <Link to="/ResetLinkPage"><button type="submit"className="w-full border-2 rounded-xl px-3 py-3 mt-6 text-center bg-blue-10 text-white ">Reset Password</button></Link>
        </form>
      </div>
    </motion.div>
  );
};

export default ResetPassword;
