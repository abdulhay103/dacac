"use client";
import React from "react";
import { Navbar, IconButton, Collapse } from "@material-tailwind/react";
import Link from "next/link";
import dacacLogo from "/public/brands/dacac-log.png";
import Image from "next/image";

export function NavbarUi() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mt-5 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Link className=" text-deep-orange-700" href="/">
                Home
            </Link>
            <Link className=" text-deep-orange-700" href="/about">
                About Us
            </Link>
            <Link className=" text-deep-orange-700" href="/services">
                Services
            </Link>
            <Link className=" text-deep-orange-700" href="/directors">
                Board of Directors
            </Link>
            <Link className=" text-deep-orange-700" href="/blogs">
                Blogs
            </Link>
            <Link className=" text-deep-orange-700" href="/notices">
                Notices
            </Link>
            <Link className=" text-deep-orange-700" href="/contact">
                Contact
            </Link>
            <Link className=" text-deep-orange-700" href="/user/login">
                Login
            </Link>
        </ul>
    );

    return (
        <Navbar className=" sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
            <div className=" flex items-center justify-between">
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
