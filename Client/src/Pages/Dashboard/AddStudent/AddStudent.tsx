import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { imgUpload } from '../../../hooks/imageUpload';
import { useTitle } from '../../../hooks/useTitle';
import "./AddStudent.css"
const AddStudent = () => {
    useTitle("Add Student")
     const { register, handleSubmit, reset, formState: { errors } } = useForm();
    
     const onSubmit =async (data:any) =>{
        if(data.studentPhoto[0]){
            const image = data.studentPhoto[0];
            const formData = new FormData();
            formData.append("image", image);
            const imageUploadServer = await imgUpload(formData);
            data.studentPhoto = imageUploadServer;
        }else{
            data.studentPhoto = "";
        }

        fetch("http://localhost:8080/students", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
           if(data.data.acknowledged){
            toast.success("Add Student Successful")
            reset();
            console.log(data)
           }
        })
        .catch(error=>{
            console.log(error)
            toast.error("Student Add Fail")
        })
     }
    return (
        <div className='add-student-section px-5 py-6'>
            <div className="breadcrumb-area flex justify-between pb-6">
                <h2 className="text-left text-bold text-black text-2xl">Add Student</h2>
                <div className='flex gap-1'>
                    <h3 className="text-left text-bold text-black text-2xl">Student</h3>
                    <h4 className="text-left text-bold text-[#6C757D] text-2xl">/ Add Student</h4>
                </div>
            </div>
            <form action="" onSubmit={handleSubmit(onSubmit)} className='px-5 py-10 bg-white'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className="form-input-container">
                        <label htmlFor="">Full Name <span className='text-red-500'>*</span></label>
                        <input type="text" placeholder="Enter Full Name" {...register("name", { required: true })} className="input form-input-style w-full" />
                        {errors.name && <span className="text-red-500 text-left block text-bold">Name is required</span>}
                    </div>
                    <div className="form-input-container">
                        <label htmlFor="">Roll <span className='text-red-500'>*</span></label>
                        <input type="number" placeholder="Enter Roll Number" {...register("roll", { required: true })} className="input form-input-style w-full" />
                        {errors.roll && <span className="text-red-500 text-left block text-bold">Roll Number is required</span>}
                    </div>
                    <div className="form-input-container">
                        <label htmlFor="">Gender <span className='text-red-500'>*</span></label>
                        <select className="form-input-style select w-full"  {...register("gender", { required: true })}  defaultValue="">
                            <option value="" disabled  className="text-[#B4B4B4]">Select Gender</option>
                            <option value="Male" className="text-black">Male</option>
                            <option value="Female" className="text-black">Female</option>
                            <option value="Other" className="text-black">Other</option>
                        </select>
                        {errors.gender && <span className="text-red-500 text-left block text-bold">Gender is required</span>}
                    </div>
                    <div className="form-input-container">
                        <label htmlFor="">Father Name <span className='text-red-500'>*</span></label>
                        <input type="text" placeholder="Enter Father Name" {...register("fatherName", { required: true })}  className="input form-input-style w-full" />
                        {errors.fatherName && <span className="text-red-500 text-left block text-bold">Father Name is required</span>}
                    </div>
                    <div className="form-input-container">
                        <label htmlFor="">Mother Name <span className='text-red-500'>*</span></label>
                        <input type="text" placeholder="Enter Mother Name" {...register("motherName", { required: true })} className="input form-input-style w-full" />
                        {errors.motherName && <span className="text-red-500 text-left block text-bold">Mother Name is required</span>}
                    </div>
                    <div className="form-input-container">
                        <label htmlFor="">Date Of Birth <span className='text-red-500'>*</span></label>
                        <input type="date" placeholder="dd/mm/yyyy" {...register("dateOfBirth", { required: true })} className="input form-input-style w-full" />
                        {errors.dateOfBirth && <span className="text-red-500 text-left block text-bold">Date Of Birth is required</span>}
                    </div>
                    <div className="form-input-container">
                        <label htmlFor="">Blood Group</label>
                        <select className="form-input-style select w-full" {...register("bloodGroup")} defaultValue="">
                            <option value="" disabled >Please Select Blood Group </option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                    </div>
                    <div className="form-input-container">
                        <label htmlFor="">Religion</label>
                        <select className="form-input-style select w-full" {...register("religion", { required: true })} defaultValue="">
                            <option value="" disabled >Please Select Religion</option>
                            <option value="Islam">Islam</option>
                            <option value="Hindu">Hindu</option>
                            <option value="Christian">Christian</option>
                            <option value="Buddhism">Buddhism</option>
                            <option value="Other">Other</option>
                        </select>
                        {errors.religion && <span className="text-red-500 text-left block text-bold">Religion name is required</span>}
                    </div>
                    <div className="form-input-container">
                        <label htmlFor="">Class <span className='text-red-500'>*</span></label>
                        <select className="form-input-style select w-full" {...register("class", { required: true })} defaultValue="">
                            <option value="" disabled >Please Select Class *</option>
                            <option value="Play">Play</option>
                            <option value="Nursery">Nursery</option>
                            <option value="One">One</option>
                            <option value="Two">Two</option>
                            <option value="Three">Three</option>
                            <option value="Four">Four</option>
                            <option value="Five">Five</option>
                            <option value="Six">Six</option>
                            <option value="Seven">Seven</option>
                            <option value="Eight">Eight</option>
                            <option value="Nine">Nine</option>
                            <option value="Ten">Ten</option>
                            <option value="Eleven">Eleven</option>
                            <option value="Twelve">Twelve</option>
                        </select>
                        {errors.class && <span className="text-red-500 text-left block text-bold">Class name is required</span>}
                    </div>
                    <div className="form-input-container">
                        <label htmlFor="">Section</label>
                        <select className="form-input-style select w-full" {...register("section")} defaultValue="">
                            <option value="" disabled >Please Select Section</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                        </select>
                    </div>
                    <div className="form-input-container">
                        <label htmlFor="">Mobile <span className='text-red-500'>*</span></label>
                        <input type="number" placeholder="Enter Phone Number" {...register("mobile", { required: true })}  className="input form-input-style w-full" />
                          {errors.mobile && <span className="text-red-500 text-left block text-bold">Mobile number is required</span>}
                    </div>
                    <div className="form-input-container">
                        <label htmlFor="">Address<span className='text-red-500'>*</span></label>
                        <input type="text" placeholder="Enter Address" {...register("address", { required: true })}  className="input form-input-style w-full" />
                        {errors.address && <span className="text-red-500 text-left block text-bold">Address Name is required</span>}
                    </div>
                    <div className="form-input-container">
                        <label htmlFor="">Admission ID<span className='text-red-500'>*</span></label>
                        <input type="text" placeholder="Enter Admission ID" {...register("admissionId", { required: true })}  className="input form-input-style w-full" />
                          {errors.admissionId && <span className="text-red-500 text-left block text-bold">Admission Id Number is required</span>}
                    </div>
                    <div className="form-input-container">
                        <label htmlFor="">Email <span className='text-red-500'>*</span></label>
                        <input type="email" placeholder="Enter Email" {...register("email", { required: true })}  className="input form-input-style w-full" />
                        {errors.email && <span className="text-red-500 text-left block text-bold">Email Address is required</span>}
                    </div>
                </div>
              <div className="flex">
                    <div className="form-input-container">
                        <textarea className="form-input-style student-form-textarea p-3 w-[400px]" {...register("bio")}  placeholder="Bio"></textarea>
                    </div>
                    <div className="text-left">
                        <label htmlFor="" className='font-bold text-black text-lg'>Upload Student Photo (150 X 150) <span className='text-red-500 mt-5'>*</span></label>
                        <input type="file" {...register("studentPhoto")}  accept="image/*" className="mt-3 file-input w-full" />
                    </div>
              </div>
               <div className="form-button">
                <button className='save-btn pr-3'>Save</button>
                <button className='reset-btn' onClick={() =>reset()}>Reset</button>
               </div>
            </form>
        </div>
    );
};

export default AddStudent;