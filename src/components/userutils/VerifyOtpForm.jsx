"use client";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ErrorToast, SuccessToast } from "@/utils/formHelper";
import SubmitBtn from "../utils/SubmitBtn";

export default function VerifyOtpForm() {
    const router = useRouter();
    const params = useSearchParams();
    let email = params.get("email");
    const [submit, setSubmit] = useState(false);
    const [inputValue, setInputValue] = useState({
        email: email,
        otp: "",
    });
    let { otp } = inputValue;
    const onChangeHandler = (name, value) => {
        setInputValue({ ...inputValue, [name]: value });
    };
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            setSubmit(true);
            const config = {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(inputValue),
            };
            const req = await fetch("/api/user/recovery", config);
            const res = await req.json();
            if (res.status === "Invaild OTP!") {
                ErrorToast(res.status);
            } else if (res.status === "Data Fatchng Fail.") {
                ErrorToast(res.status);
            } else {
                SuccessToast(res.status);
                router.replace(`/user/reset-password/?email=${email}`);
            }
        } catch (e) {
            e.toString();
        } finally {
            setSubmit(false);
        }
    };
    return (
        <div>
            <form
                method="PUT"
                onSubmit={(e) => {
                    onSubmitHandler(e);
                }}
            >
                <input
                    onChange={(e) => {
                        onChangeHandler("otp", e.target.value);
                    }}
                    value={otp}
                    type="text"
                    name="otp"
                    id="otp"
                    placeholder="6 digit OTP here"
                    className=" w-full py-2 px-5 border rounded outline-deep-orange-300 focus:text-deep-orange-500 mb-4"
                />
                <div className=" w-full flex justify-center py-2">
                    <SubmitBtn
                        submit={submit}
                        text="Submit"
                        className=" px-6 py-2 bg-deep-orange-500 text-white rounded flex gap-2 text-lg"
                    />
                </div>
            </form>
        </div>
    );
}
