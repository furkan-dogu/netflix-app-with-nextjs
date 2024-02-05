"use client";

import { useAuthContext } from "@/context/AuthContext";
import GoogleIcon from "@/public/icons/GoogleIcon";
import Link from "next/link";
import { useState } from "react";

const Register = () => {
  const { createUser, signUpProvider } = useAuthContext()
  const [info, setInfo] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
  })

  const handleChange = (e) => {
    setInfo({...info, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    const { firstName, lastName, email, password } = info
    const displayName = `${firstName} ${lastName}`
    e.preventDefault()
    createUser(email, password, displayName)
  }

  return (
    <div className="relative h-screen w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center relative top-28 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <form onSubmit={handleSubmit}>
              <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
                Sign Up
              </h2>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  name="firstName"
                  className="peer"
                  type="text"
                  required
                  placeholder=" "
                  onChange={handleChange}
                />
                <label htmlFor="firstName">First Name</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  name="lastName"
                  className="peer"
                  type="text"
                  required
                  placeholder=" "
                  onChange={handleChange}
                />
                <label htmlFor="lastName">Last Name</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  name="email"
                  className="peer"
                  type="email"
                  placeholder=" "
                  required
                  onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  name="password"
                  className="peer"
                  type="password"
                  placeholder=" "
                  required
                  onChange={handleChange}
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="flex justify-center items-center gap-2">
                <p className="text-white text-[11px] sm:text-base">Already have an account?</p>
                <Link
                  className="text-[#ff4b45] text-[11px] sm:text-base py-3 font-[0.75em] cursor-pointer hover:text-gray-500"
                  href="/login"
                >
                  Sign In
                </Link>
              </div>
              <button className="btn-danger" type="submit">
                Register
              </button>
              <button
                className="flex justify-center text-center gap-1 items-center btn-danger"
                type="button"
                onClick={signUpProvider}
              >
                <GoogleIcon color="currentColor" />
                Continue with Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;