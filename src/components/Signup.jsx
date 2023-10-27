import React from 'react';
import { IonIcon } from '@ionic/react';
import { personOutline, lockClosedOutline } from 'ionicons/icons';
import { happyOutline, mailOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';

import '../App.css';

function Signup() {
    return (
        <React.Fragment>
            <div className=" flex items-center justify-center h-screen flex-col leading-relaxed tracking-wide">
                <div className="w-full lg:flex">
                    <div className="hidden lg:block w-1/2">
                        <img
                            src="https://images.pexels.com/photos/3109807/pexels-photo-3109807.jpeg?cs=srgb&dl=pexels-anni-roenkae-3109807.jpg&fm=jpg&w=5184&h=3888&_gl=1*n32axv*_ga*NzE0MDQ1NDQzLjE2ODUwOTkyMTQ.*_ga_8JE65Q40S6*MTY5ODQyOTU2Ni45LjEuMTY5ODQzMDg5OC4wLjAuMA.."
                            alt=""
                            className="w-full h-screen object-cover mix-blend-color-dodge"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col justify-center items-center align-middle lg:scale-125 2xl:lg:scale-125 ">
                        <div className="flex flex-col w-80">
                        <span className="text-gray-200 text-5xl font-thin mt-5">RAGESEC</span>
                            <span className="text-gray-200 text-3xl font-bold mt-5">Create Account</span>
                            <span className="text-gray-400 text-sm font-semibold mt-4 mb-10">
                                Sign Up To Join Family
                            </span>
                        </div>
                        <div className="flex flex-col gap-3 w-80">
                            <div className="flex">
                                <div className="relative">
                                    <IonIcon
                                        icon={happyOutline}
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-100"
                                    />
                                    <input
                                        type="text"
                                        className="w-full bg-purple-950/10 hover:bg-opacity-50 focus:outline-none focus:bg-purple-300/10 pl-10 py-4 font-semibold text-gray-100 rounded-xl transition ease-in-out duration-500"
                                        placeholder="First Name"
                                        name="firstName"
                                    />
                                </div>

                                <div className="relative">
                                    <IonIcon
                                        icon={happyOutline}
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-100"
                                    />
                                    <input
                                        type="text"
                                        className="w-full bg-purple-950/10 hover:bg-opacity-50 focus:outline-none focus:bg-purple-300/10 pl-10 py-4 font-semibold text-gray-100 rounded-xl transition ease-in-out duration-500"
                                        placeholder="Last Name"
                                        name="lastName"
                                    />
                                </div>
                            </div>

                            <div className="relative">
                                <IonIcon
                                    icon={mailOutline}
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-100"
                                />
                                <input
                                    type="text"
                                    className="w-full bg-purple-950/10 hover:bg-opacity-50 focus:outline-none focus:bg-purple-300/10 pl-10 py-4 font-semibold text-gray-100 rounded-xl transition ease-in-out duration-500"
                                    placeholder="Mail"
                                    name="email"
                                />
                            </div>

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

                            <div className="relative">
                                <IonIcon
                                    icon={lockClosedOutline}
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-100"
                                />
                                <input
                                    type="password"
                                    className="w-full bg-purple-950/10 hover:bg-opacity-50 focus:outline-none focus:bg-purple-300/10 pl-10 py-4 font-semibold text-gray-100 rounded-xl transition ease-in-out duration-500"
                                    placeholder="Confirm Password"
                                    name="confirmPassword"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center mt-10">
                            <button className="bg-cyan-400 hover:bg-cyan-600 text-gray-900 text-xl px-10 py-3 rounded-full flex items-center space-x-2 font-semibold transition ease-in-out duration-500">
                                SIGN UP
                            </button>

                            <span className="text-gray-500 font-medium mt-5">
                                Already have an account?{' '}
                                <Link to="/login" className="text-[#00F9E1]">
                                    Sign in
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Signup;
