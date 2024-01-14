"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ErrorToast, SuccessToast } from "@/utils/formHelper";
import SubmitBtn from "../utils/SubmitBtn";

export default function LoginForm() {
    const [submit, setSubmit] = useState(false);
    const [inputValues, setInputValues] = useState({
        email: "",
        password: "",
    });
    let { email, password } = inputValues;

    //on change handler
    const onChangeHandler = (name, value) => {
        setInputValues({ ...inputValues, [name]: value });
    };
    // On submit handler
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setSubmit(true);
        try {
            const config = {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(inputValues),
            };
            let req = await fetch("/api/user/login", config);
            let res = await req.json();
            if (res.status === "Invalid username or password.") {
                ErrorToast(res.status);
            } else if (res.status === "Login Fail. Server Problem.") {
                ErrorToast(res.status);
            } else {
                SuccessToast(res.status);
                window.location.href = "/";
            }
        } catch (e) {
            ErrorToast("Login Fail. Server Error!");
            throw new Error(e.toString());
        } finally {
            setSubmit(false);
        }
    };
    return (
        <div>
            <form
                action=""
                method="post"
                onSubmit={(e) => {
                    onSubmitHandler(e);
                }}
            >
                <input
                    onChange={(e) => {
                        onChangeHandler("email", e.target.value);
                    }}
                    value={email}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Example@gmail.com"
                    className=" w-full py-2 px-5 border rounded outline-blue-300 focus:text-blue-500 mb-4"
                />
                <div className="text-sm text-right py-1">
                    <Link
                        href="/user/send-otp"
                        className="font-semibold text-blue-600 hover:text-blue-500"
                    >
                        Forgot password?
                    </Link>
                </div>
                <input
                    onChange={(e) => {
                        onChangeHandler("password", e.target.value);
                    }}
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
            <p className=" mt-2 text-center text-sm text-gray-500">
                Not registered yet?
                <Link
                    href="/user/register"
                    className="font-semibold leading-6 text-blue-600 hover:text-blue-500 px-1"
                >
                    Register Now!
                </Link>
            </p>
        </div>
    );
}
