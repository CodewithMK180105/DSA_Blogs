import Link from 'next/link';
import React from 'react';
const Register: React.FC = () => {


    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="bg-white p-10 rounded-xl shadow-2xl max-w-lg w-full">
                <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-900">Welcome</h2>
                <form className="space-y-6">
                    <div className="form-group">
                        <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required 
                            className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-lg"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password:</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            required 
                            className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-lg"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="block text-lg font-medium text-gray-700">Confirm Password:</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            required 
                            className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-lg"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full flex justify-center py-3 px-6 border border-transparent rounded-lg shadow-lg text-lg font-semibold text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-8 text-center text-lg text-gray-700">
                    Already have an account? 
                    <Link href="/login" className='text-blue-400'>  login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;


{/* <Link href="/register" className='text-blue-400'>  register</Link> */}