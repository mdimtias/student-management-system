import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Input } from "../../../StyleComponent/Input.styled";
import { Label } from "../../../StyleComponent/Label.styled";
import { Textarea } from "../../../StyleComponent/Textarea.styled";
import Loader from "../../../../SharedPage/Loader/Loader";
import { ImCross } from "react-icons/im";
import useImageUpload from "../../../../hooks/useImageUpload";

type EditProps = {
  id: string;
  setEditParentModal: any;
  refetch: any;
};
const EditStudents = ({
  id,
  setEditParentModal,
  refetch: parentsRefetch,
}: EditProps) => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const {
    error: imageError,
    loading: imageLoading,
    uploadImage,
  } = useImageUpload("profilePhoto");

  const {
    isLoading,
    error,
    data: parent = [],
  } = useQuery({
    queryKey: ["parent", id],
    queryFn: async () =>
      await fetch(`${process.env.REACT_APP_API_URL}/students/${id}`, {
        headers: {
          authorization: `${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          const removeId = data.data[0];
          delete removeId._id;
          reset(removeId);
          return data.data[0];
        }),
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    if (file && file.name) {
      const imageUploadServer = await uploadImage(file);
      data.studentPhoto = imageUploadServer;
      console.log(imageUploadServer);
    } else {
      data.studentPhoto = parent.parentPhoto;
    }

    fetch(`${process.env.REACT_APP_API_URL}/students/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.data.acknowledged) {
          toast.success("Update Student Successful");
          reset();
          setLoading(false);
          setEditParentModal(false);
          parentsRefetch();
        }
        if (data.success === false) {
          toast.error("Update Student Fail");
          setLoading(false);
          setEditParentModal(false);
        }
      })
      .catch((error) => {
        toast.error("Update Student Fail");
        setLoading(false);
        setEditParentModal(false);
      });
  };
  return (
    <div>
      <input type="checkbox" id="edit-modal" className="modal-toggle" />
      <div className="modal px-5 md:px-24 lg:px-64 overflow-y-auto max-h-full">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="absolute top-2 right-2 z-10">
            <label htmlFor="edit-modal" className="btn rounded-full">
              <ImCross></ImCross>
            </label>
          </div>
          <>{error && <p>Something Went Wrong</p>}</>
          {isLoading ? (
            <>
              <Loader></Loader>
            </>
          ) : (
            <form
              action=""
              onSubmit={handleSubmit(onSubmit)}
              className="px-5 py-10 bg-white"
            >
              <div className="absolute top-2 right-2 z-10">
                <label htmlFor="edit-modal" className="btn rounded-full">
                  <ImCross></ImCross>
                </label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="relative px-4">
                  <Label htmlFor="">
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  {/*  <Input type="text" placeholder="Enter Full Name" {...register("name", { required: true })}  /> */}
                  <Input
                    type="text"
                    placeholder="Enter Name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-left block text-bold">
                      Name is required
                    </span>
                  )}
                </div>
                <div className="relative px-4">
                  <Label htmlFor="">
                    Roll <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="number"
                    placeholder="Enter Roll Number"
                    {...register("roll", { required: true })}
                  />
                  {errors.roll && (
                    <span className="text-red-500 text-left block text-bold">
                      Roll Number is required
                    </span>
                  )}
                </div>
                <div className="relative px-4 mb-7">
                  <Label htmlFor="">
                    Gender <span className="text-red-500">*</span>
                  </Label>
                  <select
                    required
                    className="form-input-style select w-full bg-[#F0F1F3]"
                    {...register("gender", { required: true })}
                    defaultValue=""
                  >
                    <option value="" disabled className="text-[#B4B4B4]">
                      Select Gender
                    </option>
                    <option value="Male" className="text-black">
                      Male
                    </option>
                    <option value="Female" className="text-black">
                      Female
                    </option>
                    <option value="Other" className="text-black">
                      Other
                    </option>
                  </select>
                  {errors.gender && (
                    <span className="text-red-500 text-left block text-bold">
                      Gender is required
                    </span>
                  )}
                </div>
                <div className="relative px-4">
                  <Label htmlFor="">
                    Father Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="text"
                    placeholder="Enter Father Name"
                    {...register("fatherName", { required: true })}
                  />
                  {errors.fatherName && (
                    <span className="text-red-500 text-left block text-bold">
                      Father Name is required
                    </span>
                  )}
                </div>
                <div className="relative px-4">
                  <Label htmlFor="">
                    Mother Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="text"
                    placeholder="Enter Mother Name"
                    {...register("motherName", { required: true })}
                  />
                  {errors.motherName && (
                    <span className="text-red-500 text-left block text-bold">
                      Mother Name is required
                    </span>
                  )}
                </div>
                <div className="relative px-4">
                  <Label htmlFor="">
                    Date Of Birth <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="date"
                    value="2000-06-22"
                    min="1950-01-01"
                    max="2050-12-31"
                    placeholder="dd/mm/yyyy"
                    {...register("dateOfBirth", { required: true })}
                  />
                  {errors.dateOfBirth && (
                    <span className="text-red-500 text-left block text-bold">
                      Date Of Birth is required
                    </span>
                  )}
                </div>
                <div className="relative px-4 mb-7">
                  <Label htmlFor="">Blood Group</Label>
                  <select
                    required
                    className="form-input-style select w-full bg-[#F0F1F3]"
                    {...register("bloodGroup")}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Please Select Blood Group{" "}
                    </option>
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
                  <select
                    required
                    className="form-input-style select w-full bg-[#F0F1F3]"
                    {...register("religion", { required: true })}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Please Select Religion
                    </option>
                    <option value="Islam">Islam</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Christian">Christian</option>
                    <option value="Buddhism">Buddhism</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.religion && (
                    <span className="text-red-500 text-left block text-bold">
                      Religion name is required
                    </span>
                  )}
                </div>
                <div className="relative px-4 mb-7">
                  <Label htmlFor="">
                    Class <span className="text-red-500">*</span>
                  </Label>
                  <select
                    required
                    className="form-input-style select w-full bg-[#F0F1F3]"
                    {...register("class", { required: true })}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Please Select Class *
                    </option>
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
                  {errors.class && (
                    <span className="text-red-500 text-left block text-bold">
                      Class name is required
                    </span>
                  )}
                </div>
                <div className="relative px-4 mb-7">
                  <Label htmlFor="">Section</Label>
                  <select
                    required
                    className="form-input-style select w-full bg-[#F0F1F3]"
                    {...register("section")}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Please Select Section
                    </option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                  </select>
                </div>
                <div className="relative px-4">
                  <Label htmlFor="">
                    Mobile <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="number"
                    placeholder="Enter Phone Number"
                    {...register("phone", { required: true })}
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-left block text-bold">
                      Mobile number is required
                    </span>
                  )}
                </div>
                <div className="relative px-4">
                  <Label htmlFor="">
                    Address<span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="text"
                    placeholder="Enter Address"
                    {...register("address", { required: true })}
                  />
                  {errors.address && (
                    <span className="text-red-500 text-left block text-bold">
                      Address Name is required
                    </span>
                  )}
                </div>
                <div className="relative px-4">
                  <Label htmlFor="">
                    Admission ID<span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="text"
                    placeholder="Enter Admission ID"
                    {...register("admissionId", { required: true })}
                  />
                  {errors.admissionId && (
                    <span className="text-red-500 text-left block text-bold">
                      Admission Id Number is required
                    </span>
                  )}
                </div>
                <div className="relative px-4">
                  <Label htmlFor="">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="email"
                    placeholder="Enter Email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-left block text-bold">
                      Email Address is required
                    </span>
                  )}
                </div>
              </div>
              <div>
                <div className="relative w-full">
                  <Textarea {...register("bio")} placeholder="Bio"></Textarea>
                </div>
                <div className="flex flex-col md:flex-row px-4 gap-0 md:gap-4">
                  <div className="text-left w-full mb-7 px-4">
                    <label htmlFor="" className="font-bold text-black text-lg">
                      Upload Student Photo (150 X 150){" "}
                      <span className="text-red-500 mt-5">*</span>
                    </label>
                    <input
                      type="file"
                      onChange={(e: any) => setFile(e.target.files[0])}
                      accept="image/*"
                      className="mt-3 file-input w-full"
                    />
                  </div>
                  <div className="avatar justify-center w-full px-4">
                    <div className="w-24 rounded-full">
                      <img src={parent?.parentsPhoto} alt="" />
                    </div>
                    <span>
                      {imageError && (
                        <p className="text-red-500">
                          Image Upload Fail. Please try again
                        </p>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className="form-button">
                <button
                  className="save-btn pr-3"
                  disabled={loading || imageLoading}
                >
                  {loading ? "Saving..." : "Save"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditStudents;
