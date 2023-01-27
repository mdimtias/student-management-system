import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { createUserDb } from "../../../hooks/createUserDb";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { useTitle } from "../../../hooks/useTitle";
import { GoogleAuthProvider } from "firebase/auth";
const Google = new GoogleAuthProvider();
const LogIn = () => {
  useTitle("Log In");
  const { signIn, providerLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    signIn(data.email, data.password)
      .then(() => {
        // Save Data Database Users
        createUserDb(data.email);
        toast.success("Log In Successful");
        navigate("./../admin");
        reset();
      })
      .catch((err: any) => {
        toast.error("Incorrect Password");
        console.log(err.message);
      });
  };

  const handleGoogleLogIn = ()=>{
    providerLogin(Google)
    .then((data:any)=>{
      const userData = {name: data?.user?.displayName, email: data?.user?.email }
      // Save Data Database User
      createUserDb(data?.user?.displayName, userData);
      toast.success("Registration Successful");
      navigate("./../admin");
      reset();
    })
  }
  return (
    <section className="register-section min-h-screen flex items-center bg-[#212529]">
      <div className="container mx-auto my-auto px-10 py-10 xl:px-60">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full justify-center items-center bg-[#fff] rounded-lg overflow-hidden">
          <div className="register-form bg-[#111418] h-full">
            <h2 className="text-center text-white text-2xl text-bold py-3">
              Sign In
            </h2>
            <div className="google-sign-up px-5">
              <button
                type="button"
                className="bg-[#EBF4FF] text-black py-1 w-full rounded-2xl"
                onClick={()=>handleGoogleLogIn()}
              >
                <FcGoogle className="inline text-3xl"></FcGoogle> Sign In With
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
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col mt-4 w-full">
                <input
                  type="email"
                  placeholder="Email"
                  className="input w-full bg-[#232a31] text-white focus:border-[#80bdff] h-12"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500 text-left block text-bold">
                    Please Enter Email
                  </span>
                )}
              </div>
              <div className="flex flex-col mt-4 w-full">
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="input w-full bg-[#232a31] text-white focus:border-[#80bdff] h-12"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500 text-left block text-bold">
                    Please Enter Password
                  </span>
                )}
              </div>
              <div className="flex flex-col mt-4 w-full">
                <button className="btn disabled:text-[#878787] hover:bg-[#025BDF] bg-[#0d6efd]">
                  Sign In
                </button>
              </div>
              <div className="flex flex-col mt-6 w-full">
                <p className="text-[#DEE0BD]">
                  Don't have an account?{" "}
                  <Link
                    to="./../register"
                    className="hover:text-[#025bdf] text-[#0d6efd]"
                  >
                    Sign Up
                  </Link>
                </p>
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

export default LogIn;
