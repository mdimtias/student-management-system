import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useTitle } from "../../../hooks/useTitle";
const Register = () => {
  useTitle("Register")
  return (
    <section className="register-section min-h-screen flex items-center bg-[#212529]">
      <div className="container mx-auto my-auto px-10 py-10 xl:px-60">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full justify-center items-center bg-[#fff] rounded-lg overflow-hidden">
          <div className="register-form bg-[#111418] h-full">
            <h2 className="text-center text-white text-2xl text-bold py-3">
              Sign up
            </h2>
            <div className="google-sign-up px-5">
              <button
                type="button"
                className="bg-[#EBF4FF] text-black py-1 w-full rounded-2xl"
              >
                <FcGoogle className="inline text-3xl"></FcGoogle> Sign Up With
                Google
              </button>
            </div>
            <div className="flex items-center my-3 px-5">
              <hr className="flex-grow bg-white" />
              <span className="text-center text-[#8c8c8c] px-2">OR Email</span>
              <hr className="flex-grow bg-white" />
            </div>

            <form
              action=""
              className="p-5 flex flex-col justify-center items-center"
            >
              <div className="flex flex-col w-full">
                <input
                  type="text"
                  placeholder="Full Name"
                  id="name"
                  className="input w-full bg-[#232a31] text-white focus:border-[#80bdff] h-12"
                />
              </div>
              <div className="flex flex-col mt-4 w-full">
                <input
                  type="text"
                  placeholder="Email"
                  className="input w-full bg-[#232a31] text-white focus:border-[#80bdff] h-12"
                />
              </div>
              <div className="flex flex-col mt-4 w-full">
                <input
                  type="text"
                  id="password"
                  placeholder="Password"
                  className="input w-full bg-[#232a31] text-white focus:border-[#80bdff] h-12"
                />
              </div>
              <div className="flex flex-col mt-4 w-full">
                <input
                  type="text"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  className="input w-full bg-[#232a31] text-white focus:border-[#80bdff] h-12"
                />
              </div>
              <div className="flex mt-4 w-full">
                <input
                  type="checkbox"
                  defaultChecked
                  className="bg-[#232A31] w-4 h-4 mr-2 mt-1"
                  name=""
                  id=""
                />
                <span className="text-[#dee3e4]">
                  {" "}
                  I agree to the{" "}
                  <Link to="/" className="text-[#0d6efd]">
                    Terms
                  </Link>{" "}
                  and{" "}
                  <Link to="/" className="text-[#0d6efd]">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </div>
              <div className="flex flex-col mt-4 w-full">
                <button type="button" disabled={false} className="btn disabled:bg-[#313641] disabled:text-[#878787] hover:bg-[#025BDF] bg-[#0d6efd]">
                  Create Account
                </button>
              </div>
              <div className="flex flex-col mt-6 w-full">
                <p className="text-[#DEE0BD]">Already have an account? <Link to="./../login" className="hover:text-[#025bdf] text-[#0d6efd]">Sign In</Link></p>
              </div>
            </form>
          </div>
          <div className="register-image hidden h-full md:block">
            <img
              className="w-full h-full"
              src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
