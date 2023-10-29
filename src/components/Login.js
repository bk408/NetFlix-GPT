import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Validate the form data

    const message = checkValidData(email.current.value, password.current.value);

    setErrorMessage(message);
  };

  // Sign In / Sign up

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-logo"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black bg-opacity-70 p-8 rounded-md w-full max-w-sm">
            <h1 className="text-2xl text-white font-semibold mb-4">
              {isSignInForm ? "Sign In" : "Sign up"}
            </h1>
            <form onSubmit={(e) => e.preventDefault()}>
              {!isSignInForm && (
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-white text-sm font-medium"
                  >
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    className="w-full p-2 rounded-md border border-gray-300"
                    placeholder="John Doe"
                  />
                </div>
              )}

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-white text-sm font-medium"
                >
                  Email
                </label>
                <input
                  ref={email}
                  required
                  type="email"
                  id="email"
                  className="w-full p-2 rounded-md border border-gray-300"
                  placeholder="example@example.com"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-white text-sm font-medium"
                >
                  Password
                </label>
                <input
                  ref={password}
                  required
                  type="password"
                  id="password"
                  className="w-full p-2 rounded-md border border-gray-300"
                  placeholder="Your Secret Password"
                />
              </div>

              <p className="text-red-500 font-semibold mt-2">{errorMessage}</p>

              <div className="flex items-center justify-between mb-4">
                <label className="text-white">
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </label>
                <button className="text-white text-sm">Forgot Password?</button>
              </div>
              <button
                type="submit"
                className="bg-red-500 text-white w-full py-2 rounded-md hover:bg-red-600 transition duration-300"
                onClick={handleButtonClick}
              >
                {isSignInForm ? "Sign In" : "Sign up"}
              </button>
            </form>

            {isSignInForm ? (
              <div className="mt-4">
                <p className="text-white text-sm">
                  New to Netflix?{" "}
                  <button className="text-red-500" onClick={toggleSignInForm}>
                    Sign up now.
                  </button>
                </p>
              </div>
            ) : (
              <div className="mt-4">
                <p className="text-white text-sm">
                  Already registered?{" "}
                  <button className="text-red-500" onClick={toggleSignInForm}>
                    Sign In
                  </button>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
