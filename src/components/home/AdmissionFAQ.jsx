"use client";
import React, { useState } from "react";
import bgImage from "/public/home/side-image-2.png";
import sideImage from "/public/home/admission.jpg";

import {
    Accordion,
    AccordionBody,
    AccordionHeader,
} from "@material-tailwind/react";
import Image from "next/image";
import { CheckCircle } from "@phosphor-icons/react";
function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${
                id === open ? "rotate-180 text-white" : ""
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

export default function AdmissionFAQ() {
    const [open, setOpen] = useState(1);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        <div className=" relative pt-8 lg:pt-14 bg-[#f3f7fb] lg:bg-transparent h-[750px] lg:h-[580px] 2xl:h-[800px]">
            <Image
                src={bgImage}
                className=" absolute hidden lg:block object-cover"
                width="1920"
                height="auto"
                alt="bg-shape"
            />
            <div className=" container absolute left-14 lg:left-10 2xl:left-44">
                <div className=" flex gap-20 lg:gap-10 xl:gap-10 2xl:gap-28">
                    <div className=" hidden lg:block lg:w-2/5 2xl:w-1/2">
                        <div className=" lg:w-[450px] 2xl:w-[600px] lg:h-[450px] 2xl:h-[600px] rounded-3xl bg-blue-gray-500 border-[10px] shadow-xl border-white overflow-hidden">
                            <Image
                                src={sideImage}
                                width="auto"
                                height="auto"
                                className=" object-fill"
                                alt="side Image"
                            />
                        </div>
                    </div>
                    <div className=" w-full lg:w-3/5 2xl:w-1/2 xl:pl-10 pt-16 2xl:pt-28">
                        <h2 className="text-center pb-10 2xl:pb-14 underline underline-offset-4">
                            Admission FAQ
                        </h2>
                        <>
                            <Accordion
                                className=" rounded-lg overflow-hidden"
                                open={open === 1}
                                icon={<Icon id={1} open={open} />}
                            >
                                <AccordionHeader
                                    className={
                                        open == 1
                                            ? " bg-deep-orange-500 text-white hover:text-white px-6"
                                            : "bg-white px-6"
                                    }
                                    onClick={() => handleOpen(1)}
                                >
                                    <div className=" flex gap-3">
                                        <CheckCircle
                                            size={24}
                                            className={
                                                open == 1
                                                    ? "text-white"
                                                    : " text-deep-orange-500"
                                            }
                                        />
                                        What is the admission process?
                                    </div>
                                </AccordionHeader>
                                <AccordionBody className=" bg-white px-6">
                                    Only special children are admitted in our
                                    organization and necessary measures are
                                    taken for their physical and mental
                                    development. For this, admission
                                    arrangements are made after first child
                                    needs assessment.
                                </AccordionBody>
                            </Accordion>
                            <Accordion
                                className=" rounded-lg overflow-hidden mt-3"
                                open={open === 2}
                                icon={<Icon id={2} open={open} />}
                            >
                                <AccordionHeader
                                    className={
                                        open == 2
                                            ? " bg-deep-purple-500 text-white hover:text-white px-6"
                                            : "bg-white px-6"
                                    }
                                    onClick={() => handleOpen(2)}
                                >
                                    <div className=" flex gap-3">
                                        <CheckCircle
                                            size={24}
                                            className={
                                                open == 2
                                                    ? "text-white"
                                                    : " text-deep-purple-500"
                                            }
                                        />
                                        How much addmision and tuition fee?
                                    </div>
                                </AccordionHeader>
                                <AccordionBody className=" bg-white px-6">
                                    Our annual session fee is 30 thousand taka.
                                    This session fee is payable in one time or
                                    two sessions. Also monthly tuition fee of 9
                                    thousand taka.
                                </AccordionBody>
                            </Accordion>
                            <Accordion
                                className=" rounded-lg overflow-hidden mt-3"
                                open={open === 3}
                                icon={<Icon id={3} open={open} />}
                            >
                                <AccordionHeader
                                    className={
                                        open == 3
                                            ? " bg-blue-500 text-white hover:text-white px-6"
                                            : "bg-white px-6"
                                    }
                                    onClick={() => handleOpen(3)}
                                >
                                    <div className=" flex gap-3">
                                        <CheckCircle
                                            size={24}
                                            className={
                                                open == 3
                                                    ? "text-white"
                                                    : " text-blue-500"
                                            }
                                        />
                                        Have any transportation facilities?
                                    </div>
                                </AccordionHeader>
                                <AccordionBody className=" bg-white px-6">
                                    The school has no transport facility of its
                                    own. Parents have to transport children at
                                    their own responsibility.
                                </AccordionBody>
                            </Accordion>
                            <Accordion
                                className=" rounded-lg overflow-hidden mt-3"
                                open={open === 4}
                                icon={<Icon id={4} open={open} />}
                            >
                                <AccordionHeader
                                    className={
                                        open == 4
                                            ? " bg-light-green-500 text-white hover:text-white px-6"
                                            : "bg-white px-6"
                                    }
                                    onClick={() => handleOpen(4)}
                                >
                                    <div className=" flex gap-3">
                                        <CheckCircle
                                            size={24}
                                            className={
                                                open == 4
                                                    ? "text-white"
                                                    : " text-light-green-500"
                                            }
                                        />
                                        What is the shift or workday?
                                    </div>
                                </AccordionHeader>
                                <AccordionBody className=" bg-white px-6">
                                    Dream Angel Center for Autistic Children has
                                    three shifts per working day namely Morning
                                    Shift (9am - 12pm), Day Shift (12.30pm -
                                    3.30pm) and Vocational (10am - 3pm). And the
                                    school is open 5 days a week (Sunday to
                                    Thursday).
                                </AccordionBody>
                            </Accordion>
                        </>
                    </div>
                </div>
            </div>
        </div>
    );
}
