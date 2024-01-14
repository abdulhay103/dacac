"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ErrorToast, SuccessToast } from "@/utils/formHelper";
import SubmitBtn from "../utils/SubmitBtn";

export default function SendOtpForm() {
    const router = useRouter();
    const [submit, setSubmit] = useState(false);
    const [inputValue, setInputValue] = useState({
        email: "",
    });
    let { email } = inputValue;
    const onChangeHandler = (name, value) => {
        setInputValue({ ...inputValue, [name]: value });
    };
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            setSubmit(true);
            const config = {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(inputValue),
            };
            const req = await fetch("/api/user/recovery", config);
            const res = await req.json();
            if (!req.ok) {
                ErrorToast(res.status);
            } else {
                SuccessToast(res.status);
                router.replace(`/user/verify-otp/?email=${email}`);
            }
        } catch (e) {
            // throw new Error(e.toString());
            e.toString();
        } finally {
            setSubmit(false);
        }
    };
    return (
        <div>
            <form
                onSubmit={(e) => {
                    onSubmitHandler(e);
                }}
            >
                <input
                    onChange={(e) => onChangeHandler("email", e.target.value)}
                    value={email}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Example@gmail.com"
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
            <p className=" mt-2 text-center text-sm text-gray-500">
                I remembered password.
                <Link
                    href="/user/login"
                    className="font-semibold leading-6 text-blue-600 hover:text-blue-500 px-1"
                >
                    Go to login?
                </Link>
            </p>
        </div>
    );
}
