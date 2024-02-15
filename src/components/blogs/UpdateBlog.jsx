"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { QuillScript } from "@/utils/QuillScript";
import SubmitBtn from "../utils/SubmitBtn";
import { ErrorToast, IsEmpty, SuccessToast } from "@/utils/formHelper";
import { Option, Select } from "@material-tailwind/react";

export function UpdateBlog({ details }) {
    const [open, setOpen] = useState(false);
    const [submit, setSubmit] = useState(false);
    const statusValues = [
        {
            id: 1,
            name: "open",
        },
        {
            id: 2,
            name: "close",
        },
    ];

    const [editorValue, setEditoralue] = useState(details.details);

    const [inputValues, setInputValues] = useState({
        title: details.title,
        status: details.status,
    });

    const onChangeHandler = (name, value) => {
        setInputValues({ ...inputValues, [name]: value });
    };

    let submitVales = {
        id: details.id,
        title: inputValues.title,
        details: editorValue,
        status: inputValues.status,
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
                    method: "PATCH",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(submitVales),
                };
                const req = await fetch("/api/notices", config);
                const res = await req.json();
                if (!req.ok) {
                    ErrorToast(res.status);
                } else if (res.status === "Fail, Internal Error!") {
                    ErrorToast(res.status);
                } else {
                    SuccessToast(res.status);
                    window.location.href = "/dashboard/notices";
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
        <div className=" container pt-10">
            <h3 className=" text-center underline underline-offset-8">
                Update Notice
            </h3>
            <div className=" py-10">
                <form
                    action=""
                    method="PATCH"
                    onSubmit={(e) => submitHandler(e)}
                >
                    <div className=" w-full flex gap-10 justify-center items-center">
                        <div className=" w-4/5">
                            <label
                                htmlFor="title"
                                className=" text-gray-700 font-bold text-lg"
                            >
                                Notice Title
                            </label>
                            <input
                                onChange={(e) =>
                                    onChangeHandler("title", e.target.value)
                                }
                                type="text"
                                name="title"
                                id="title"
                                value={inputValues.title}
                                placeholder="Notice Title"
                                className=" w-full py-1 px-5 border rounded outline-deep-orange-300 focus:text-deep-orange-500 mb-4 transition-all duration-300"
                            />
                        </div>
                        <div className=" w-1/5">
                            <Select
                                label="Notice Status"
                                value={inputValues.status}
                                onChange={(e) => onChangeHandler("status", e)}
                            >
                                {statusValues.map((item) => (
                                    <Option
                                        key={item.id}
                                        value={item.name}
                                        className={
                                            item.name === "open"
                                                ? "text-green-500 mb-2"
                                                : "text-red-500 mb-2"
                                        }
                                    >
                                        {item.name}
                                    </Option>
                                ))}
                            </Select>
                        </div>
                    </div>
                    <div className=" w-full py-2">
                        <label
                            htmlFor="details"
                            className=" text-gray-700 font-bold text-lg"
                        >
                            Notice Details
                        </label>
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
            </div>
        </div>
    );
}
