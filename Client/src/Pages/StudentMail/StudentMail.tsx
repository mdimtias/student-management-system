import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Student from "../../ImageFile/myprotfolio011 (1).png";

interface IFormInput {
  email: string;
  password: string;
  age: number;
}
const StudentMail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const handleLoging: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-gradient-to-r from-cyan-100 to-blue-200">
      <div className="text-left w-[1280px] mx-auto flex ">
        <div className="w-1/2 flex justify-center items-center">
          <div>
            <div>
              <h1 className="text-3xl">Happay New Year!</h1>
              <p className="text-xl">
                Start the new year with a beautiful, user-friendly Student
                Information System with powerful features that help your team
                thrive.
              </p>
            </div>
            <div>
              <div className="py-7 text-left">
                <form onSubmit={handleSubmit(handleLoging)}>
                  <div className="form-control w-full ">
                    <label className="label block m-0">
                      <span className="label-text">Enter your work Email</span>
                    </label>
                    <input
                      type="email"
                      className="border w-3/5 my-2 p-3 rounded-lg rounded-r"
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <p className="text-red-500">Email is required</p>
                    )}
                    <input
                      className="bg-violet-700 hover:bg-violet-400  text-white hover:text-black mt-5 p-3 font-bold rounded-lg rounded-l"
                      type="submit"
                      value={`Start Free Trial`}
                    />
                  </div>
                </form>
              </div>
              <p className="text-gray-500">
                Fully functional 15-day trial. No credit card required.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div>
            <img src={Student} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentMail;
