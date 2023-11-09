import { useState } from "react";

const Register = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        alert('Register');
    }


    return (
        <>
            <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
                    <h1 className="text-3xl font-bold text-center text-gray-700">
                        Register to My Shop
                    </h1>
                    <form className="mt-6">
                        <div className="mb-4">
                            <label
                                htmlFor="text"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                First Name
                            </label>
                            <input
                                onChange={(e) => setFirstName(e.target.value)}
                                type="email"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="text"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Last Name
                            </label>
                            <input
                                onChange={(e) => setLastName(e.target.value)}
                                type="email"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="text"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Username
                            </label>
                            <input
                                onChange={(e) => setUserName(e.target.value)}
                                type="email"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                required
                            />
                        </div>
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
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Password
                            </label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                required
                            />
                        </div>
                        <div className="mt-2">
                            <button
                                onClick={(e) => handleRegister(e)}
                                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                            >
                                Register
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

export default Register;