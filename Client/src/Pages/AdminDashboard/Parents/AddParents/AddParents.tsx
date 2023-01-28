import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { imgUpload } from '../../../../hooks/imageUpload';
import { useTitle } from '../../../../hooks/useTitle';
import { Input } from '../../../StyleComponent/Input.styled';
import { Label } from '../../../StyleComponent/Label.styled';
import DashboardTopHeader from '../../DashboardTopHeader/DashboardTopHeader';

const AddParents = () => {
    useTitle("Add Parents")
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
   
    const onSubmit =async (data:any) =>{
       if(data.parentsPhoto[0]){
           const image = data.parentsPhoto[0];
           const formData = new FormData();
           formData.append("image", image);
           const imageUploadServer = await imgUpload(formData);
           data.parentsPhoto = imageUploadServer;
       }else{
           data.parentsPhoto = "";
       }

       fetch(`${process.env.REACT_APP_API_URL}/parents`, {
           method: "POST",
           headers: {
               "content-type": "application/json"
           },
           body: JSON.stringify(data)
       })
       .then(res=>res.json())
       .then(data=>{
          if(data.data.acknowledged){
           toast.success("Add Parents Successful")
           reset();
           console.log(data)
          }
       })
       .catch(error=>{
           console.log(error)
           toast.error("Parents Add Fail")
       })
    }
    return (
        <div className='add-parents-section px-5 py-6'>
            <DashboardTopHeader name="Parent" title="Add Parent"></DashboardTopHeader>
            <form action="" onSubmit={handleSubmit(onSubmit)} className='px-5 py-10 bg-white'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className="form-input-container">
                        <Label htmlFor="">Full Name <span className='text-red-500'>*</span></Label>
                        <Input type="text" placeholder="Enter Full Name" {...register("name", { required: true })}  />
                        {errors.name && <span className="text-red-500 text-left block text-bold">Name is required</span>}
                    </div>
                    <div className="form-input-container">
                        <Label htmlFor="">Gender <span className='text-red-500'>*</span></Label>
                        <select className="form-input-style select w-full"  {...register("gender", { required: true })}  defaultValue="">
                            <option value="" disabled  className="text-[#B4B4B4]">Select Gender</option>
                            <option value="Male" className="text-black">Male</option>
                            <option value="Female" className="text-black">Female</option>
                            <option value="Other" className="text-black">Other</option>
                        </select>
                        {errors.gender && <span className="text-red-500 text-left block text-bold">Gender is required</span>}
                    </div>
                    <div className="form-input-container">
                        <Label htmlFor="">Occupation <span className='text-red-500'>*</span></Label>
                        <Input type="text" placeholder="Enter Father Name" {...register("occupation", { required: true })}   />
                        {errors.occupation && <span className="text-red-500 text-left block text-bold">Occupation is required</span>}
                    </div>
                    <div className="form-input-container">
                        <Label htmlFor="">Father Name <span className='text-red-500'>*</span></Label>
                        <Input type="text" placeholder="Enter Father Name" {...register("fatherName", { required: true })}   />
                        {errors.fatherName && <span className="text-red-500 text-left block text-bold">Father Name is required</span>}
                    </div>
                    <div className="form-input-container">
                        <Label htmlFor="">Mother Name <span className='text-red-500'>*</span></Label>
                        <Input type="text" placeholder="Enter Mother Name" {...register("motherName", { required: true })}  />
                        {errors.motherName && <span className="text-red-500 text-left block text-bold">Mother Name is required</span>}
                    </div>
                    <div className="form-input-container">
                        <Label htmlFor="">Date Of Birth <span className='text-red-500'>*</span></Label>
                        <Input type="date" placeholder="dd/mm/yyyy" {...register("dateOfBirth", { required: true })}  />
                        {errors.dateOfBirth && <span className="text-red-500 text-left block text-bold">Date Of Birth is required</span>}
                    </div>
                    <div className="form-input-container">
                        <Label htmlFor="">Blood Group</Label>
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
                        <Label htmlFor="">Religion</Label>
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
                        <Label htmlFor="">Mobile <span className='text-red-500'>*</span></Label>
                        <Input type="number" placeholder="Enter Phone Number" {...register("phone", { required: true })}   />
                          {errors.phone && <span className="text-red-500 text-left block text-bold">Mobile number is required</span>}
                    </div>
                    <div className="form-input-container">
                        <Label htmlFor="">Address<span className='text-red-500'>*</span></Label>
                        <Input type="text" placeholder="Enter Address" {...register("address", { required: true })}   />
                        {errors.address && <span className="text-red-500 text-left block text-bold">Address Name is required</span>}
                    </div>
                    <div className="form-input-container">
                        <Label htmlFor="">Email <span className='text-red-500'>*</span></Label>
                        <Input type="email" placeholder="Enter Email" {...register("email", { required: true })}   />
                        {errors.email && <span className="text-red-500 text-left block text-bold">Email Address is required</span>}
                    </div>
                </div>
              <div className="flex">
                    <div className="form-input-container">
                        <textarea className="form-input-style student-form-textarea p-3 w-[400px]" {...register("bio")}  placeholder="Bio"></textarea>
                    </div>
                    <div className="text-left">
                        <label htmlFor="" className='font-bold text-black text-lg'>Upload Student Photo (150 X 150) <span className='text-red-500 mt-5'>*</span></label>
                        <input type="file" {...register("parentsPhoto")}  accept="image/*" className="mt-3 file-input w-full" />
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

export default AddParents;