"use client";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ErrorToast, SuccessToast } from "@/utils/formHelper";
import SubmitBtn from "../utils/SubmitBtn";

export default function ResetPasswordForm() {
    const route = useRouter();
    const searchParams = useSearchParams();
    let email = searchParams.get("email");
    const [submit, setSubmit] = useState(false);
    const [inputValue, setInputValue] = useState({
        email: email,
        newPassword: "",
        confirmPassword: "",
    });
    let { newPassword, confirmPassword } = inputValue;
    const onChangeHandler = (name, value) => {
        setInputValue({ ...inputValue, [name]: value });
    };
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            setSubmit(true);
            const config = {
                method: "PATCH",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(inputValue),
            };
            const req = await fetch("/api/user/recovery", config);
            const res = await req.json();
            if (res.status === "Invaild User!") {
                ErrorToast(res.status);
            } else if (res.status === "Passwor dosn't match!") {
                ErrorToast(res.status);
            } else {
                SuccessToast(res.status);
                route.replace("/user/login");
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
                action=""
                method="PATCH"
                onSubmit={(e) => {
                    onSubmitHandler(e);
                }}
            >
                <input
                    onChange={(e) => {
                        onChangeHandler("newPassword", e.target.value);
                    }}
                    value={newPassword}
                    type="password"
                    name="newPassword"
                    id="newPassword"
                    placeholder="New Password"
                    className=" w-full py-2 px-5 border rounded outline-blue-300 focus:text-blue-500 mb-4"
                />
                <input
                    onChange={(e) => {
                        onChangeHandler("confirmPassword", e.target.value);
                    }}
                    value={confirmPassword}
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm Password"
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
        </div>
    );
}
