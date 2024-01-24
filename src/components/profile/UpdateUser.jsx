"use client";
import { useState } from "react";
import {
    Button,
    Dialog,
    DialogBody,
    DialogHeader,
} from "@material-tailwind/react";
import { ErrorToast, IsEmail, IsEmpty, SuccessToast } from "@/utils/formHelper";
import SubmitBtn from "../utils/SubmitBtn";
import { CldUploadButton, CldUploadWidgetResults } from "next-cloudinary";
import { ImageSquare } from "@phosphor-icons/react";
import Image from "next/image";

export default function UpdateUser(props) {
    let userData = props.user;
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    const [submit, setSubmit] = useState(false);
    const [publicId, setPublicId] = useState("");
    const [imgUrl, setImgUrl] = useState("");

    const uploadImagehadler = (CldUploadWidgetResults) => {
        const imageDetails = CldUploadWidgetResults.info;
        let imageUrl = imageDetails.secure_url;
        let publicId = imageDetails.public_id;
        setImgUrl(imageUrl);
        setPublicId(publicId);
    };
    const removeImage = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/cloudinary", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ publicId }),
            });

            if (res.ok) {
                setImgUrl("");
                setPublicId("");
            }
        } catch (e) {
            console.log(e);
        }
    };
    const [inputValues, setInputValues] = useState({
        firstName: userData.firstName,
        lastName: userData.lastName,
        profession: userData.profession,
        bio: userData.bio,
        avater: userData.avater,
        email: userData.email,
        phone: userData.phone,
        address: userData.address,
        password: userData.password,
    });
    let submitVales = {
        firstName: inputValues.firstName,
        lastName: inputValues.lastName,
        profession: inputValues.profession,
        bio: inputValues.bio,
        avater: imgUrl === "" ? userData.avater : imgUrl,
        email: inputValues.email,
        phone: inputValues.phone,
        address: inputValues.address,
        password: inputValues.password,
    };

    const onChangeHandler = (name, value) => {
        setInputValues({ ...inputValues, [name]: value });
    };
    const submitHandler = async (e) => {
        try {
            e.preventDefault();
            if (IsEmpty(submitVales.firstName)) {
                ErrorToast("First Name Required");
            } else if (IsEmpty(submitVales.lastName)) {
                ErrorToast("Last Name Required");
            } else if (IsEmpty(submitVales.profession)) {
                ErrorToast("Profession Required");
            } else if (IsEmpty(submitVales.bio)) {
                ErrorToast("Bio Required");
            } else if (IsEmpty(submitVales.avater)) {
                ErrorToast("Avater Required");
            } else if (IsEmail(submitVales.email)) {
                ErrorToast("Valid Email Address Required");
            } else if (IsEmpty(submitVales.phone)) {
                ErrorToast("Valid Mobile Number Required");
            } else if (IsEmpty(submitVales.address)) {
                ErrorToast("Address Required");
            } else if (IsEmpty(submitVales.password)) {
                ErrorToast("Password Required");
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
                const req = await fetch("/api/profile", config);
                const res = await req.json();
                if (!req.ok) {
                    ErrorToast(res.status);
                } else if (res.status === "Request Fail") {
                    ErrorToast(res.status);
                } else if (res.status === "Email already exist.") {
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
        <div className=" scroll-auto">
            <div className=" flex w-full justify-center pt-6 lg:justify-end">
                <button
                    onClick={handleOpen}
                    className=" bg-deep-orange-600 text-white px-5 py-2 rounded hover:opacity-75 transition-all"
                >
                    Edit Profile
                </button>
            </div>
            <Dialog open={open} handler={handleOpen} className=" p-6">
                <form
                    action=""
                    method="post"
                    onSubmit={(e) => submitHandler(e)}
                >
                    <DialogHeader>Update User Details</DialogHeader>
                    <DialogBody className=" h-[30rem] overflow-y-auto">
                        <div className="flex gap-6">
                            <div>
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    onChange={(e) =>
                                        onChangeHandler(
                                            "firstName",
                                            e.target.value
                                        )
                                    }
                                    value={inputValues.firstName}
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    placeholder="First Name"
                                    className=" w-full py-1 px-5 border rounded outline-deep-orange-300 focus:text-deep-orange-500 mb-4"
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    onChange={(e) =>
                                        onChangeHandler(
                                            "lastName",
                                            e.target.value
                                        )
                                    }
                                    value={inputValues.lastName}
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    placeholder="Last Name"
                                    className=" w-full py-1 px-5 border rounded outline-deep-orange-300 focus:text-deep-orange-500 mb-4"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="bio">Short Bio</label>
                            <textarea
                                onChange={(e) =>
                                    onChangeHandler("bio", e.target.value)
                                }
                                type="text"
                                name="bio"
                                id="bio"
                                rows="6"
                                value={inputValues.bio}
                                className="w-full py-1 px-5 border rounded outline-deep-orange-300 focus:text-deep-orange-500 mb-4"
                            />
                        </div>
                        <div className=" flex gap-10 items-center py-6">
                            <div className=" w-full">
                                <div className=" w-full">
                                    <label htmlFor="profession">
                                        Profession
                                    </label>
                                    <input
                                        onChange={(e) =>
                                            onChangeHandler(
                                                "profession",
                                                e.target.value
                                            )
                                        }
                                        type="text"
                                        name="profession"
                                        id="profession"
                                        value={inputValues.profession}
                                        className="w-full py-1 px-5 border rounded outline-deep-orange-300 focus:text-deep-orange-500 mb-4"
                                    />
                                </div>
                                <div className=" w-full">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        onChange={(e) =>
                                            onChangeHandler(
                                                "email",
                                                e.target.value
                                            )
                                        }
                                        value={inputValues.email}
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Example@gmail.com"
                                        className=" w-full py-1 px-5 border rounded outline-deep-orange-300 focus:text-deep-orange-500 mb-4"
                                    />
                                </div>
                                <div className=" w-full">
                                    <label htmlFor="phone">Mobile Number</label>
                                    <input
                                        onChange={(e) =>
                                            onChangeHandler(
                                                "phone",
                                                e.target.value
                                            )
                                        }
                                        value={inputValues.phone}
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        placeholder="Phone Number"
                                        className=" w-full py-1 px-5 border rounded outline-deep-orange-300 focus:text-deep-orange-500 mb-4"
                                    />
                                </div>
                            </div>
                            <div className=" w-full">
                                <p>Click to Update Profile Picture</p>
                                <div>
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
                                        {inputValues.avater && (
                                            <Image
                                                src={
                                                    imgUrl === ""
                                                        ? inputValues.avater
                                                        : imgUrl
                                                }
                                                fill
                                                className="absolute object-cover inset-0 rounded-md"
                                                alt="Image-1"
                                            />
                                        )}
                                    </CldUploadButton>
                                    {publicId && (
                                        <button
                                            onClick={removeImage}
                                            className=" py-2 px-4 bg-red-500 text-white rounded-md hover:opacity-80 transition-all mt-2"
                                        >
                                            Remove Image
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="address">Address:</label>
                            <textarea
                                onChange={(e) =>
                                    onChangeHandler("address", e.target.value)
                                }
                                name="address"
                                id="address"
                                value={inputValues.address}
                                className="w-full py-1 px-5 border rounded outline-deep-orange-300 focus:text-deep-orange-500 mb-4"
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                onChange={(e) =>
                                    onChangeHandler("password", e.target.value)
                                }
                                value={inputValues.password}
                                type="password"
                                name="password"
                                id="password"
                                placeholder="New Password"
                                className=" w-full py-1 px-5 border rounded outline-deep-orange-300 focus:text-deep-orange-500 mb-4"
                            />
                        </div>
                        <div className=" w-full flex justify-center py-2 gap-6">
                            <Button
                                variant="text"
                                onClick={handleOpen}
                                className=" hover:bg-transparent px-6 py-2 border border-green-500 text-green-500 rounded flex gap-2 text-base"
                            >
                                Cancel
                            </Button>
                            <div>
                                <SubmitBtn
                                    submit={submit}
                                    text="Save Change"
                                    className=" px-6 py-2 bg-green-500 text-white rounded flex gap-2 text-lg"
                                />
                            </div>
                        </div>
                    </DialogBody>
                </form>
            </Dialog>
        </div>
    );
}
