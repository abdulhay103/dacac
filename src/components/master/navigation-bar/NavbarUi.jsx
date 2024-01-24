"use client";
import React, { useEffect, useState } from "react";
import { Navbar, IconButton, Collapse } from "@material-tailwind/react";
import Link from "next/link";
import dacacLogo from "/public/brands/dacac-log.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { UserCircle } from "@phosphor-icons/react";

export function NavbarUi({ user }) {
    const pathname = usePathname();
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        // Add event listener for window resize
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );

        // Add event listener for window scroll
        window.addEventListener("scroll", () => {
            let header = document.querySelector(".stickyHeader");

            header.classList.toggle("sticky", window.scrollY > 0);
        });

        // Clean up event listeners when the component unmounts
        return () => {
            window.removeEventListener("resize", () => {});
            window.removeEventListener("scroll", () => {});
        };
    }, []);

    const navList = (
        <ul className="mt-5 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Link
                className={
                    pathname === "/"
                        ? "text-deep-orange-700 text-lg font-semibold hover:text-deep-orange-700 inline-block relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[3px] before:rounded-full before:opacity-100 before:bg-deep-orange-600"
                        : " text-gray-800 text-lg font-semibold hover:text-deep-orange-700 inline-block relative transition-all duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[3px] before:rounded-full before:opacity-0 before:transition-all before:duration-300 before:bg-deep-orange-600 hover:before:w-full hover:before:opacity-100 "
                }
                href="/"
            >
                Home
            </Link>
            <Link
                className={
                    pathname === "/about"
                        ? "text-deep-orange-700 text-lg font-semibold hover:text-deep-orange-700 inline-block relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[3px] before:rounded-full before:opacity-100 before:bg-deep-orange-600"
                        : " text-gray-800 text-lg font-semibold hover:text-deep-orange-700 inline-block relative transition-all duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[3px] before:rounded-full before:opacity-0 before:transition-all before:duration-300 before:bg-deep-orange-600 hover:before:w-full hover:before:opacity-100 "
                }
                href="/about"
            >
                About
            </Link>
            <Link
                className={
                    pathname === "/services"
                        ? "text-deep-orange-700 text-lg font-semibold hover:text-deep-orange-700 inline-block relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[3px] before:rounded-full before:opacity-100 before:bg-deep-orange-600"
                        : " text-gray-800 text-lg font-semibold hover:text-deep-orange-700 inline-block relative transition-all duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[3px] before:rounded-full before:opacity-0 before:transition-all before:duration-300 before:bg-deep-orange-600 hover:before:w-full hover:before:opacity-100 "
                }
                href="/services"
            >
                Services
            </Link>
            <Link
                className={
                    pathname === "/directors"
                        ? "text-deep-orange-700 text-lg font-semibold hover:text-deep-orange-700 inline-block relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[3px] before:rounded-full before:opacity-100 before:bg-deep-orange-600"
                        : " text-gray-800 text-lg font-semibold hover:text-deep-orange-700 inline-block relative transition-all duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[3px] before:rounded-full before:opacity-0 before:transition-all before:duration-300 before:bg-deep-orange-600 hover:before:w-full hover:before:opacity-100 "
                }
                href="/directors"
            >
                Board of Directors
            </Link>
            <Link
                className={
                    pathname === "/blogs"
                        ? "text-deep-orange-700 text-lg font-semibold hover:text-deep-orange-700 inline-block relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[3px] before:rounded-full before:opacity-100 before:bg-deep-orange-600"
                        : " text-gray-800 text-lg font-semibold hover:text-deep-orange-700 inline-block relative transition-all duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[3px] before:rounded-full before:opacity-0 before:transition-all before:duration-300 before:bg-deep-orange-600 hover:before:w-full hover:before:opacity-100 "
                }
                href="/blogs"
            >
                Blogs
            </Link>
            <Link
                className={
                    pathname === "/notices"
                        ? "text-deep-orange-700 text-lg font-semibold hover:text-deep-orange-700 inline-block relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[3px] before:rounded-full before:opacity-100 before:bg-deep-orange-600"
                        : " text-gray-800 text-lg font-semibold hover:text-deep-orange-700 inline-block relative transition-all duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[3px] before:rounded-full before:opacity-0 before:transition-all before:duration-300 before:bg-deep-orange-600 hover:before:w-full hover:before:opacity-100 "
                }
                href="/notices"
            >
                Notices
            </Link>
            <Link
                className={
                    pathname === "/contact"
                        ? "text-deep-orange-700 text-lg font-semibold hover:text-deep-orange-700 inline-block relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[3px] before:rounded-full before:opacity-100 before:bg-deep-orange-600"
                        : " text-gray-800 text-lg font-semibold hover:text-deep-orange-700 inline-block relative transition-all duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[3px] before:rounded-full before:opacity-0 before:transition-all before:duration-300 before:bg-deep-orange-600 hover:before:w-full hover:before:opacity-100 "
                }
                href="/contact"
            >
                Contact
            </Link>
            {user === null ? (
                <Link
                    className={
                        pathname === "/user/login"
                            ? "text-deep-orange-700 text-lg font-semibold hover:text-deep-orange-700 inline-block relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[3px] before:rounded-full before:opacity-100 before:bg-deep-orange-600"
                            : " text-gray-800 text-lg font-semibold hover:text-deep-orange-700 inline-block relative transition-all duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[3px] before:rounded-full before:opacity-0 before:transition-all before:duration-300 before:bg-deep-orange-600 hover:before:w-full hover:before:opacity-100 "
                    }
                    href="/user/login"
                >
                    Login
                </Link>
            ) : (
                <Link href="/dashboard">
                    {user.avater === "0" ? (
                        <UserCircle size={32} className=" text-gray-800" />
                    ) : (
                        <Image
                            src={user.avater}
                            width={32}
                            height={32}
                            className=" object-cover rounded-full"
                            alt="User Image"
                        />
                    )}
                </Link>
            )}
        </ul>
    );

    return (
        <Navbar className="stickyHeader absolute lg:backdrop-blur-none lg:backdrop-saturate-100 lg:bg-opacity-0 border-none top-0 z-50 h-max max-w-full rounded-none px-4 py-4 lg:px-8 lg:py-6 shadow-none transition-all duration-300">
            <div className=" lg:container flex items-center justify-between">
                <Link href="/" className=" flex gap-5 items-center">
                    <Image
                        src={dacacLogo}
                        width={150}
                        height={55}
                        className=" object-cover"
                        alt="Main Logo"
                    />
                </Link>
                <div className="flex items-center gap-4">
                    <div className="mr-4 hidden lg:block">{navList}</div>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-deep-orange-800 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="red"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="red"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>
            </div>
            <Collapse open={openNav}>{navList}</Collapse>
        </Navbar>
    );
}
