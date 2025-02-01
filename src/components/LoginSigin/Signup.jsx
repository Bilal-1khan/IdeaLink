import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import { login as authLogin } from '../../store/authSlice';


const Signup = () => {
  const [userData, setUserData] = useState({
    name: "",
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
      const user = await authService.createAccount(userData);
      if (user) {
        const user = await authService.getCurrentUser();
        dispatch(authLogin(user));
        navigate("/home");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center p-5 bg-[#1f1e1e]">
        <form
          action=""
          onSubmit={handleSubmit}
          className="bg-gray-100 w-[28.125rem] flex flex-col gap-2 items-center p-4 rounded-xl"
        >
          <div>
            <h1 className="font-bold text-2xl cursor-default text-[#272727] my-5">
              Signup to create account
            </h1>
          </div>

          <div className="w-full">
            <label htmlFor="name" className="inline-block mb-1 pl-1">
              Name :{" "}
            </label>
            <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
          id="name"
          className="w-full px-2 outline-none py-3 rounded-xl border-none"
          // ... other props
        />
          </div>
          <div className="w-full my-3">
            <label htmlFor="email" className="inline-block mb-1 pl-1">
              Email :{" "}
            </label>
            <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          className="w-full px-2 outline-none py-3 rounded-xl border-none"
          id="email"
          // ... other props
        />
          </div>
          <div className="w-full">
            <label htmlFor="password" className="inline-block mb-1 pl-1">
              Password :{" "}
            </label>
            <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          className="w-full px-2 outline-none py-3 rounded-xl border-none"
          id="password"
          // ... other props
        />
          </div>
          <div>
            <button className="bg-[#272727] capitalize font-bold px-4 text-white rounded-xl cursor-pointer py-2">
              signup
            </button>
          </div>
          <div>
            <p className="text-slate-400">
              Don't have an account?{" "}
              <span className="text-[#272727] font-bold">
                <Link to="">Login</Link>
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

export default Signup;
