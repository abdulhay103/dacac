"use client";
import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import {
    ErrorToast,
    IsEmail,
    IsEmpty,
    IsMobile,
    SuccessToast,
} from "@/utils/formHelper";
import SubmitBtn from "../utils/SubmitBtn";

export default function RegistrationForm() {
    const router = useRouter();
    const [submit, setSubmit] = useState(false);
    const [inputValues, setInputValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
    });
    let { firstName, lastName, email, phone, password } = inputValues;
    const onChangeHandler = (name, value) => {
        setInputValues({ ...inputValues, [name]: value });
    };
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            if (IsEmpty(inputValues.firstName)) {
                ErrorToast("First Name Required");
            } else if (IsEmpty(inputValues.lastName)) {
                ErrorToast("Last Name Required");
            } else if (IsEmail(inputValues.email)) {
                ErrorToast("Valid Email Address Required");
            } else if (IsEmpty(inputValues.phone)) {
                ErrorToast("Valid Mobile Number Required");
            } else if (IsEmpty(inputValues.password)) {
                ErrorToast("Password Required");
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
                const req = await fetch("/api/user/register", config);
                const res = await req.json();
                if (!req.ok) {
                    ErrorToast(res.status);
                } else if (res.status === "Registration Fail") {
                    ErrorToast(res.status);
                } else if (res.status === "Email already exist.") {
                    ErrorToast(res.status);
                } else {
                    SuccessToast(res.status);
                    router.replace("/user/login");
                }
            }
        } catch (e) {
            throw new Error(e.toString());
        } finally {
            setSubmit(false);
        }
    };

    return (
        <div>
            <form action="" method="post" onSubmit={(e) => submitHandler(e)}>
                <input
                    onChange={(e) =>
                        onChangeHandler("firstName", e.target.value)
                    }
                    value={firstName}
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="First Name"
                    className=" w-full py-2 px-5 border rounded outline-blue-300 focus:text-blue-500 mb-4"
                />
                <input
                    onChange={(e) =>
                        onChangeHandler("lastName", e.target.value)
                    }
                    value={lastName}
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Last Name"
                    className=" w-full py-2 px-6 border rounded outline-blue-300 focus:text-blue-500 mb-4"
                />
                <input
                    onChange={(e) => onChangeHandler("email", e.target.value)}
                    value={email}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Example@gmail.com"
                    className=" w-full py-2 px-5 border rounded outline-blue-300 focus:text-blue-500 mb-4"
                />
                <input
                    onChange={(e) => onChangeHandler("phone", e.target.value)}
                    value={phone}
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                    className=" w-full py-2 px-5 border rounded outline-blue-300 focus:text-blue-500 mb-4"
                />
                <input
                    onChange={(e) =>
                        onChangeHandler("password", e.target.value)
                    }
                    value={password}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="New Password"
                    className=" w-full py-2 px-5 border rounded outline-blue-300 focus:text-blue-500 mb-4"
                />
                <div className=" w-full flex justify-center py-2">
                    <SubmitBtn
                        submit={submit}
                        text="Submit"
                        className=" px-6 py-2 bg-blue-500 text-white rounded flex gap-2 text-lg"
                    />
                </div>
            </form>
            <p className="mt-2 text-center text-sm text-gray-500">
                I have already registered?
                <Link
                    href="/user/login"
                    className="font-semibold leading-6 text-blue-600 hover:text-blue-500 px-1"
                >
                    Login now!
                </Link>
            </p>
        </div>
    );
}
