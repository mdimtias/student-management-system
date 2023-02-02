import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { imgUpload } from '../../../../hooks/imageUpload';
import { useTitle } from '../../../../hooks/useTitle';
import { Input } from '../../../StyleComponent/Input.styled';
import { Label } from '../../../StyleComponent/Label.styled';
import { Textarea } from '../../../StyleComponent/Textarea.styled';
import DashboardTopHeader from '../../DashboardTopHeader/DashboardTopHeader';
import "./AddStudent.css"
const AddStudent = () => {
    useTitle("Add Students")
     const { register, handleSubmit, reset, formState: { errors } } = useForm();
     const [loading, setLoading] = useState(false)
    
     const onSubmit =async (data:any) =>{
        setLoading(true);
        if(data.studentPhoto[0]){
            const image = data.studentPhoto[0];
            const formData = new FormData();
            formData.append("image", image);
            const imageUploadServer = await imgUpload(formData);
            data.studentPhoto = imageUploadServer;
        }else{
            data.studentPhoto = "";
        }

        fetch(`${process.env.REACT_APP_API_URL}/students`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                'authorization': `${localStorage.getItem("token")}`
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
           if(data.data.acknowledged){
            toast.success("Add Student Successful")
            reset();
           }
           setLoading(false)
        })
        .catch(error=>{
            toast.error("Student Add Fail")
            setLoading(false)
        })
     }
    return (
        <div className='add-student-section px-5 py-6'>
            <DashboardTopHeader name="Student" title="Add Student"></DashboardTopHeader>
            <form action="" onSubmit={handleSubmit(onSubmit)} className='px-5 py-10 bg-white'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className="relative px-4">
                        <Label htmlFor="">Full Name <span className='text-red-500'>*</span></Label>
                        {/*  <Input type="text" placeholder="Enter Full Name" {...register("name", { required: true })}  /> */}
                         <Input type="text" placeholder='Enter Name' {...register("name", { required: true })} />
                        {errors.name && <span className="text-red-500 text-left block text-bold" >Name is required</span>}
                    </div>
                    <div className="relative px-4">
                        <Label htmlFor="">Roll <span className='text-red-500'>*</span></Label>
                         <Input type="number" placeholder="Enter Roll Number" {...register("roll", { required: true })}  />
                        {errors.roll && <span className="text-red-500 text-left block text-bold">Roll Number is required</span>}
                    </div>
                    <div className="relative px-4 mb-7">
                        <Label htmlFor="">Gender <span className='text-red-500'>*</span></Label>
                        <select required className="form-input-style select w-full bg-[#F0F1F3]"  {...register("gender", { required: true })}  defaultValue="">
                            <option value="" disabled className="text-[#B4B4B4]">Select Gender</option>
                            <option value="Male" className="text-black">Male</option>
                            <option value="Female" className="text-black">Female</option>
                            <option value="Other" className="text-black">Other</option>
                        </select>
                        {errors.gender && <span className="text-red-500 text-left block text-bold">Gender is required</span>}
                    </div>
                    <div className="relative px-4">
                        <Label htmlFor="">Father Name <span className='text-red-500'>*</span></Label>
                         <Input type="text" placeholder="Enter Father Name" {...register("fatherName", { required: true })}   />
                        {errors.fatherName && <span className="text-red-500 text-left block text-bold">Father Name is required</span>}
                    </div>
                    <div className="relative px-4">
                        <Label htmlFor="">Mother Name <span className='text-red-500'>*</span></Label>
                         <Input type="text" placeholder="Enter Mother Name" {...register("motherName", { required: true })}  />
                        {errors.motherName && <span className="text-red-500 text-left block text-bold">Mother Name is required</span>}
                    </div>
                    <div className="relative px-4">
                        <Label htmlFor="">Date Of Birth <span className='text-red-500'>*</span></Label>
                         <Input type="date" value="2000-06-22" min="1950-01-01" max="2050-12-31" placeholder="dd/mm/yyyy" {...register("dateOfBirth", { required: true })}  />
                        {errors.dateOfBirth && <span className="text-red-500 text-left block text-bold">Date Of Birth is required</span>}
                    </div>
                    <div className="relative px-4 mb-7">
                        <Label htmlFor="">Blood Group</Label>
                        <select required className="form-input-style select w-full bg-[#F0F1F3]" {...register("bloodGroup")} defaultValue="">
                            <option value="" disabled >Please Select Blood Group </option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                    </div>
                    <div className="relative px-4 mb-7">
                        <Label htmlFor="">Religion</Label>
                        <select required className="form-input-style select w-full bg-[#F0F1F3]" {...register("religion", { required: true })} defaultValue="">
                            <option value="" disabled >Please Select Religion</option>
                            <option value="Islam">Islam</option>
                            <option value="Hindu">Hindu</option>
                            <option value="Christian">Christian</option>
                            <option value="Buddhism">Buddhism</option>
                            <option value="Other">Other</option>
                        </select>
                        {errors.religion && <span className="text-red-500 text-left block text-bold">Religion name is required</span>}
                    </div>
                    <div className="relative px-4 mb-7">
                        <Label htmlFor="">Class <span className='text-red-500'>*</span></Label>
                        <select required className="form-input-style select w-full bg-[#F0F1F3]" {...register("class", { required: true })} defaultValue="">
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
                    <div className="relative px-4 mb-7">
                        <Label htmlFor="">Section</Label>
                        <select required className="form-input-style select w-full bg-[#F0F1F3]" {...register("section")} defaultValue="">
                            <option value="" disabled >Please Select Section</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                        </select>
                    </div>
                    <div className="relative px-4">
                        <Label htmlFor="">Mobile <span className='text-red-500'>*</span></Label>
                         <Input type="number" placeholder="Enter Phone Number" {...register("phone", { required: true })}   />
                          {errors.phone && <span className="text-red-500 text-left block text-bold">Mobile number is required</span>}
                    </div>
                    <div className="relative px-4">
                        <Label htmlFor="">Address<span className='text-red-500'>*</span></Label>
                         <Input type="text" placeholder="Enter Address" {...register("address", { required: true })}   />
                        {errors.address && <span className="text-red-500 text-left block text-bold">Address Name is required</span>}
                    </div>
                    <div className="relative px-4">
                        <Label htmlFor="">Admission ID<span className='text-red-500'>*</span></Label>
                         <Input type="text" placeholder="Enter Admission ID" {...register("admissionId", { required: true })}   />
                          {errors.admissionId && <span className="text-red-500 text-left block text-bold">Admission Id Number is required</span>}
                    </div>
                    <div className="relative px-4">
                        <Label htmlFor="">Email <span className='text-red-500'>*</span></Label>
                         <Input type="email" placeholder="Enter Email" {...register("email", { required: true })}   />
                        {errors.email && <span className="text-red-500 text-left block text-bold">Email Address is required</span>}
                    </div>
                </div>
              <div className="flex flex-col md:flex-row px-4 gap-0 md:gap-4">
                    <div className="relative w-full">
                        <Textarea {...register("bio")}  placeholder="Bio"></Textarea>
                    </div>
                    <div className="text-left w-full mb-7">
                        <label htmlFor="" className='font-bold text-black text-lg'>Upload Student Photo (150 X 150) <span className='text-red-500 mt-5'>*</span></label>
                         <input type="file" {...register("studentPhoto")}  accept="image/*" className="mt-3 file-input w-full" />
                    </div>
              </div>
               <div className="form-button">
                <button className='save-btn pr-3' disabled={loading}>{loading? "Saving..." : "Save"}</button>
                <button className='reset-btn' onClick={() =>reset()}>Reset</button>
               </div>
            </form>
        </div>
    );
};

export default AddStudent;