import React, { useState, useEffect } from "react";
import { Navbar, Footer } from "../../components";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { login, logout } from "../../store/authSlice";

const ShareLayout = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  ) : (
    <div>
      <p>the user is not logged in</p>
    </div>
  );
};

export default ShareLayout;
