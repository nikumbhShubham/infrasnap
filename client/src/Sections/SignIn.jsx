import React from 'react'
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
const SignUp = () => {
    return (
        <section className=' font-montserrat'>
            <div className='flex flex-col lg:flex-row items-center justify-center p-4 min-h-screen bg-blue-50' >
                <div className='mt-8 lg:mt-0 lg:mr-16 text-center lg:text-left '>
                    <img src="assets/signin.jpg"
                        className='w-[400px] h-full object-cover rounded-xl shadow-md'
                    />
                </div>
                <div
                    className='w-full max-w-md lg:max-w-lg bg-white rounded-lg shadow-lg p-8'
                >
                    <h2 className="text-2xl font-semibold text-gray-800 ">
                        Welcome back 👋
                    </h2>
                    <p className="text-gray-500 mt-2">Log in to your account</p>
                    <form className="mt-12">
                        {/* Email Input */}
                        <div className="relative mt-4">
                            <AiOutlineMail className="absolute top-3 left-3 text-gray-400" />
                            <input
                                type="email"
                                placeholder="What is your e-mail?"
                                className="w-full px-10 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="relative mt-6">
                            <AiOutlineLock className="absolute top-3 left-3 text-gray-400" />
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-10 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        {/* Remember Me */}
                        <div className="flex items-center mt-6">
                            <input type="checkbox" id="remember" className="mr-2" />
                            <label htmlFor="remember" className="text-gray-600">
                                Remember me
                            </label>
                            <a
                                href="/forgot-password"
                                className="ml-auto text-blue-500 hover:underline text-sm"
                            >
                                Forgot password?
                            </a>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-lg mt-6 hover:bg-blue-600 transition"
                        >
                            Login
                        </button>
                    </form>

                    

                    <p className="text-center text-sm text-gray-600 mt-16">
                        Returning user?{" "}
                        <a href="#" className="text-blue-600 underline">
                            Log in here
                        </a>
                    </p>

                </div>

            </div>
        </section>
    )
}

export default SignUp
