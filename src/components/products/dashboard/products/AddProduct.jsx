"use client";
import SubmitBtn from "@/components/utils/SubmitBtn";
import { productAssets } from "@/components/utils/essentialObejct";
import { QuillScript } from "@/utils/QuillScript";
import { ErrorToast, IsEmpty, SuccessToast } from "@/utils/formHelper";
import { Dialog, DialogBody, Option, Select } from "@material-tailwind/react";
import { ImageSquare, PlusCircle } from "@phosphor-icons/react";
import { CldUploadButton, CldUploadWidgetResults } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

export default function AddProduct(props) {
    let productType = productAssets.productType;
    let productStatus = productAssets.productStatus;
    let categories = props.categories;
    const [submit, setSubmit] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const [editorValue, setEditoralue] = useState("");
    const [publicId1, setPublicId1] = useState("");
    const [publicId2, setPublicId2] = useState("");
    const [publicId3, setPublicId3] = useState("");

    const [imgUrl1, setImgUrl1] = useState("");
    const [imgUrl2, setImgUrl2] = useState("");
    const [imgUrl3, setImgUrl3] = useState("");

    const [inputValues, setInputValues] = useState({
        title: "",
        short_desc: "",
        details: "",
        img1: "",
        img2: "",
        img3: "",
        origin: "",
        price: "",
        discount: "",
        status: "",
        type: "",
        support_n_care: "",
        how_to_setup: "",
        faq: "",
        categoryId: "",
    });

    let submitVales = {
        title: inputValues.title,
        short_desc: inputValues.short_desc,
        details: editorValue,
        img1: imgUrl1,
        img2: imgUrl2,
        img3: imgUrl3,
        origin: inputValues.origin,
        price: inputValues.price,
        discount: inputValues.discount,
        status: inputValues.status,
        type: inputValues.type,
        support_n_care: inputValues.support_n_care,
        how_to_setup: inputValues.how_to_setup,
        faq: inputValues.faq,
        categoryId: inputValues.categoryId,
    };

    const onChangeHandler = (name, value) => {
        setInputValues({ ...inputValues, [name]: value });
    };

    const uploadImagehadler1 = (CldUploadWidgetResults) => {
        const imageDetails = CldUploadWidgetResults.info;
        let imageUrl = imageDetails.secure_url;
        let publicId = imageDetails.public_id;
        setImgUrl1(imageUrl);
        setPublicId1(publicId);
    };
    const uploadImagehadler2 = (CldUploadWidgetResults) => {
        const imageDetails = CldUploadWidgetResults.info;
        let imageUrl = imageDetails.secure_url;
        let publicId = imageDetails.public_id;
        setImgUrl2(imageUrl);
        setPublicId2(publicId);
    };
    const uploadImagehadler3 = (CldUploadWidgetResults) => {
        const imageDetails = CldUploadWidgetResults.info;
        let imageUrl = imageDetails.secure_url;
        let publicId = imageDetails.public_id;
        setImgUrl3(imageUrl);
        setPublicId3(publicId);
    };

    const removeImage1 = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/cloudinary", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ publicId1 }),
            });

            if (res.ok) {
                setImgUrl1("");
                setPublicId1("");
            }
        } catch (e) {
            console.log(e);
        }
    };
    const removeImage2 = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/cloudinary", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ publicId2 }),
            });

            if (res.ok) {
                setImgUrl2("");
                setPublicId2("");
            }
        } catch (e) {
            console.log(e);
        }
    };
    const removeImage3 = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/cloudinary", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ publicId3 }),
            });

            if (res.ok) {
                setImgUrl3("");
                setPublicId3("");
            }
        } catch (e) {
            console.log(e);
        }
    };

    const productSubmitHandler = async (e) => {
        e.preventDefault();
        setSubmit(true);
        try {
            if (IsEmpty(submitVales.title)) {
                ErrorToast("Product Title Required!");
            } else if (IsEmpty(submitVales.short_desc)) {
                ErrorToast("Short description Required!");
            } else if (IsEmpty(submitVales.details)) {
                ErrorToast("Details Required!");
            } else if (IsEmpty(submitVales.img1)) {
                ErrorToast("First Image Required!");
            } else if (IsEmpty(submitVales.img2)) {
                ErrorToast("2d Image Required!");
            } else if (IsEmpty(submitVales.img3)) {
                ErrorToast("3rd Image Required!");
            } else if (IsEmpty(submitVales.origin)) {
                ErrorToast("Product origin Required!");
            } else if (IsEmpty(submitVales.price)) {
                ErrorToast("Product Price Required!");
            } else if (IsEmpty(submitVales.discount)) {
                ErrorToast("Product Discount Required!");
            } else if (IsEmpty(submitVales.status)) {
                ErrorToast("Status Required!");
            } else if (IsEmpty(submitVales.type)) {
                ErrorToast("Type Required!");
            } else if (IsEmpty(submitVales.support_n_care)) {
                ErrorToast("Support and Care Required!");
            } else if (IsEmpty(submitVales.how_to_setup)) {
                ErrorToast("how to setup Required!");
            } else if (IsEmpty(submitVales.faq)) {
                ErrorToast("FAQ Required!");
            } else if (IsEmpty(submitVales.categoryId)) {
                ErrorToast("Category Id Required!");
            }
            const res = await fetch("/api/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(submitVales),
            });

            if (res.ok) {
                SuccessToast(res.status);
                window.location.reload();
            }
        } catch (e) {
            console.log(e);
        } finally {
            setSubmit(false);
        }
    };
    return (
        <div className=" scroll-auto">
            <div
                onClick={handleOpen}
                className=" flex gap-3 w-full justify-center cursor-pointer"
            >
                <PlusCircle size={25} />
                <p className=" hover:text-blue-500 inline-block relative transition-all duration-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[3px] before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-l before:from-amber-500 before:to-blue-500 hover:before:w-full hover:before:opacity-100 ">
                    Add Items
                </p>
            </div>
            <Dialog size="lg" open={open} handler={handleOpen} className=" p-6">
                <h4>Add New Product:</h4>
                <DialogBody className=" h-[30rem] overflow-y-auto">
                    <form
                        action=""
                        method="POST"
                        className=" w-full"
                        onSubmit={(e) => productSubmitHandler(e)}
                    >
                        <div className="flex gap-6 py-2">
                            <div className=" w-full">
                                <label htmlFor="title">Product Name</label>
                                <input
                                    onChange={(e) =>
                                        onChangeHandler("title", e.target.value)
                                    }
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder="Product Name"
                                    className=" w-full py-1 px-5 border rounded outline-blue-300 focus:text-blue-500 mb-4"
                                />
                            </div>
                            <div className=" w-full">
                                <label htmlFor="short_desc">
                                    Short Description
                                </label>
                                <input
                                    onChange={(e) =>
                                        onChangeHandler(
                                            "short_desc",
                                            e.target.value
                                        )
                                    }
                                    type="text"
                                    name="short_desc"
                                    id="short_desc"
                                    placeholder="Short Description"
                                    className=" w-full py-1 px-5 border rounded outline-blue-300 focus:text-blue-500 mb-4"
                                />
                            </div>
                        </div>
                        <div className=" w-full py-2">
                            <label htmlFor="details">Product Details</label>
                            <ReactQuill
                                theme="snow"
                                value={editorValue}
                                onChange={setEditoralue}
                                className="h-[12rem] mb-14"
                                modules={QuillScript.modules}
                                formats={QuillScript.formats}
                            />
                        </div>
                        <div className="py-3">
                            <h5 className="pb-3">Add Images</h5>
                            <div className="grid grid-flow-col grid-cols-3 gap-6">
                                <div className=" col-span-1">
                                    <CldUploadButton
                                        onUpload={uploadImagehadler1}
                                        uploadPreset="mec_trade_link"
                                        className={`relative w-full h-40 border-2 border-dotted gap-3 py-2 px-4 rounded-md bg-gray-50 grid place-items-center hover:opacity-75 transition-all"${
                                            imgUrl1 && " pointer-events-none"
                                        }`}
                                    >
                                        <div className="grid gap-1 place-items-center">
                                            <ImageSquare size={35} />
                                            <p>Upload image-1</p>
                                        </div>
                                        {imgUrl1 && (
                                            <Image
                                                src={imgUrl1}
                                                fill
                                                className="absolute object-cover inset-0 rounded-md"
                                                alt="Image-1"
                                            />
                                        )}
                                    </CldUploadButton>
                                    {publicId1 && (
                                        <button
                                            onClick={removeImage1}
                                            className=" py-2 px-4 bg-red-500 text-white rounded-md hover:opacity-80 transition-all mt-2"
                                        >
                                            Remove Image
                                        </button>
                                    )}
                                </div>
                                <div className=" col-span-1">
                                    <CldUploadButton
                                        onUpload={uploadImagehadler2}
                                        uploadPreset="mec_trade_link"
                                        className={`relative w-full h-40 border-2 border-dotted gap-3 py-2 px-4 rounded-md bg-gray-50 grid place-items-center hover:opacity-75 transition-all"${
                                            imgUrl2 && " pointer-events-none"
                                        }`}
                                    >
                                        <div className="grid gap-1 place-items-center">
                                            <ImageSquare size={35} />
                                            <p>Upload image-2</p>
                                        </div>
                                        {imgUrl2 && (
                                            <Image
                                                src={imgUrl2}
                                                fill
                                                className="absolute object-cover inset-0 rounded-md"
                                                alt="Image-1"
                                            />
                                        )}
                                    </CldUploadButton>
                                    {publicId2 && (
                                        <button
                                            onClick={removeImage2}
                                            className=" py-2 px-4 bg-red-500 text-white rounded-md hover:opacity-80 transition-all mt-2"
                                        >
                                            Remove Image
                                        </button>
                                    )}
                                </div>
                                <div className=" col-span-1">
                                    <CldUploadButton
                                        onUpload={uploadImagehadler3}
                                        uploadPreset="mec_trade_link"
                                        className={`relative w-full h-40 border-2 border-dotted gap-3 py-2 px-4 rounded-md bg-gray-50 grid place-items-center hover:opacity-75 transition-all"${
                                            imgUrl3 && " pointer-events-none"
                                        }`}
                                    >
                                        <div className="grid gap-1 place-items-center">
                                            <ImageSquare size={35} />
                                            <p>Upload image-1</p>
                                        </div>
                                        {imgUrl3 && (
                                            <Image
                                                src={imgUrl3}
                                                fill
                                                className="absolute object-cover inset-0 rounded-md"
                                                alt="Image-1"
                                            />
                                        )}
                                    </CldUploadButton>
                                    {publicId3 && (
                                        <button
                                            onClick={removeImage3}
                                            className=" py-2 px-4 bg-red-500 text-white rounded-md hover:opacity-80 transition-all mt-2"
                                        >
                                            Remove Image
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-6 py-2">
                            <div className=" w-full">
                                <label htmlFor="origin">Country Origin</label>
                                <input
                                    onChange={(e) =>
                                        onChangeHandler(
                                            "origin",
                                            e.target.value
                                        )
                                    }
                                    type="text"
                                    name="origin"
                                    id="origin"
                                    placeholder="Country Origin"
                                    className=" w-full py-1 px-5 border rounded outline-blue-300 focus:text-blue-500 mb-4"
                                />
                            </div>
                            <div className=" w-full">
                                <label htmlFor="price">Product Price</label>
                                <input
                                    onChange={(e) =>
                                        onChangeHandler("price", e.target.value)
                                    }
                                    type="text"
                                    name="price"
                                    id="price"
                                    placeholder="Product Price"
                                    className=" w-full py-1 px-5 border rounded outline-blue-300 focus:text-blue-500 mb-4"
                                />
                            </div>
                            <div className=" w-full">
                                <label htmlFor="discount">Discount</label>
                                <input
                                    onChange={(e) =>
                                        onChangeHandler(
                                            "discount",
                                            e.target.value
                                        )
                                    }
                                    type="text"
                                    name="discount"
                                    id="discount"
                                    placeholder="Discount"
                                    className=" w-full py-1 px-5 border rounded outline-blue-300 focus:text-blue-500 mb-4"
                                />
                            </div>
                        </div>
                        <div className="flex gap-6 py-2">
                            <div className=" w-full">
                                <Select
                                    label="Product Status"
                                    onChange={(e) =>
                                        onChangeHandler("status", e)
                                    }
                                >
                                    {productStatus.map((item) => (
                                        <Option key={item.id} value={item.name}>
                                            {item.name}
                                        </Option>
                                    ))}
                                </Select>
                            </div>
                            <div className=" w-full">
                                <Select
                                    label="Product Type"
                                    onChange={(e) => onChangeHandler("type", e)}
                                >
                                    {productType.map((item) => (
                                        <Option key={item.id} value={item.name}>
                                            {item.name}
                                        </Option>
                                    ))}
                                </Select>
                            </div>
                        </div>
                        <div className="flex gap-6 py-2">
                            <div className=" w-full">
                                <label htmlFor="support_n_care">
                                    Support and Care
                                </label>
                                <textarea
                                    onChange={(e) =>
                                        onChangeHandler(
                                            "support_n_care",
                                            e.target.value
                                        )
                                    }
                                    type="text"
                                    name="support_n_care"
                                    id="support_n_care"
                                    rows="3"
                                    placeholder="Support and Care"
                                    className="w-full py-1 px-5 border rounded outline-blue-300 focus:text-blue-500 mb-4"
                                />
                            </div>
                            <div className=" w-full">
                                <label htmlFor="how_to_setup">
                                    How to setup
                                </label>
                                <textarea
                                    onChange={(e) =>
                                        onChangeHandler(
                                            "how_to_setup",
                                            e.target.value
                                        )
                                    }
                                    type="text"
                                    name="how_to_setup"
                                    id="how_to_setup"
                                    rows="3"
                                    placeholder="Support and Care"
                                    className="w-full py-1 px-5 border rounded outline-blue-300 focus:text-blue-500 mb-4"
                                />
                            </div>
                        </div>
                        <div className="flex gap-6 py-2 items-center">
                            <div className=" w-full">
                                <label htmlFor="faq">FAQ</label>
                                <textarea
                                    onChange={(e) =>
                                        onChangeHandler("faq", e.target.value)
                                    }
                                    type="text"
                                    name="faq"
                                    id="faq"
                                    rows="3"
                                    placeholder="Frequently Asked Questions"
                                    className="w-full py-1 px-5 border rounded outline-blue-300 focus:text-blue-500 mb-4"
                                />
                            </div>
                            <div className=" w-full">
                                <Select
                                    label="Category"
                                    onChange={(e) =>
                                        onChangeHandler("categoryId", e)
                                    }
                                >
                                    {categories.map((item) => (
                                        <Option key={item.id} value={item.id}>
                                            {item.name}
                                        </Option>
                                    ))}
                                </Select>
                            </div>
                        </div>
                        <div className=" w-full flex justify-around py-6">
                            <p
                                onClick={() => handleOpen(null)}
                                className="py-2 px-5 rounded bg-currenr cursor-pointer text-green-500 border-2 border-green-500"
                            >
                                Cancel
                            </p>
                            <SubmitBtn
                                className="py-2 px-5 rounded bg-green-500 text-white"
                                submit={submit}
                                text="Add Product"
                            />
                        </div>
                    </form>
                </DialogBody>
            </Dialog>
        </div>
    );
}
