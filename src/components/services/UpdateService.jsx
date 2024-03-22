"use client";
import { ImageSquare } from "@phosphor-icons/react";
import { Input, Option, Select, Textarea } from "@material-tailwind/react";
import { useState } from "react";
import SubmitBtn from "../utils/SubmitBtn";
import { ErrorToast, IsEmpty, SuccessToast } from "@/utils/formHelper";
import { CldUploadButton, CldUploadWidgetResults } from "next-cloudinary";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

let Designation = [
  "Management/Admin",
  "Therapist",
  "Special Teacher",
  "Office Staff",
];

export function UpdateService({ details }) {
  const router = useRouter();
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
    title: details.title,
    subTitle: details.subTitle,
    shortDetails: details.shortDetails,
    details: details.details,
    img: details.img,
  });
  let submitVales = {
    id: inputValues.id,
    title: inputValues.title,
    subTitle: inputValues.subTitle,
    shortDetails: inputValues.shortDetails,
    details: inputValues.details,
    img: imgUrl,
  };

  const onChangeHandler = (name, value) => {
    setInputValues({ ...inputValues, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (IsEmpty(submitVales.title)) {
        ErrorToast("Title Required");
      } else if (IsEmpty(submitVales.subTitle)) {
        ErrorToast("Sub Title Required");
      } else if (IsEmpty(submitVales.shortDetails)) {
        ErrorToast("Short Details Required");
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
        const req = await fetch("/api/services", config);
        const res = await req.json();
        if (res.status === "Internal Error!") {
          ErrorToast(res.status);
        } else {
          SuccessToast(res.status);
          window.location.href = "/dashboard/services";
        }
      }
    } catch (e) {
      e.toString();
    } finally {
      setSubmit(false);
    }
  };

  return (
    <div className=" container pt-10">
      <h3 className=" text-center underline underline-offset-8">
        Update Service
      </h3>
      <div className=" py-10">
        <form action="" method="PATCH" onSubmit={(e) => submitHandler(e)}>
          <div className=" w-full flex gap-5 pb-8">
            <Input
              onChange={(e) => onChangeHandler("title", e.target.value)}
              value={inputValues.title}
              type="text"
              name="title"
              id="title"
              label="Title"
              placeholder="Title"
              className=" w-full border rounded py-[6px]"
            />
            <Input
              onChange={(e) => onChangeHandler("subTitle", e.target.value)}
              value={inputValues.subTitle}
              type="text"
              name="subTitle"
              id="subTitle"
              label="Sub Title"
              placeholder="Sub Title"
              className=" w-full border rounded py-[6px]"
            />
          </div>
          <div className=" w-full flex gap-5 pb-8">
            <Textarea
              onChange={(e) => onChangeHandler("shortDetails", e.target.value)}
              value={inputValues.shortDetails}
              type="text"
              name="shortDetails"
              id="shortDetails"
              label="Short Details"
              className=" w-3/4 border rounded py-[6px]"
            />
            <div className=" w-full">
              <p>Click to Update Service Picture</p>
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
          <div className=" w-full flex gap-5 pb-5">
            <Textarea
              onChange={(e) => onChangeHandler("details", e.target.value)}
              value={inputValues.details}
              type="text"
              name="details"
              id="details"
              label="Details"
              className=" w-3/4 border rounded py-[6px]"
            />
          </div>
          <div className=" flex justify-end gap-6 pt-6">
            <Link
              href="/dashboard/services"
              className=" px-6 py-2 text-gray-800 border border-gray-800 rounded flex gap-2 text-lg"
            >
              Cancel
            </Link>
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
