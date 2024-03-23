"use client";
import { ImageSquare, NotePencil } from "@phosphor-icons/react";
import {
  Button,
  Dialog,
  DialogBody,
  Option,
  Select,
} from "@material-tailwind/react";
import { useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { QuillScript } from "@/utils/QuillScript";
import SubmitBtn from "../utils/SubmitBtn";
import { ErrorToast, IsEmpty } from "@/utils/formHelper";
import { CldUploadButton, CldUploadWidgetResults } from "next-cloudinary";
import Image from "next/image";

export function CreateBlog({ categories }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [submit, setSubmit] = useState(false);
  const [editorValue, setEditoralue] = useState("");

  //Upload Image
  const [publicId, setPublicId] = useState("");
  const [imgUrl, setImgUrl] = useState("");
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
    title: "",
    short_desc: "",
    categoryId: "",
  });
  let submitVales = {
    title: inputValues.title,
    short_desc: inputValues.short_desc,
    image: imgUrl,
    details: editorValue,
    categoryId: parseInt(inputValues.categoryId),
  };

  const onChangeHandler = (name, value) => {
    setInputValues({ ...inputValues, [name]: value });
  };

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      if (IsEmpty(submitVales.title)) {
        ErrorToast("Notice Title Required");
      } else if (IsEmpty(submitVales.details)) {
        ErrorToast("Notice Details Required");
      } else {
        setSubmit(true);
        const config = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submitVales),
        };
        const req = await fetch("/api/blogs", config);
        const res = await req.json();
        if (!req.ok) {
          ErrorToast(res.status);
        } else if (res.status === "Fail, Internal Error!") {
          ErrorToast(res.status);
        } else {
          SuccessToast(res.status);
          window.location.href = "/dashboard/blogs";
        }
      }
    } catch (e) {
      e.toString();
    } finally {
      setSubmit(false);
      setOpen(!open);
    }
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        className="flex items-center gap-3"
        size="sm"
      >
        <NotePencil size={20} strokeWidth={2} className="h-4 w-4" /> Add Blog
      </Button>

      <Dialog
        open={open}
        handler={handleOpen}
        className=" p-6 lg:p-10 2xl:p-12 h-[40rem] overflow-y-auto"
      >
        <h3 className=" text-center underline underline-offset-8">
          Create a New Blog
        </h3>
        <DialogBody className=" py-10">
          <form action="" method="post" onSubmit={(e) => submitHandler(e)}>
            <div className=" w-full">
              <label
                htmlFor="title"
                className=" text-gray-700 font-bold text-lg"
              >
                Blog Title
              </label>
              <input
                onChange={(e) => {
                  onChangeHandler("title", e.target.value);
                }}
                type="text"
                name="title"
                id="title"
                placeholder="Blog Title"
                className=" w-full py-1 px-5 border rounded outline-deep-orange-300 focus:text-deep-orange-500 mb-4 transition-all duration-300"
              />
            </div>
            <div className=" w-full">
              <label
                htmlFor="short_desc"
                className=" text-gray-700 font-bold text-lg"
              >
                Short Description
              </label>
              <textarea
                onChange={(e) => {
                  onChangeHandler("short_desc", e.target.value);
                }}
                type="text"
                name="short_desc"
                id="short_desc"
                placeholder="Short Description"
                className=" w-full py-1 px-5 border rounded outline-deep-orange-300 focus:text-deep-orange-500 mb-4 transition-all duration-300"
              />
            </div>
            <div className=" w-full">
              <div className="w-full flex gap-6 items-center">
                <div className=" w-full">
                  <p>Click to Update Profile Picture</p>
                  <div className=" overflow-hidden">
                    <CldUploadButton
                      onUpload={uploadImagehadler}
                      uploadPreset="mec_trade_link"
                      className={`relative w-full h-40 border-2 border-dotted gap-3 py-2 px-4 rounded-md bg-gray-50 grid place-items-center hover:opacity-75 transition-all"${
                        imgUrl && " pointer-events-none"
                      }`}
                    >
                      <div className="grid gap-1 place-items-center">
                        <ImageSquare size={35} />
                        <p>Upload image-1</p>
                      </div>
                      {submitVales.image && (
                        <div className=" w-full overflow-hidden">
                          <Image
                            src={imgUrl}
                            width="400"
                            height="120"
                            className="absolute object-cover inset-0 rounded-md"
                            alt="Image-1"
                          />
                        </div>
                      )}
                    </CldUploadButton>
                    {publicId && (
                      <p
                        onClick={removeImage}
                        className=" py-2 px-4 text-center cursor-pointer bg-red-500 text-white rounded-md hover:opacity-80 transition-all mt-2 duration-300"
                      >
                        Remove Image
                      </p>
                    )}
                  </div>
                </div>
                <div className=" w-full">
                  <Select
                    label="Category"
                    id="category"
                    name="category"
                    onChange={(e) => {
                      onChangeHandler("categoryId", e);
                    }}
                  >
                    {categories.map((item) => (
                      <Option key={item.id} value={item.id.toString()}>
                        {item.name}
                      </Option>
                    ))}
                  </Select>
                </div>
              </div>
            </div>
            <div className=" w-full py-2">
              <p className=" text-gray-700 font-bold text-lg">Blog Details</p>
              <ReactQuill
                theme="snow"
                value={editorValue}
                onChange={setEditoralue}
                className="h-[12rem] mb-14"
                modules={QuillScript.modules}
                formats={QuillScript.formats}
              />
            </div>
            <div className=" w-full flex justify-end pt-12">
              <SubmitBtn
                submit={submit}
                text="Submit"
                className=" px-6 py-2 bg-green-500 text-white rounded flex gap-2 text-lg"
              />
            </div>
          </form>
        </DialogBody>
      </Dialog>
    </>
  );
}
