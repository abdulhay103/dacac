"use client";
import { PlusIcon } from "@heroicons/react/24/solid";
import {
    Briefcase,
    CalendarCheck,
    Certificate,
    ChalkboardTeacher,
    Coffee,
    Student,
} from "@phosphor-icons/react";
import CountUp from "react-countup";

export default function ActivitiesCounter() {
    return (
        <div className=" container py-16 xl:py-24 2xl:py-32">
            <div className=" grid grid-flow-row lg:grid-flow-col grid-cols-4 gap-8">
                <div className=" col-span-4 lg:col-span-1 text-center p-5 rounded border border-deep-orange-400 hover:shadow-md hover:scale-105 transition-all">
                    <div className=" flex items-center gap-5 justify-center">
                        <div className=" p-4 bg-deep-orange-400 rounded-full">
                            <CalendarCheck size={32} className=" text-white" />
                        </div>
                        <div className=" flex gap-1">
                            <p className=" text-5xl font-bold font-serif">
                                <CountUp start={0} end={13} duration={5} />
                            </p>
                            <PlusIcon className=" w-6 h-6 align-super mr-2" />
                        </div>
                    </div>
                    <h5 className=" text-current pt-4">Years of Experience</h5>
                </div>
                <div className=" col-span-4 lg:col-span-1 text-center p-5 rounded border border-deep-purple-400 hover:shadow-md hover:scale-105 transition-all">
                    <div className=" flex items-center gap-5 justify-center">
                        <div className=" p-4 bg-deep-purple-400 rounded-full">
                            <Student size={32} className=" text-white" />
                        </div>
                        <div className=" flex gap-1">
                            <p className=" text-5xl font-bold font-serif">
                                <CountUp start={0} end={1000} duration={5} />
                            </p>
                            <PlusIcon className=" w-6 h-6 align-super mr-2" />
                        </div>
                    </div>
                    <h5 className=" text-current pt-4">Successfull Students</h5>
                </div>
                <div className=" col-span-4 lg:col-span-1 text-center p-5 rounded border border-blue-400 hover:shadow-md hover:scale-105 transition-all">
                    <div className=" flex items-center gap-5 justify-center">
                        <div className=" p-4 bg-blue-400 rounded-full">
                            <ChalkboardTeacher
                                size={32}
                                className=" text-white"
                            />
                        </div>
                        <div className=" flex gap-1">
                            <p className=" text-5xl font-bold font-serif">
                                <CountUp start={0} end={35} duration={5} />
                            </p>
                            <PlusIcon className=" w-6 h-6 align-super mr-2" />
                        </div>
                    </div>
                    <h5 className=" text-current pt-4">Teacher and Staff</h5>
                </div>
                <div className=" col-span-4 lg:col-span-1 text-center p-5 rounded border border-light-green-400 hover:shadow-md hover:scale-105 transition-all">
                    <div className=" flex items-center gap-5 justify-center">
                        <div className=" p-4 bg-light-green-400 rounded-full">
                            <Certificate size={32} className=" text-white" />
                        </div>
                        <div className=" flex gap-1">
                            <p className=" text-5xl font-bold font-serif">
                                <CountUp start={0} end={15} duration={5} />
                            </p>
                            <PlusIcon className=" w-6 h-6 align-super mr-2" />
                        </div>
                    </div>
                    <h5 className=" text-current pt-4">
                        Awards and Certificates
                    </h5>
                </div>
            </div>
        </div>
    );
}
