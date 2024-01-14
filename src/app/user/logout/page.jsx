"use client";
import SubmitBtn from "@/components/utils/SubmitBtn";
import { ErrorToast, SuccessToast } from "@/utils/formHelper";
import Link from "next/link";
import React, { useState } from "react";

export default function Logout() {
    const [submit, setSubmit] = useState(false);
    const logoutHandler = async () => {
        try {
            const req = await fetch("/api/user/logout", { method: "GET" });
            const res = await req.json();
            if (res.status === "Logout Success") {
                SuccessToast(res.status);
                window.location.href = "/";
            } else {
                ErrorToast("An error occurred!");
            }
        } catch (e) {
            e.toString();
        }
    };
    return (
        <main className=" flex flex-col px-6 justify-center items-center min-h-screen">
            <div className="flex flex-col w-full md:lg:xl:w-1/3 p-6 rounded border shadow-2xl">
                <div className=" flex flex-col justify-center items-center py-5 border-b-1">
                    <h2>Ops!</h2>
                    <p className=" flex items-center py-1">
                        Are you Sure! want to Logout?
                    </p>
                </div>
                <div className=" flex justify-between py-5 px-6">
                    <Link
                        href="/"
                        className=" px-5 py-2 rounded transition-all border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                    >
                        Go Home
                    </Link>
                    <SubmitBtn
                        onClick={logoutHandler}
                        submit={submit}
                        text="Logout"
                        className=" bg-red-400 hover:bg-red-600 px-5 py-2 rounded text-white transition-all"
                    />
                </div>
            </div>
        </main>
    );
}
