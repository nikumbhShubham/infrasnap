import React from 'react'

const SignUp = () => {
    return (
        <section className=' font-montserrat'>
            <div className='flex flex-col lg:flex-row items-center justify-center p-4 min-h-screen bg-blue-50' >
                <div
                    className='w-full max-w-md lg:max-w-lg bg-white rounded-lg shadow-lg p-8'
                >
                    <h2 className='text-xl font-bold text-gray-800 mb-4 font-montserrat' >Begin Your Journey</h2>
                    <form>
                        <div className='flex flex-col lg:flex-row justify-around items-center'>


                            <div className='mb-4'>
                                <label htmlFor="First-name"
                                    className='block text-sm font-medium text-gray-700'
                                >
                                    First Name
                                </label>
                                <input type="text" id='first-name' name='firstname' placeholder='Input first name' className='mt-1 block w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-lg shadow-sm' />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="Last-name"
                                    className='block text-sm font-medium text-gray-700'
                                >
                                    Last Name
                                </label>
                                <input type="text" id='last-name' name='lastname' placeholder='Input first name' className='mt-1 block w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-lg shadow-sm' />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="example.email@gmail.com"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Enter at least 8+ characters"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                                <span className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500">
                                    👁
                                </span>
                            </div>
                        </div >

                        <div className='flex items-center mb-6'>
                            <input type="checkbox"
                                id='terms'
                                className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer'
                            />

                            <label htmlFor="terms"
                                className='ml-2 block text-sm text-gray-700'
                            >
                                By signing up, I agree with the <span className='text-blue-600 underline'>Terms of use and Privacy policy</span>
                            </label>
                        </div>

                        <button type='submit'
                            className='w-full bg-blue-500 text-white px-4 py-2 font-montserrat font-semibold rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300'
                        >
                            Register
                        </button>
                    </form>
                    <div className='flex items-center justify-center mt-4'>
                        <span className='text-sm text-gray-500'>----------------------OR----------------------</span>
                    </div>
                    <div className='flex justify-center mt-4 space-x-4'>
                        <button className='bg-red-500 text-white px-4 py-2 rounded-lg'>Google</button>
                        <button className="bg-blue-700 text-white px-4 py-2 rounded-lg">facebook</button>
                        <button className="bg-gray-800 text-white px-4 py-2 rounded-lg">Github</button>
                    </div>

                    <p className="text-center text-sm text-gray-600 mt-6">
                        Returning user?{" "}
                        <a href="#" className="text-blue-600 underline">
                            Log in here
                        </a>
                    </p>

                </div>
                <div className='mt-8 lg:mt-0 lg:ml-16 text-center lg:text-left '>
                    <h1 className='text-3xl lg:text-6xl text-gray-800 font-semibold'>Come join us</h1>
                    <ul className='mt-12 space-y-5'>
                        <li className='flex items-center space-x-3 text-gray-600'>
                            <span>💡</span>
                            <span className='text-lg'>Explore articles, tutorials, and guides on diverse subjects</span>
                        </li>
                        <li className='flex items-center space-x-3 text-gray-600'>
                            <span>⏰</span>
                            <span className='text-lg'>Learn at your own pace and access educational resources anytime</span>
                        </li>
                        <li className='flex items-center space-x-3 text-gray-600'>
                            <span>🌍</span>
                            <span className='text-lg'>Engage with a community of learners and share insights</span>
                        </li>

                    </ul>
                </div>
            </div>
        </section>
    )
}

export default SignUp
