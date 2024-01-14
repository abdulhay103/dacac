"use client";
import Link from "next/link";

export default function PlacedOrder() {
    return (
        <div className=" w-full flex flex-col justify-center items-center min-h-screen">
            <div className=" grid gap-6 justify-center">
                <p>Successfuly Placed your order. Thanks for with us!</p>
                <Link
                    className=" px-4 py-2 bg-green-400 text-white rounded hover:bg-green-500 transition-all text-center"
                    href="/"
                >
                    Go Home!
                </Link>
            </div>
        </div>
    );
}
