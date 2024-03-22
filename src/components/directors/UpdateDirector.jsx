"use client";
import { ImageSquare } from "@phosphor-icons/react";
import { Input, Textarea } from "@material-tailwind/react";
import { useState } from "react";
import SubmitBtn from "../utils/SubmitBtn";
import { ErrorToast, IsEmpty, SuccessToast } from "@/utils/formHelper";
import { CldUploadButton, CldUploadWidgetResults } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";

export function UpdateDirector({ details }) {
  const [submit, setSubmit] = useState(false);

  //Upload Image
  const [publicId, setPublicId] = useState("");
  const [imgUrl, setImgUrl] = useState(details.img);
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
    name: details.name,
    qualification: details.qualification,
    profession: details.profession,
    designation: details.designation,
    phone: details.phone,
    email: details.email,
    details: details.details,
  });
  let submitVales = {
    id: inputValues.id,
    name: inputValues.name,
    qualification: inputValues.qualification,
    profession: inputValues.profession,
    designation: inputValues.designation,
    phone: inputValues.phone,
    email: inputValues.email,
    details: inputValues.details,
    img: imgUrl,
  };

  const onChangeHandler = (name, value) => {
    setInputValues({ ...inputValues, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (IsEmpty(submitVales.name)) {
        ErrorToast("Director Name Required");
      } else if (IsEmpty(submitVales.qualification)) {
        ErrorToast("Qualification Required");
      } else if (IsEmpty(submitVales.profession)) {
        ErrorToast("Profession Required");
      } else if (IsEmpty(submitVales.designation)) {
        ErrorToast("Designation Required");
      } else if (IsEmpty(submitVales.phone)) {
        ErrorToast("Phone Number Required");
      } else if (IsEmpty(submitVales.email)) {
        ErrorToast("Email Required");
      } else if (IsEmpty(submitVales.details)) {
        ErrorToast("Details Required");
      } else if (IsEmpty(submitVales.img)) {
        ErrorToast("Image Required");
      } else {
        setSubmit(true);
        const config = {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submitVales),
        };
        const req = await fetch("/api/directors", config);
        const res = await req.json();
        if (res.status === "Internal Error!") {
          ErrorToast(res.status);
        } else {
          SuccessToast(res.status);

          window.location.href = "/dashboard/directors";
        }
      }
    } catch (e) {
      e.toString();
    } finally {
      setSubmit(false);
    }
  };

  return (
    <section className=" pt-6">
      <h3 className=" text-center underline underline-offset-8">
        Update Director Details
      </h3>
      <div className=" py-10">
        <form action="" method="PATCH" onSubmit={(e) => submitHandler(e)}>
          <div className=" w-full flex gap-5 pb-8">
            <Input
              onChange={(e) => onChangeHandler("name", e.target.value)}
              value={inputValues.name}
              type="text"
              name="name"
              id="name"
              label="Director Name"
              placeholder="Director Name"
              className=" w-full border rounded py-[6px]"
            />
            <Input
              onChange={(e) => onChangeHandler("qualification", e.target.value)}
              value={inputValues.qualification}
              type="text"
              name="qualification"
              id="qualification"
              label="Qualification"
              placeholder="Qualification"
              className=" w-full border rounded py-[6px]"
            />
          </div>
          <div className=" w-full flex gap-5 pb-8">
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
          <div className=" w-full flex gap-5 pb-8">
            <Input
              onChange={(e) => onChangeHandler("phone", e.target.value)}
              value={inputValues.phone}
              type="tel"
              name="phone"
              id="phone"
              label="Phone Number"
              placeholder="Phone Number"
              className=" w-full border rounded py-[6px]"
            />
            <Input
              onChange={(e) => onChangeHandler("email", e.target.value)}
              value={inputValues.email}
              type="email"
              name="email"
              id="email"
              label="Email"
              placeholder="Email"
              className=" w-full border rounded py-[6px]"
            />
          </div>
          <div className=" w-full flex gap-5 pb-8">
            <Textarea
              onChange={(e) => onChangeHandler("details", e.target.value)}
              value={inputValues.details}
              type="text"
              name="details"
              id="details"
              label="Details"
              className=" w-3/4 border rounded py-[6px]"
            />
            <div className=" w-full">
              <p>Click to Update Service Picture</p>
              <div className=" relative overflow-hidden border-2 border-dotted rounded-md">
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
                  {submitVales.img && (
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
                {imgUrl && (
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
          <div className=" flex justify-around gap-6 pt-6">
            <Link
              href="/dashboard/directors"
              className=" px-6 py-2 text-green-500 border border-green-500 rounded flex gap-2 text-lg cursor-pointer"
            >
              Cancel
            </Link>
            <SubmitBtn
              text="Submit"
              submit={submit}
              className=" px-6 py-2 bg-green-500 text-white rounded flex gap-2 text-lg"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
