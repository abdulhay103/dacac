"use client";
import Image from "next/image";
import React, { useState } from "react";

import sideImage from "/public/home/side-image.png";
import bgImage from "/public/home/bg-shape-1.png";
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
} from "@material-tailwind/react";
function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${
                id === open ? "rotate-180" : ""
            } h-5 w-5 transition-transform`}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
        </svg>
    );
}

export default function HeroFAQ() {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        <div className=" relative pt-20 2xl:pt-24 bg-[#f3f7fb] lg:bg-transparent h-[550px] lg:h-[800px] 2xl:h-[1200px]">
            <Image
                src={bgImage}
                className=" absolute hidden lg:block object-cover"
                width="auto"
                height="auto"
                alt="bg-shape"
            />
            <div className=" container absolute pt-5 lg:pt-48 left-12 xl:right-0">
                <div className=" flex gap-20 2xl:gap-28">
                    <div className=" w-full lg:w-1/2 xl:pl-10 pt-16 2xl:pt-52">
                        <h3 className=" pb-3">Frequently Asked Questions:</h3>
                        <>
                            <Accordion
                                open={open === 1}
                                icon={<Icon id={1} open={open} />}
                            >
                                <AccordionHeader onClick={() => handleOpen(1)}>
                                    What is Material Tailwind?
                                </AccordionHeader>
                                <AccordionBody>
                                    We&apos;re not always in the position that
                                    we want to be at. We&apos;re constantly
                                    growing. We&apos;re constantly making
                                    mistakes. We&apos;re constantly trying to
                                    express ourselves and actualize our dreams.
                                </AccordionBody>
                            </Accordion>
                            <Accordion
                                open={open === 2}
                                icon={<Icon id={2} open={open} />}
                            >
                                <AccordionHeader onClick={() => handleOpen(2)}>
                                    How to use Material Tailwind?
                                </AccordionHeader>
                                <AccordionBody>
                                    We&apos;re not always in the position that
                                    we want to be at. We&apos;re constantly
                                    growing. We&apos;re constantly making
                                    mistakes. We&apos;re constantly trying to
                                    express ourselves and actualize our dreams.
                                </AccordionBody>
                            </Accordion>
                            <Accordion
                                open={open === 3}
                                icon={<Icon id={3} open={open} />}
                            >
                                <AccordionHeader onClick={() => handleOpen(3)}>
                                    What can I do with Material Tailwind?
                                </AccordionHeader>
                                <AccordionBody>
                                    We&apos;re not always in the position that
                                    we want to be at. We&apos;re constantly
                                    growing. We&apos;re constantly making
                                    mistakes. We&apos;re constantly trying to
                                    express ourselves and actualize our dreams.
                                </AccordionBody>
                            </Accordion>
                        </>
                    </div>
                    <div className=" hidden lg:block lg:w-1/2 lg:pt-16 2xl:pt-32">
                        <div className=" lg:w-[450px] 2xl:w-[600px] lg:h-[450px] 2xl:h-[600px] rounded-full bg-blue-gray-500 border-[15px] border-white overflow-hidden">
                            <Image
                                src={sideImage}
                                width="auto"
                                height="auto"
                                className=" object-fill"
                                alt="side Image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
