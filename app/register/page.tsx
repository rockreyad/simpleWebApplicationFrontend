"use client";

import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const submitRegister = async (event: ChangeEvent) => {
    event.preventDefault();

    const data = new FormData();

    // Turn our formData state into data we can use with a form submission
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    let userInfo = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };
    const res = await fetch("http://localhost:4000/register", {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    try {
      const response = await res.json();
      if (response.status) {
        toast.success("Registration successful");
      } else {
        toast.error("Registration failed");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };
  return (
    <div className="bg-white py-10 px-2 lg:px-10 lg:py-20 xl:px-20 xl:py-40 text-black">
      <ToastContainer />
      <div className="flex flex-col space-y-5 md:w-2/4 mx-auto">
        <h1 className="text-3xl font-bold text-center normal-case">Sign up</h1>
        <div className="w-full">
          <form onSubmit={submitRegister} className="font-sans space-y-6 ">
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-semibold" htmlFor="First name">
                First name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                onChange={handleInput}
                value={formData.firstName}
                placeholder="Enter your first name"
                className="border border-gray-300 px-3 py-2"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-semibold" htmlFor="Last name">
                Last name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                onChange={handleInput}
                value={formData.lastName}
                placeholder="Enter your last name"
                className="border border-gray-300 px-3 py-2"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-semibold" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleInput}
                value={formData.email}
                placeholder="your@email.com"
                className="border border-gray-300 px-3 py-2"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-semibold" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleInput}
                value={formData.password}
                placeholder="********"
                className="border border-gray-300 px-3 py-2"
              />
            </div>
            <div className="flex space-x-4 items-center  text-xs">
              <button
                type="submit"
                className="bg-[#D2232A] text-white font-rajdhani font-normal uppercase px-5 py-3"
              >
                Register
              </button>
              <Link href="/login" className="text-gray-500">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
