import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <div className="h-screen w-1/2  ">
      <div className=" w-[80%] mx-auto">
        <h3 className=" space-y-56 text-blue-10 text-4xl text-center font-medium mt-8">
          Welcome Back
        </h3>
        <p className="text-lg text-center text-grey-4 mt-3">
          Bold Underline draft ipsum background.Backgroung plugin jsd
        </p>
        <div className="flex justify-between px-7 mt-5 w-[100%] bg-blue-1 rounded-xl">
          <button className=" border-grey px-12 py-3">Sign In</button>
          <button className=" border-grey px-12 py-3 bg-blue-1 ">
            Sign Up
          </button>
        </div>
        <form className="mt-5">
          <label htmlFor="email" className="text-blue-10 font-semibold">
            Email Address
          </label>
          <input
            type="email"
            id="Email"
            name="Email"
            placeholder="Enter Email Address here"
            className="w-full border-2 border-grey rounded-xl px-3 py-2 mt-2 mb-2"
            required
          />
          <label htmlFor="password" className="text-blue-10 font-semibold">
            Password
          </label>
          <div className="relative">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your Password"
              className="w-full border-2 border-grey rounded-xl px-3 py-2 mt-2"
              required
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="absolute top-5 right-4 w-4 h-4 text-grey-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          </div>
          <div className="text-right text-green-6 mt-2 text-xs">
            <Link to="/createNewPassword">Forget Password?</Link>
          </div>
          <button
            type="submit"
            className="w-full border-2 rounded-xl px-3 py-3 mt-6 text-center bg-blue-10 text-white "
          >
            Sign In
          </button>
        </form>
        <div className="flex mt-6 items-center text-grey-3">
          <hr className="w-[37%] border-1" />
          <p className="mx-1 ">Or Continue With</p>
          <hr className="w-[37%] border-1" />
        </div>

        {/* social media icons */}
      </div>
    </div>
  );
};

export default SignIn;
