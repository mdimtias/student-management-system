import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  email: string;
  password: string;
  age: number;
}

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const handleLoging: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };
  return (
    <footer className="text-left">
      <div className="p-10 bg-gray-800 text-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="mb-5">
              <h4 className="text-2xl">EduManage</h4>
              <address>
                Narayanganj, Dhaka <br />
                3117 Road <br />
                Bangladesh <br />
                <strong>Phone: </strong>01555055609 <br />
                <strong>Email: </strong>EduManage@gamil.com
              </address>
            </div>
            <div className="mb-5">
              <h4 className="text-2xl">UseFule Links</h4>
              <ul>
                <li className="hover:text-violet-400 hover:font-bold">Home</li>
                <li className="hover:text-violet-400 hover:font-bold">
                  Student
                </li>
                <li className="hover:text-violet-400 hover:font-bold">
                  Course
                </li>
                <li className="hover:text-violet-400 hover:font-bold">
                  Contract Us
                </li>
                <li className="hover:text-violet-400 hover:font-bold">
                  Sign In
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <h4 className="text-2xl">Our Services</h4>
              <ul>
                <li className="hover:text-violet-400 hover:font-bold">
                  Complete Web Development
                </li>
                <li className="hover:text-violet-400 hover:font-bold">
                  Complete JavaScript course
                </li>
                <li className="hover:text-violet-400 hover:font-bold">
                  Complete Python course
                </li>
                <li className="hover:text-violet-400 hover:font-bold">
                  Complete c++ course
                </li>
                <li className="hover:text-violet-400 hover:font-bold">
                  Complete rust course
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <h4 className="text-2xl">Join Our Newsletter</h4>
              <p>
                Join 25,000 others and never miss out on new tips, tutorials,
                and more
              </p>
              <form onSubmit={handleSubmit(handleLoging)}>
                <div className="form-control w-full ">
                  <label className="label block m-0">
                    <span className="label-text">Enter your work Email</span>
                  </label>
                  <input
                    type="email"
                    className=" my-2 p-1 rounded-l"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <p className="text-red-500">Email is required</p>
                  )}
                  <input
                    className="bg-violet-700 hover:bg-violet-400  text-white hover:text-black mt-5  font-bold  rounded-r p-1"
                    type="submit"
                    value={`Start Free Trial`}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-5 bg-gray-800 text-gray-200">
        <div>
          <div>
            <p>
              Copyright{" "}
              <strong>
                <span>EduManage</span>
              </strong>
              . All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
