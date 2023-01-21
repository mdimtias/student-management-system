import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import "./Register.css";
import Man from "./../../../assets/LogIn/man.jpg";
import { createUserDb } from "../../../hooks/createUserDb";
const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState({
    name: "",
    email: " ",
    password: "",
    confirmPassword: "",
    disabled: true,
  });

  const [user, setUser] = useState({ password: "", confirmPassword: "" });
  const handleError = (e) => {
    const name = e.target.name;
    if (e.target.name === "name") {
      if (e.target.value.length < 4) {
        setError({ ...error, name: "*Please enter your name!" });
        console.log("ami");
      } else if (e.target.value === "") {
        setError({ ...error, name: "*Name must be at least 4 Character" });
      } else if (e.target.value.length >= 4) {
        setError({ ...error, name: "" });
      } else {
        setError({ ...error, name: "" });
      }
    }

    // Email Validate
    if (name === "email") {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (e.target.value === "") {
        setError({ ...error, email: "*Please enter your email!" });
      } else if (!re.test(e.target.value)) {
        setError({
          ...error,
          email: "*Please enter your correct email address!",
        });
      } else {
        setError({ ...error, email: "" });
      }
    }

    // Password Validate
    if (name === "password" || name === "confirmPassword") {
      if (user.password === "") {
        setError({ ...error, password: "*Please enter your new password!" });
      } else if (user.password.length < 6) {
        setError({
          ...error,
          password: "**Password length must be at least 6 characters",
        });
      } else {
        setError({ ...error, password: "" });
      }
    }
  };

  // Confirm Password Validation
  const handleConfirmPassword = (e) => {
    setUser({ ...user, confirmPassword: e.target.value });
    const userConfirmPassword = e.target.value;
    const passwordLength = user.password.length;
    if (passwordLength <= userConfirmPassword.length) {
      if (user.password !== userConfirmPassword) {
        setError({
          ...error,
          confirmPassword: "Your Password don't match, enter the same password",
        });
      } else {
        setError({ ...error, confirmPassword: "" });
      }
    }
  };
  useEffect(() => {
    if (
      error.name.length === 0 &&
      error.email.length === 0 &&
      error.password.length === 0 &&
      error.confirmPassword.length === 0
    ) {
      setError({ ...error, disabled: false });
    } else {
      setError({ ...error, disabled: true });
    }
  }, [error.name, error.email, error.password, error.confirmPassword]);

  const handleName = (e) => {
    if (e.target.value.length >= 4) {
      setError({ ...error, name: "" });
    }
  };
  const handleSubmit = async (e) => {
    console.log(error);
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const userData = { name, email, role: "student" };

    // Name Validation
    if (name === "") {
      setError({ ...error, name: "*Please enter your name!" });
      return;
    } else if (name.length < 4) {
      setError({ ...error, name: "*Name must be at least 4 Character" });
      return;
    } else {
      setError({ ...error, name: "" });
    }

    // Registration User
    createUser(email, password)
      .then(() => {
        updateUser(name).then(() => {
          createUserDb(email, userData);
          toast.success("Registration Successful");
          navigate("/");
        });
      })
      .catch((err) => {
        toast.error("Account Create Fail!");
        console.log(err);
      });
  };
  return (
    <section className="register-section flex items-center justify-center min-h-screen">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:px-32 xl:60 register-container">
          <div className="register-form child">
            <div className="px-8 py-6 text-left bg-white shadow-lg">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-20 h-20 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-center">Join us</h3>
              <form action="" onSubmit={handleSubmit}>
                <div className="mt-4">
                  <div>
                    <label className="block" htmlFor="Name">
                      Name
                    </label>
                    <input
                      onChange={handleName}
                      name="name"
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  <span className="text-red-500 text-sm">{error.name}</span>
                  <div className="mt-4">
                    <label className="block" htmlFor="email">
                      Email
                    </label>
                    <input
                      onBlur={handleError}
                      name="email"
                      type="text"
                      placeholder="Email"
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  <span className="text-red-500 text-sm">{error.email}</span>
                  <div className="mt-4">
                    <label className="block">Password</label>
                    <input
                      onBlur={handleError}
                      onChange={(e) => {
                        setUser({ ...user, password: e.target.value });
                      }}
                      name="password"
                      type="password"
                      placeholder="Password"
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  <span className="text-red-500 text-sm">{error.password}</span>
                  <div className="mt-4">
                    <label className="block">Confirm Password</label>
                    <input
                      onBlur={handleError}
                      onChange={handleConfirmPassword}
                      name="confirmPassword"
                      type="password"
                      placeholder="Password"
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  <span className="text-red-500 text-sm">
                    {error.confirmPassword}
                  </span>
                  <div className="flex">
                    <button
                      className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                      disabled={error.disabled}
                    >
                      Create Account
                    </button>
                  </div>
                  <div className="mt-6 text-grey-dark">
                    Already have an account?
                    <Link to="/login" className="text-blue-600 hover:underline">
                      Log In
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="register-banner child items-center hidden md:flex">
            <img src={Man} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
