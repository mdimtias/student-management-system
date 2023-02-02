import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useTitle } from "../../../../hooks/useTitle";
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
const EditParents = ({
  id,
  setEditParentModal,
  refetch: parentsRefetch,
}: EditProps) => {
  useTitle("Add Parents");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const {
    url,
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
      await fetch(`${process.env.REACT_APP_API_URL}/parents/${id}`, {
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
      data.parentsPhoto = imageUploadServer;
      console.log(imageUploadServer);
    } else {
      data.parentsPhoto = parent.parentPhoto;
    }

    fetch(`${process.env.REACT_APP_API_URL}/parents/${id}`, {
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
          toast.success("Update Parent Successful");
          reset();
          setLoading(false);
          setEditParentModal(false);
          parentsRefetch();
        }
        if (data.success === false) {
          toast.error("Update Parent Fail");
          setLoading(false);
          setEditParentModal(false);
        }
      })
      .catch((error) => {
        toast.error("Update Parent Fail");
        setLoading(false);
        setEditParentModal(false);
      });
  };

  return (
    <div>
      <>
        {error && <p>Something Went Wrong</p>}
        {isLoading && <Loader></Loader>}
      </>
      <input type="checkbox" id="edit-modal" className="modal-toggle" />
      <div className="modal px-5 md:px-24 lg:px-64 overflow-y-auto max-h-full">
        <div className="modal-box w-11/12 max-w-5xl">
          <form
            action=""
            onSubmit={handleSubmit(onSubmit)}
            className="px-5 pt-5 pb-5 bg-white"
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
                <Input
                  type="text"
                  defaultValue={parent?.name}
                  placeholder="Enter Full Name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-500 text-left block text-bold">
                    Name is required
                  </span>
                )}
              </div>
              <div className="relative px-4 mb-7">
                <Label htmlFor="">
                  Gender <span className="text-red-500">*</span>
                </Label>
                <select
                  className="form-input-style select w-full"
                  {...register("gender", { required: true })}
                >
                  <option
                    disabled
                    value={parent?.gender}
                    className="text-[#B4B4B4]"
                  >
                    {parent?.gender}
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
                  Occupation <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="text"
                  defaultValue={parent?.occupation}
                  placeholder="Enter Occupation"
                  {...register("occupation", { required: true })}
                />
                {errors.occupation && (
                  <span className="text-red-500 text-left block text-bold">
                    Occupation is required
                  </span>
                )}
              </div>
              <div className="relative px-4">
                <Label htmlFor="">
                  Father Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="text"
                  defaultValue={parent?.fatherName}
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
                  defaultValue={parent?.motherName}
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
                  defaultValue={parent?.dateOfBirth}
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
                  className="form-input-style select w-full"
                  {...register("bloodGroup")}
                >
                  <option value={parent?.bloodGroup} disabled>
                    {parent?.bloodGroup}
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
                  className="form-input-style select w-full"
                  {...register("religion", { required: true })}
                >
                  <option value={parent?.religion} disabled>
                    {parent?.religion}
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
              <div className="relative px-4">
                <Label htmlFor="">
                  Mobile <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="number"
                  defaultValue={parent?.phone}
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
                  defaultValue={parent?.address}
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
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="email"
                  defaultValue={parent?.email}
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
            <div className="">
              <div className="relative px-4 text-left w-full">
                <Textarea
                  defaultValue={parent?.bio}
                  {...register("bio")}
                  placeholder="Bio"
                ></Textarea>
              </div>
              <div className="text-left pb-5 flex flex-col justify-center md:flex-row gap-5">
                <div className="w-full px-4">
                  <label htmlFor="" className="font-bold text-black text-lg">
                    Upload Student Photo (150 X 150)
                    <span className="text-red-500 mt-5">*</span>
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    className="mt-3 file-input w-full"
                    onChange={(e: any) => setFile(e.target.files[0])}
                  />
                </div>
                <div className="avatar justify-center w-full px-4">
                  <div className="w-24 rounded-full">
                    <img src={parent?.parentsPhoto} alt="" />
                    <img src={`${url}`} alt="" />
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
        </div>
      </div>
    </div>
  );
};

export default EditParents;
