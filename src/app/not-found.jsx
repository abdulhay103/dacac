import React from "react";
import notFoundImage from "/public/others/not-found.png";
import Image from "next/image";
import Link from "next/link";

export default function notFound() {
    return (
        <div className=" w-full min-h-screen flex justify-center items-center inset-0">
            <div className=" flex gap-6 justify-center items-center">
                <div className=" border-r-2 pr-6 border-deep-orange-500">
                    <h1 className=" text-center xl:text-[75px]">404</h1>
                    <h5>Page Not Found</h5>
                </div>
                <Link
                    href="/"
                    className=" animate-pulse text-deep-orange-800 font-bold text-lg"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
}
