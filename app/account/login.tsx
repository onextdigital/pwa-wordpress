"use client";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { useState, useEffect } from "react";

import useCheckLogin  from '../../utils/functions';
import createApolloClient from "../../ApolloClient";
import LOGIN_USER from "../../api/api_user";

import Loading from '@/components/Loading';

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    const client = createApolloClient();

      client
        .mutate({
          mutation: LOGIN_USER.LOGIN_USER,
          variables: {
            username: username,
            password: password,
          },
        })
        .then((res) => {
          // check if login success, save token, name to localstorage and redirect to /account
          if (res.data.login.authToken) {
              localStorage.setItem("token", res.data.login.authToken);
              localStorage.setItem("name", res.data.login.user.name);

              // set isLogin to true
              props.login(true);
              setLoading(false);
          }
          else {
              alert('Login failed!');
              setLoading(false);
          }
          
        })
        .catch((err) => {
            alert('Username or password is incorrect!');
            setLoading(false);
        });
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {loading && <Loading />}
      <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-bold text-center text-gray-700">
          Login to My Shop
        </h1>
        <form className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="text"
              className="block text-sm font-semibold text-gray-800"
            >
              Username
            </label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              required
            />
          </div>
          <div className="mb-2">
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
          <span onClick={() => props.action('forgot-pass')} className="text-xs text-blue-600 hover:underline cursor-pointer">Forget Password?</span>
          <div className="mt-2">
            <button
              onClick={(e) => handleLogin(e)}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-4 text-sm text-center text-gray-700">
          Don't have an account?{" "}
          <span onClick={() => props.action('register')} className="font-medium text-blue-600 hover:underline cursor-pointer">Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
