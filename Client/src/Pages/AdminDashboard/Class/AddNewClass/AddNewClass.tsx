import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useTitle } from '../../../../hooks/useTitle';
import { Input } from '../../../StyleComponent/Input.styled';
import { Label } from '../../../StyleComponent/Label.styled';
import DashboardTopHeader from '../../DashboardTopHeader/DashboardTopHeader';
const AddNewClass = () => {
    useTitle("Add Students")
     const { register, handleSubmit, reset, formState: { errors } } = useForm();
     const [loading, setLoading] = useState(false)
    
     const onSubmit =async (data:any) =>{
        setLoading(true);

        fetch(`${process.env.REACT_APP_API_URL}/classes`, {
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
            toast.success("Add Classes Successful")
            reset();
           }
           setLoading(false)
        })
        .catch(error=>{
            toast.error("Classes Add Fail")
            setLoading(false)
        })
     }
    return (
        <div className='add-student-section px-5 py-6'>
            <DashboardTopHeader name="Student" title="Add Student"></DashboardTopHeader>
            <form action="" onSubmit={handleSubmit(onSubmit)} className='px-5 py-10 bg-white'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className="relative px-4">
                        <Label htmlFor="">Teacher Name <span className='text-red-500'>*</span></Label>
                         <Input type="text" placeholder='Enter Name' {...register("name", { required: true })} />
                        {errors.name && <span className="text-red-500 text-left block text-bold" >Teacher Name is required</span>}
                    </div>
                    <div className="relative px-4">
                        <Label htmlFor="">ID Number <span className='text-red-500'>*</span></Label>
                         <Input type="number" placeholder="Enter ID Number" {...register("id", { required: true })}  />
                        {errors.id && <span className="text-red-500 text-left block text-bold">ID Number is required</span>}
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
                    <div className="relative px-4 mb-7">
                        <Label htmlFor="">Subject</Label>
                        <select required className="form-input-style select w-full bg-[#F0F1F3]" {...register("subject")} defaultValue="">
                            <option value="" disabled >Please Select Subject</option>
                            <option value="Math">Math</option>
                            <option value="English">English</option>
                            <option value="Science">Science</option>
                            <option value="Bangla">Bangla</option>
                            <option value="Biology">Biology</option>
                        </select>
                    </div>
                    <div className="relative px-4">
                        <Label htmlFor="">Date<span className='text-red-500'>*</span></Label>
                         <Input type="date" value="2000-06-22" min="1950-01-01" max="2050-12-31" placeholder="dd/mm/yyyy" {...register("date")}  />
                    </div>
                    <div className="relative px-4">
                         <Label htmlFor="">Time<span className='text-red-500'>*</span></Label>
                         <Input type="text" placeholder="Time" {...register("time", { required: true })}  />
                        {errors.time && <span className="text-red-500 text-left block text-bold">Time is required</span>}
                    </div>
                    <div className="relative px-4">
                         <Label htmlFor="">Phone<span className='text-red-500'>*</span></Label>
                         <Input type="number" placeholder="Phone" {...register("phone", { required: true })}  />
                        {errors.phone && <span className="text-red-500 text-left block text-bold">Phone is required</span>}
                    </div>
                    <div className="relative px-4">
                         <Label htmlFor="">Email<span className='text-red-500'>*</span></Label>
                         <Input type="email" placeholder="Email" {...register("email", { required: true })}  />
                        {errors.email && <span className="text-red-500 text-left block text-bold">Email is required</span>}
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

export default AddNewClass;