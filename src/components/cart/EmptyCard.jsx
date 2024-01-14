"use client";
import Image from "next/image";
import Link from "next/link";
import emptyCart from "/public/cart/empty-cart-2.png";

export default function EmptyCard() {
    return (
        <div className=" w-full min-h-screen flex justify-center items-center inset-0">
            <div className=" grid gap-6 justify-center">
                <Image
                    src={emptyCart}
                    height="500"
                    width="500"
                    className=" object-cover"
                />
                <Link
                    className=" mx-10 mb-10 px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-500 transition-all text-center"
                    href="/"
                >
                    Empty Cart Go Home!
                </Link>
            </div>
        </div>
    );
}
