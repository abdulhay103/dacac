"use client";
import {
    CalendarDaysIcon,
    EnvelopeIcon,
    MapPinIcon,
    PhoneIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import SubmitBtn from "../utils/SubmitBtn";
import { ErrorToast, IsEmail, IsEmpty, SuccessToast } from "@/utils/formHelper";

export default function ContactInfo() {
    const [submit, setSubmit] = useState(false);
    const [inputValues, setInputValues] = useState({
        name: "",
        email: "",
        massage: "",
    });
    let { name, email, massage } = inputValues;

    const onChangeHandler = (name, value) => {
        setInputValues({ ...inputValues, [name]: value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            if (IsEmpty(inputValues.name)) {
                ErrorToast("Your Name Required!");
            } else if (IsEmail(inputValues.email)) {
                ErrorToast("Valid Email Address Required");
            } else if (IsEmpty(inputValues.massage)) {
                ErrorToast("Your Massage Require!");
            } else {
                setSubmit(true);
                const config = {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(inputValues),
                };
                const req = await fetch("/api/massages", config);
                const res = await req.json();
                if (!req.ok) {
                    ErrorToast(res.status);
                } else if (res.status === "Fail! Internal Error") {
                    ErrorToast(res.status);
                } else {
                    SuccessToast(res.status);
                    setInputValues({
                        name: "",
                        email: "",
                        massage: "",
                    });
                }
            }
        } catch (error) {
            throw new Error(error.toString());
        } finally {
            setSubmit(false);
        }
    };
    return (
        <div className=" container pt-10 lg:pt-14 2xl:pt-20">
            <div className=" grid grid-cols-4 gap-6 xl:gap-0 mb-10">
                <div className=" col-span-4 lg:col-span-3 lg:border-r-2 lg:pr-16 2xl:pr-20">
                    <div className=" w-full mx-auto pb-10">
                        <div className=" flex gap-2 items-center pb-2">
                            <div className=" w-3 h-3 bg-blue-500"></div>
                            <h5 className=" uppercase text-blue-500 px-2 font-normal">
                                Get our contact today
                            </h5>
                            <div className=" w-3 h-3 bg-blue-500"></div>
                        </div>
                        <div>
                            <h3 className="text-[#4c5967]">
                                Send us a massage.
                            </h3>
                            <p>
                                If you prefer, you can also use the form below
                                to send us a message. We will get back to you as
                                soon as possible.
                            </p>
                        </div>
                    </div>
                    <form
                        method="POST"
                        className=" pt-6"
                        onSubmit={(e) => submitHandler(e)}
                    >
                        <input
                            onChange={(e) =>
                                onChangeHandler("name", e.target.value)
                            }
                            value={name}
                            type="text"
                            name="name"
                            autoComplete="true"
                            required
                            placeholder="Your Full Name"
                            className=" px-6 py-2 text-deep-orange-500 focus:outline-deep-orange-400 placeholder:text-gray-600 w-full border-none bg-gray-100 rounded mb-4"
                        />
                        <input
                            onChange={(e) =>
                                onChangeHandler("email", e.target.value)
                            }
                            value={email}
                            type="email"
                            name="email"
                            autoComplete="true"
                            required
                            placeholder="Your Valid Email"
                            className=" px-6 py-2 text-deep-orange-500 focus:outline-deep-orange-400 placeholder:text-gray-600 w-full border-none bg-gray-100 rounded mb-4"
                        />
                        <textarea
                            onChange={(e) =>
                                onChangeHandler("massage", e.target.value)
                            }
                            value={massage}
                            name="massage"
                            rows="10"
                            className=" px-6 py-2 text-deep-orange-500 focus:outline-deep-orange-400 placeholder:text-gray-600 w-full bg-gray-100 border-none rounded"
                            placeholder="Write your massage here."
                        ></textarea>
                        <div className=" text-right mt-3">
                            <SubmitBtn
                                submit={submit}
                                text="Submit"
                                className=" bg-deep-orange-500 px-10 py-3 text-white rounded my-3 border-2 border-deep-orange-500 hover:text-deep-orange-500 hover:bg-white transition-all"
                            />
                        </div>
                    </form>
                </div>
                <div className=" col-span-4 lg:col-span-1 lg:pl-4 2xl:pl-10 lg:pt-5">
                    <div className=" p-3">
                        <div className="flex items-center gap-2">
                            <MapPinIcon className=" h-7 w-7 inline-block text-[#4c5967]" />
                            <h5 className="font-semibold py-2 text-[#4c5967]">
                                Address:
                            </h5>
                        </div>
                        <p className="pb-2">
                            <span className=" font-medium pr-2">School:</span>
                            House No-18-19, Siddique Bhaban, Avenue, Road-4,
                            Mirpur-7, Dhaka 1216.
                        </p>
                    </div>
                    <div className=" p-3">
                        <div className=" flex items-center gap-2">
                            <PhoneIcon className=" h-7 w-7 inline-block  text-[#4c5967]" />
                            <h5 className="font-semibold py-2 text-[#4c5967]">
                                Phone:
                            </h5>
                        </div>
                        <p>+88 01678690707</p>
                    </div>
                    <div className=" p-3">
                        <div className="flex items-center gap-2">
                            <EnvelopeIcon className=" h-7 w-7 inline-block text-[#4c5967]" />
                            <h5 className=" font-semibold py-2 text-[#4c5967]">
                                Email:
                            </h5>
                        </div>
                        <p>dacac.bd@gmail.com</p>
                    </div>
                    <div className=" p-3">
                        <div className="flex items-center gap-2">
                            <CalendarDaysIcon className=" h-7 w-7 inline-block text-[#4c5967]" />
                            <h5 className=" font-semibold py-2 text-[#4c5967]">
                                Office Hours:
                            </h5>
                        </div>
                        <p>
                            Our team is available to assist you during the
                            following hours:
                        </p>
                        <p className="py-2 text-semibold">
                            Sunday to Thrusday: 9:00 AM - 3:00 PM
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
