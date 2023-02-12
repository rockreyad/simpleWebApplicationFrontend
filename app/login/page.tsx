"use client";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { ChangeEvent, useState, useEffect } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (formSuccess) {
      toast.success(formSuccessMessage);
      return;
    }
  }, []);

  const [formSuccess, setFormSuccess] = useState(false);
  const [formSuccessMessage, setFormSuccessMessage] = useState("");

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ): void => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const submitForm = async (event) => {
    // We don't want the page to refresh
    event.preventDefault();

    const data = new FormData();

    // Turn our formData state into data we can use with a form submission
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    let userInfo = {
      email: formData.email,
      password: formData.password,
    };
    const res = await fetch("http://localhost:4000/login", {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    try {
      const response = await res.json();
      console.log(response);
      if (response.status == "FAILED") {
        toast.error(response.message.message);
      }
      if (response.message) {
        toast.success(response.message);
        if (response.data == "admin") {
          setFormSuccess(true);
        }
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="bg-white py-10 px-2 lg:px-10 lg:py-20 xl:px-20 xl:py-40 text-black">
      <ToastContainer />
      <div className="flex flex-col space-y-5 md:w-2/4 mx-auto">
        <h1 className="text-3xl font-bold">Log in</h1>
        <div className="w-full">
          <form
            method="POST"
            onSubmit={submitForm}
            className="font-sans space-y-5"
          >
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
                className="border border-gray-300 px-3 py-2 rounded-md"
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
                className="border border-gray-300 px-3 py-2 rounded-md"
              />
            </div>
            <div className="flex space-x-4 items-center  text-xs">
              <button
                type="submit"
                className="bg-[#D2232A] text-white font-rajdhani font-normal uppercase px-5 py-3"
              >
                Login
              </button>
              <Link href="/reset-password" className="text-gray-500">
                Forgot your password?
              </Link>
            </div>
          </form>
        </div>

        <div className="flex flex-col space-y-3">
          <h3 className="text-xl font-bold">New Customer ?</h3>
          <p className="font-sans text-gray-500 text-sm">
            Sign up for an account to take advantage of order tracking and
            history as well as pre-filled forms during checkout on subsequent
            orders.
          </p>
          <Link
            href="/register"
            className="bg-[#53D3D1] text-white font-rajdhani font-normal uppercase px-5 py-3 w-fit"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
