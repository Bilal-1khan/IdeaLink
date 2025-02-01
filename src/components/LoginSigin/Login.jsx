import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import { login as authLogin } from '../../store/authSlice';

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const session = await authService.login(userData);
      if (session) {
        const user = await authService.getCurrentUser();
        if (user) {
          dispatch(authLogin(user)); // Pass user data to reducer
          navigate("/home");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-[#1f1e1e]">
        <form
          action=""
          onSubmit={handleSubmit}
          className="bg-gray-100 w-[28.125rem] flex flex-col gap-2 items-center p-4 rounded-xl"
        >
          <div>
            <h1 className="font-bold text-2xl cursor-default text-[#272727] my-5">
              Signin to your account
            </h1>
          </div>
          <div className="w-full mb-3">
            <label htmlFor="email" className="inline-block mb-1 pl-1">
              Email :{" "}
            </label>
            <input
          type="text"
          className="w-full px-2 outline-none py-3 rounded-xl border-none"
          placeholder="Email"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
          </div>
          <div className="w-full">
            <label htmlFor="password" className="inline-block mb-1 pl-1">
              Password :{" "}
            </label>
            <input
          className="w-full px-2 outline-none py-3 rounded-xl border-none"
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
          </div>
          <div>
            <button className="bg-[#272727] capitalize font-bold px-4 text-white rounded-xl cursor-pointer py-2">
              login
            </button>
          </div>
          <div>
            <p className="text-slate-400">
              Don't have an account?{" "}
              <span className="text-[#272727] font-bold">
                <Link to="/signup">Signup</Link>
              </span>
            </p>
          </div>
          
          <div className="error">
          {error && <p className="text-red-500">{error}</p>}
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
