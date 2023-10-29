// Inspired by https://www.uplabs.com/posts/dark-mode-login-and-signup-app-ui-design
// Login-Signup Frontend using ReactJS, Tailwind and Ionicons 

// Follow for more.
// Github: https://github.com/rajyavardhanbithale
// LinkedIn: https://www.linkedin.com/in/rajyavardhan-bithale-999482258/
// Instagram: https://www.instagram.com/rajyavardhan.8/

import React from 'react';
import { IonIcon } from '@ionic/react';
import { personOutline, lockClosedOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';

import '../App.css';

function Login() {
  return (
    <React.Fragment>
      <div className="flex items-center justify-center h-screen flex-col leading-relaxed tracking-wide">
        <div className="w-full lg:flex">
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center align-middle lg:scale-125 2xl:lg:scale-125">
            <React.Fragment>
              <span className="text-gray-200 text-5xl font-thin mt-10 band__font text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500 lg:mb-0">rAGe</span>

              <img src="./public/images/login/login_people.svg"
                className="w-28 mt-16 lg:hidden "
                alt="" />

              <div className="flex flex-col w-80 justify-center align-middle items-center">
                <span className="text-gray-200 text-3xl font-bold mt-8 mb-2">Login</span>
                <span className="text-gray-400 text-sm font-semibold mb-10 items-center">Please Login To Continue</span>
              </div>
              <div className="flex flex-col gap-5 w-72">
                <div className="relative">
                  <IonIcon
                    icon={personOutline}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-100"
                  />
                  <input
                    type="text"
                    className="w-full bg-purple-950/10 hover:bg-opacity-50 focus:outline-none focus:bg-purple-300/10 pl-10 py-4 font-semibold text-gray-100 rounded-xl transition ease-in-out duration-500"
                    placeholder="Username"
                    name="username"
                  />
                </div>

                <div className="relative">
                  <IonIcon
                    icon={lockClosedOutline}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-100"
                  />
                  <input
                    type="password"
                    className="w-full bg-purple-950/10 hover:bg-opacity-50 focus:outline-none focus:bg-purple-300/10 pl-10 py-4 font-semibold text-gray-100 rounded-xl transition ease-in-out duration-500"
                    placeholder="Password"
                    name="password"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center justify-center mt-10">
                <button className="bg-cyan-400 hover-bg-cyan-600 text-gray-900 text-xl px-10 py-3 rounded-full flex items-center space-x-2 font-semibold transition ease-in-out duration-500">
                  Login
                </button>
                <span className="text-[#00F9E1] font-medium mt-4">Forgot Password ?</span>
                <span className="text-gray-500 font-medium mt-5 mb-10">
                  Dont have an account ?
                  <Link to="/signup" className="text-[#00F9E1]">
                    &nbsp; SignUp
                  </Link>
                </span>
              </div>
            </React.Fragment>
          </div>
          <div className="hidden lg:block w-1/2">
            <img
              src="public/images/login/back_image.jpg"
              alt=""
              className="w-full h-screen object-cover mix-blend-color-dodge rounded-3xl"
            />
            {/* <div className="gradient__overlay w-full h-screen object-cover"></div> */}
          </div>
        </div>

      </div>
    </React.Fragment>
  );
}

export default Login;
