import React, { useState } from "react";

const ForgetPass: React.FC = (props : any) => {
    const [email, setEmail] = useState<string | null>(null);

    const handleForgetPass = async (e: React.FormEvent) => {
        alert('Forget Password');
    }

    return (
        <>
            <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
                    <h1 className="text-3xl font-bold text-center text-gray-700">
                        Reset Password
                    </h1>
                    <form className="mt-6">
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Email
                            </label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                required
                            />
                        </div>

                        <div className="mt-2">
                            <button
                                onClick={(e) => handleForgetPass(e)}
                                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                            >
                                Send Email
                            </button>
                        </div>
                    </form>

                    <p className="mt-4 text-sm text-center text-gray-700">
                        <span onClick={() => props.action('login')} className="font-medium text-blue-600 hover:underline cursor-pointer">Back login</span>
                    </p>
                </div>
            </div>
        </>
    )
};

export default ForgetPass;