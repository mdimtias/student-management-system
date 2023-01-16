import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import "./Register.css";
import Man from './../../../assets/LogIn/man.jpg';
const Register = () => {
  const {createUser, updateUser} = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
    // const [error, setError] = useState({
    //     name: Boolean,
    //     email: Boolean,
    //     password: Boolean
    // })

    const handleSubmit = async (e)=>{
     
        e.preventDefault();
        setLoading(true)
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(name, email, password, confirmPassword)

        if(name.length < 5){
            console.log("Name must be at least 5 Character")
        }
        // Registration User
    createUser(email, password)
    .then(() => {
      updateUser(name).then(() => {
        toast.success("Registration Successful");
        navigate("../")
      });
    })
    .catch((err) => {
      toast.error("Account Create Fail");
      console.log(err)
    });

    }
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
                      name="name"
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  <div className="mt-4">
                    <label className="block" htmlFor="email">
                      Email
                    </label>
                    <input
                     name="email"
                      type="text"
                      placeholder="Email"
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  <div className="mt-4">
                    <label className="block">Password</label>
                    <input
                      name="password"
                      type="password"
                      placeholder="Password"
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  <div className="mt-4">
                    <label className="block">Confirm Password</label>
                    <input
                      name="confirmPassword"
                      type="password"
                      placeholder="Password"
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  <span className="text-xs text-red-400 hidden">
                    Password must be same!
                  </span>
                  <div className="flex">
                    <button className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                      Create Account
                    </button>
                  </div>
                  <div className="mt-6 text-grey-dark">
                    Already have an account?
                    <Link to="/login" className="text-blue-600 hover:underline">Log In</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="register-banner child items-center hidden md:flex">
            <img
              src={Man}
              alt=""
            />
          </div>
        </div>
        {/* <div className="container">
  
  <div className="child"><p>This is some text to fill the paragraph</p></div>
  <div className="child"><p>This is a lot of text to show you that the other div will stretch to the same height as this one even though they do not have the same amount of text inside them. If you remove text from this div, it will shrink and so will the other div.</p></div>
  
</div> */}
      </div>
    </section>
  );
};

export default Register;
