import React from 'react';
import { IonIcon } from '@ionic/react';
import { personOutline, phonePortraitOutline } from 'ionicons/icons';
import { lockClosedOutline } from 'ionicons/icons';
import { happyOutline } from 'ionicons/icons';
import { mailOutline } from 'ionicons/icons';
import { phonePortrait } from 'ionicons/icons';


import '../App.css'

function Signup() {
    return (
        <React.Fragment>

            <div className="flex items-center justify-center h-screen flex-col leading-relaxed tracking-wide ">
                <span className="text-gray-200 text-3xl font-bold p-4 mt-5 flex w-full px-6">Create Account</span>
                <span className="text-gray-400 text-sm font-semibold  mb-10 flex w-full px-6">Sign Up To Join Family</span>

                <div className="flex flex-col gap-3 w-80">
                    <div className="flex ">
                        <div className="relative">
                            <IonIcon
                                icon={happyOutline}
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-100"
                            />
                            <input
                                type="text"
                                className="w-full bg-purple-950/10 hover:bg-opacity-50 focus:outline-none focus:bg-purple-300/10 pl-10 py-4 font-semibold text-gray-100 rounded-xl transistion ease-in-out duration-500"
                                placeholder="First Name"
                                name=""
                                id=""
                            />
                        </div>

                        <div className="relative">
                            <IonIcon
                                icon={happyOutline}
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-100"
                            />
                            <input
                                type="text"
                                className="w-full bg-purple-950/10 hover:bg-opacity-50 focus:outline-none focus:bg-purple-300/10 pl-10 py-4 font-semibold text-gray-100 rounded-xl transistion ease-in-out duration-500"
                                placeholder="Last Name"
                                name=""
                                id=""
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
                            className="w-full bg-purple-950/10 hover:bg-opacity-50 focus:outline-none focus:bg-purple-300/10 pl-10 py-4 font-semibold text-gray-100 rounded-xl transistion ease-in-out duration-500"
                            placeholder="Mail"
                            name=""
                            id=""
                        />
                    </div>


                    <div className="relative">
                        <IonIcon
                            icon={personOutline}
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-100"
                        />
                        <input
                            type="text"
                            className="w-full bg-purple-950/10 hover:bg-opacity-50 focus:outline-none focus:bg-purple-300/10 pl-10 py-4 font-semibold text-gray-100 rounded-xl transistion ease-in-out duration-500"
                            placeholder="Username"
                            name=""
                            id=""
                        />
                    </div>

                    <div className="relative">
                        <IonIcon
                            icon={lockClosedOutline}
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-100"
                        />
                        <input
                            type="password"
                            className="w-full bg-purple-950/10 hover:bg-opacity-50 focus:outline-none focus:bg-purple-300/10 pl-10 py-4 font-semibold text-gray-100 rounded-xl transistion ease-in-out duration-500"
                            placeholder="Password"
                            name=""
                            id=""
                        />
                    </div>

                    <div className="relative">
                        <IonIcon
                            icon={lockClosedOutline}
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-100"
                        />
                        <input
                            type="password"
                            className="w-full bg-purple-950/10 hover:bg-opacity-50 focus:outline-none focus:bg-purple-300/10 pl-10 py-4 font-semibold text-gray-100 rounded-xl transistion ease-in-out duration-500"
                            placeholder="Confirm Password"
                            name=""
                            id=""
                        />
                    </div>


                </div>



                <div className="flex flex-col items-center justify-center mt-10">
                    <button className="bg-cyan-400 hover:bg-cyan-600 text-gray-900 text-xl px-10 py-3 rounded-full flex items-center space-x-2 font-semibold transistion ease-in-out duration-500">
                        SIGN UP
                    </button>
                   

                    <span className="text-gray-500 font-medium mt-5">Already have a account ? <span className="text-[#00F9E1]">Sign in </span> </span>
                </div>

            </div>

        </React.Fragment>
    );
}

export default Signup;
