"use client";
import Image from "next/image";
import dacacLogo from "/public/brands/dacac-log.png";
import { useState } from "react";
import SubmitBtn from "@/components/utils/SubmitBtn";
import Link from "next/link";
import {
    FacebookLogo,
    Heart,
    InstagramLogo,
    LinkedinLogo,
    TwitterLogo,
    YoutubeLogo,
} from "@phosphor-icons/react";
import { ErrorToast, IsEmail, SuccessToast } from "@/utils/formHelper";

export default function FooterUi({ blogs }) {
    console.log(blogs);
    const [submit, setSubmit] = useState(false);
    const date = new Date();
    let getYear = date.getFullYear();

    const [inputValues, setInputValues] = useState({
        email: "",
    });
    const onChangeHandler = (name, value) => {
        setInputValues({ ...inputValues, [name]: value });
    };
    const onSubmitHandler = async () => {
        try {
            if (IsEmail(inputValues.email)) {
                ErrorToast("Valied Email Required");
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
                const req = await fetch("/api/subscribers", config);
                const res = await req.json();
                if (!req.ok) {
                    ErrorToast(res.status);
                } else if (res.status === "This email already subscribed.") {
                    ErrorToast(res.status);
                } else {
                    SuccessToast(res.status);
                    setInputValues({
                        email: "",
                    });
                }
            }
        } catch (e) {
            throw new Error(e.toString());
        } finally {
            setSubmit(false);
        }
    };
    return (
        <div className=" pb-6 bg-deep-purple-900">
            <div className=" container text-deep-orange-500 grid gap-8 grid-flow-row lg:grid-flow-col grid-cols-6 pt-16 pb-8">
                <div className=" col-span-6 lg:col-span-2">
                    <div className=" w-full lg:w-64 bg-white py-5 px-6 rounded-lg">
                        <Image
                            src={dacacLogo}
                            width="auto"
                            height=" auto"
                            className=" object-cover"
                            alt="Logo"
                        />
                    </div>
                    <div className="flex gap-5 py-6">
                        <Link
                            href="https://www.facebook.com/dacac.bd"
                            target="_blank"
                        >
                            <FacebookLogo
                                size={28}
                                className=" text-white hover:text-deep-orange-500 hover:scale-110 transition-all"
                            />
                        </Link>
                        <Link href="https://twitter.com/home" target="_blank">
                            <TwitterLogo
                                size={28}
                                className=" text-white hover:text-deep-orange-500 hover:scale-110 transition-all"
                            />
                        </Link>
                        <Link href="https://bd.linkedin.com/" target="_blank">
                            <LinkedinLogo
                                size={28}
                                className=" text-white hover:text-deep-orange-500 hover:scale-110 transition-all"
                            />
                        </Link>
                        <Link href="https://www.instagram.com/" target="_blank">
                            <InstagramLogo
                                size={28}
                                className=" text-white hover:text-deep-orange-500 hover:scale-110 transition-all"
                            />
                        </Link>
                        <Link href="https://www.youtube.com/" target="_blank">
                            <YoutubeLogo
                                size={28}
                                className=" text-white hover:text-deep-orange-500 hover:scale-110 transition-all"
                            />
                        </Link>
                    </div>
                </div>
                <div className=" col-span-6 lg:col-span-1">
                    <h4 className=" text-white pb-6">Quick Links</h4>
                    <div className=" flex flex-col gap-1">
                        <Link
                            href="/about"
                            className="text-white hover:font-medium hover:text-deep-orange-500 transition-all"
                        >
                            About
                        </Link>
                        <Link
                            href="/services"
                            className="text-white hover:font-medium hover:text-deep-orange-500 transition-all"
                        >
                            Services
                        </Link>
                        <Link
                            href="/contact"
                            className="text-white hover:font-medium hover:text-deep-orange-500 transition-all"
                        >
                            Notices
                        </Link>
                        <Link
                            href="/contact"
                            className="text-white hover:font-medium hover:text-deep-orange-500 transition-all"
                        >
                            Blogs
                        </Link>
                        <Link
                            href="/contact"
                            className="text-white hover:font-medium hover:text-deep-orange-500 transition-all"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
                <div className=" col-span-6 lg:col-span-1">
                    <h4 className=" text-white pb-6">Latest Blogs</h4>
                    <div className=" flex flex-col gap-1">
                        {blogs.map((blog) => (
                            <Link
                                key={blog.id}
                                href={`/blogs/${blog.id}`}
                                className=" py-1 text-white hover:text-deep-orange-600"
                            >
                                {blog.title.slice(0, 20)}..
                            </Link>
                        ))}
                    </div>
                </div>
                <div className=" col-span-6 lg:col-span-2">
                    <h4 className=" text-white pb-6">News Letter</h4>
                    <h6 className=" text-white">Not Quite Ready For DACAC?</h6>
                    <p className=" py-2 text-cyan-50">
                        Join our online community for free. No spam ever.
                    </p>
                    <div className="flex gap-3 bg-white rounded p-1 mt-3">
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={inputValues.email}
                            onChange={(e) =>
                                onChangeHandler("email", e.target.value)
                            }
                            className=" px-2 text-gray-600 placeholder:text-gray-500 bg-white border-none w-full focus:outline-none"
                        />
                        <SubmitBtn
                            onClick={onSubmitHandler}
                            text="Subscribe"
                            submit={submit}
                            className=" px-4 py-2 rounded bg-deep-orange-500 hover:text-black text-white border border-deep-orange-500 transition-all"
                        />
                    </div>
                </div>
            </div>
            <div className="pt-5 lg:pt-3 container">
                <div className="border-t border-cyan-100 py-5 grid grid-flow-row  gap-4 lg:grid-flow-col justify-between">
                    <p className=" text-white text-sm">
                        <span>&#64;{getYear}</span> Dream Angels Center for
                        Autistic Children(DACAC), All Right Reserved.
                    </p>
                    <div className=" flex items-center text-white text-sm">
                        Made with
                        <span className="text-red-500 px-1">
                            <Heart size={18} weight="fill" />
                        </span>
                        by team
                        <Link
                            href="https://aerodevs.com/"
                            target="_blank"
                            className="pl-1"
                        >
                            AeroDevs
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
