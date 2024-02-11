"use client";
import { NotePencil } from "@phosphor-icons/react";
import { Button, Dialog } from "@material-tailwind/react";
import { useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { QuillScript } from "@/utils/QuillScript";
import SubmitBtn from "../utils/SubmitBtn";
import { ErrorToast, IsEmpty } from "@/utils/formHelper";

export function CreateBlog({}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const [submit, setSubmit] = useState(false);
    const [editorValue, setEditoralue] = useState("");
    const [title, setTitle] = useState();

    let submitVales = {
        title: title,
        details: editorValue,
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
                const req = await fetch("/api/notices", config);
                const res = await req.json();
                if (!req.ok) {
                    ErrorToast(res.status);
                } else if (res.status === "Fail, Internal Error!") {
                    ErrorToast(res.status);
                } else {
                    SuccessToast(res.status);
                    window.location.reload();
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
                <NotePencil size={20} strokeWidth={2} className="h-4 w-4" /> Add
                Blog
            </Button>

            <Dialog
                open={open}
                handler={handleOpen}
                className=" p-6 lg:p-10 2xl:p-12 overflow-y-auto"
            >
                <h3 className=" text-center underline underline-offset-8">
                    Create a New Blog
                </h3>
                <div className=" py-10">
                    <form
                        action=""
                        method="post"
                        onSubmit={(e) => submitHandler(e)}
                    >
                        <div className=" w-full">
                            <label
                                htmlFor="title"
                                className=" text-gray-700 font-bold text-lg"
                            >
                                Blog Title
                            </label>
                            <input
                                onChange={(e) => setTitle(e.target.value)}
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Notice Title"
                                className=" w-full py-1 px-5 border rounded outline-deep-orange-300 focus:text-deep-orange-500 mb-4 transition-all duration-300"
                            />
                        </div>
                        <div className=" w-full py-2">
                            <label
                                htmlFor="details"
                                className=" text-gray-700 font-bold text-lg"
                            >
                                Blog Details
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
            </Dialog>
        </>
    );
}
