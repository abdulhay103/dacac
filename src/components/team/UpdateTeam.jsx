"use client";
import { ImageSquare } from "@phosphor-icons/react";
import { Input, Textarea } from "@material-tailwind/react";
import { useState } from "react";
import SubmitBtn from "../utils/SubmitBtn";
import { ErrorToast, IsEmpty } from "@/utils/formHelper";
import { CldUploadButton, CldUploadWidgetResults } from "next-cloudinary";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function UpdateTeam({ details }) {
  const router = useRouter();
  const [submit, setSubmit] = useState(false);

  //Upload Image
  const [publicId, setPublicId] = useState("");
  const [imgUrl, setImgUrl] = useState(details.avatar);
  const uploadImagehadler = (CldUploadWidgetResults) => {
    const imageDetails = CldUploadWidgetResults.info;
    let imageUrl = imageDetails.secure_url;
    let publicId = imageDetails.public_id;
    setImgUrl(imageUrl);
    setPublicId(publicId);
  };

  const removeImage = () => {
    setImgUrl("");
    setPublicId("");
  };

  const [inputValues, setInputValues] = useState({
    id: details.id,
    firstName: details.firstName,
    lastName: details.lastName,
    profession: details.profession,
    bio: details.bio,
    avatar: details.avatar,
    email: details.email,
    phone: details.phone,
    qualification: details.qualification,
    designation: details.designation,
    facebook: details.facebook,
    twiter: details.twiter,
    linkedin: details.linkedin,
    instragram: details.instragram,
  });
  let submitVales = {
    id: inputValues.id,
    firstName: inputValues.firstName,
    lastName: inputValues.lastName,
    profession: inputValues.profession,
    bio: inputValues.bio,
    avatar: inputValues.avatar,
    email: inputValues.email,
    phone: inputValues.phone,
    qualification: inputValues.qualification,
    designation: inputValues.designation,
    facebook: inputValues.facebook,
    twiter: inputValues.twiter,
    linkedin: inputValues.linkedin,
    instragram: inputValues.instragram,
  };

  const onChangeHandler = (name, value) => {
    setInputValues({ ...inputValues, [name]: value });
  };

  // const submitHandler = async (e) => {
  //   try {
  //     e.preventDefault();
  //     if (IsEmpty(submitVales.title)) {
  //       ErrorToast("Blog Title Required");
  //     } else if (IsEmpty(submitVales.short_desc)) {
  //       ErrorToast("Blog Short description Required");
  //     } else if (IsEmpty(submitVales.image)) {
  //       ErrorToast("Blog Image Required");
  //     } else if (IsEmpty(submitVales.details)) {
  //       ErrorToast("Blog Details Required");
  //     } else {
  //       setSubmit(true);
  //       const config = {
  //         method: "PATCH",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(submitVales),
  //       };
  //       const req = await fetch("/api/blogs", config);
  //       const res = await req.json();
  //       if (!req.ok) {
  //         ErrorToast(res.status);
  //       } else if (res.status === "Fail, Internal Error!") {
  //         ErrorToast(res.status);
  //       } else {
  //         SuccessToast(res.status);
  //         window.location.href("/dashboard/blogs");
  //       }
  //     }
  //   } catch (e) {
  //     e.toString();
  //   } finally {
  //     setSubmit(false);
  //   }
  // };

  return (
    <div className=" container pt-10">
      <h3 className=" text-center underline underline-offset-8">
        Update Team Member
      </h3>
      <div className=" py-10">
        <form action="" method="post">
          <div className=" w-full flex gap-5 pb-5">
            <Input
              onChange={(e) => onChangeHandler("firstName", e.target.value)}
              value={inputValues.firstName}
              type="text"
              name="firstName"
              id="firstName"
              label="First Name"
              placeholder="First Name"
              className=" w-full border rounded py-[6px]"
            />
            <Input
              onChange={(e) => onChangeHandler("lastName", e.target.value)}
              value={inputValues.lastName}
              type="text"
              name="lastName"
              id="lastName"
              label="Last Name"
              placeholder="Last Name"
              className=" w-full border rounded py-[6px]"
            />
          </div>
          <div className=" w-full flex gap-5 pb-5">
            <Input
              onChange={(e) => onChangeHandler("phone", e.target.value)}
              value={inputValues.phone}
              type="tel"
              name="phone"
              id="phone"
              label="Contact Number"
              placeholder="Contact Number"
              className=" w-full border rounded py-[6px]"
            />
            <Input
              onChange={(e) => onChangeHandler("email", e.target.value)}
              value={inputValues.email}
              type="email"
              name="email"
              id="email"
              label="Email Address"
              placeholder="Email Address"
              className=" w-full border rounded py-[6px]"
            />
          </div>
          <div className=" w-full flex gap-5 pb-5">
            <Input
              onChange={(e) => onChangeHandler("profession", e.target.value)}
              value={inputValues.profession}
              type="text"
              name="profession"
              id="profession"
              label="Profession"
              placeholder="Profession"
              className=" w-full border rounded py-[6px]"
            />
            <Input
              onChange={(e) => onChangeHandler("designation", e.target.value)}
              value={inputValues.designation}
              type="text"
              name="designation"
              id="designation"
              label="Designation"
              placeholder="Designation"
              className=" w-full border rounded py-[6px]"
            />
          </div>
          <div className=" w-full flex gap-5 pb-5">
            <Input
              onChange={(e) => onChangeHandler("qualification", e.target.value)}
              value={inputValues.qualification}
              type="text"
              name="qualification"
              id="qualification"
              label="Last Academic Qualification"
              placeholder="Last Academic Qualification"
              className=" w-full border rounded py-[6px]"
            />
          </div>
          <div className=" w-full flex gap-5 pb-5">
            <Textarea
              onChange={(e) => onChangeHandler("bio", e.target.value)}
              value={inputValues.bio}
              type="text"
              name="bio"
              id="bio"
              label="Bio"
              className=" w-3/4 border rounded py-[6px]"
            />
            <div className=" w-full">
              <p>Click to Update Profile Picture</p>
              <div className=" relative overflow-hidden border-2 border-dotted">
                <CldUploadButton
                  onUpload={uploadImagehadler}
                  uploadPreset="mec_trade_link"
                  className={`relative w-full h-40 gap-3 py-2 px-4 rounded-md bg-gray-50 grid place-items-center hover:opacity-75 transition-all"${
                    imgUrl && " pointer-events-none"
                  }`}
                >
                  <div className="grid gap-1 place-items-center">
                    <ImageSquare size={35} />
                    <p>Upload Image</p>
                  </div>
                  {submitVales.avatar && (
                    <div className=" absolute w-full flex justify-center items-center">
                      <Image
                        src={imgUrl}
                        width="200"
                        height="120"
                        className="object-cover inset-0 rounded-md"
                        alt="Image"
                      />
                    </div>
                  )}
                </CldUploadButton>
                {publicId && (
                  <p
                    onClick={removeImage}
                    className=" absolute right-0 bottom-0 py-2 z-20 px-4 text-center cursor-pointer bg-red-500 text-white rounded-md hover:opacity-80 transition-all mt-2 duration-300"
                  >
                    Remove Image
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className=" w-full flex gap-5 pb-5">
            <Input
              onChange={(e) => onChangeHandler("facebook", e.target.value)}
              value={inputValues.facebook}
              type="text"
              name="facebook"
              id="facebook"
              label="Facebook URL"
              placeholder="Facebook URL"
              className=" w-full border rounded py-[6px]"
            />
            <Input
              onChange={(e) => onChangeHandler("twiter", e.target.value)}
              value={inputValues.twiter}
              type="text"
              name="twiter"
              id="twiter"
              label="Twiter"
              placeholder="Twiter"
              className=" w-full border rounded py-[6px]"
            />
            <Input
              onChange={(e) => onChangeHandler("linkedin", e.target.value)}
              value={inputValues.linkedin}
              type="text"
              name="linkedin"
              id="linkedin"
              label="Linkedin Url"
              placeholder="Linkedin url"
              className=" w-full border rounded py-[6px]"
            />
            <Input
              type="text"
              name="instragram"
              id="instragram"
              label="Instragram url"
              placeholder="Instragram url"
              className=" w-full border rounded py-[6px]"
            />
          </div>
          <div className=" flex justify-around pt-6">
            <SubmitBtn
              text="Update"
              submit={submit}
              className=" px-6 py-2 bg-green-500 text-white rounded flex gap-2 text-lg"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
