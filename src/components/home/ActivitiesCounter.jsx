"use client";
import { PlusIcon } from "@heroicons/react/24/solid";
import {
    Briefcase,
    CalendarCheck,
    Certificate,
    Coffee,
} from "@phosphor-icons/react";
import CountUp from "react-countup";

export default function ActivitiesCounter() {
    return (
        <div className=" container py-10 xl:py-20 2xl:py-32">
            <div className=" grid grid-flow-row lg:grid-flow-col grid-cols-4 gap-6">
                <div className=" col-span-4 lg:col-span-1 text-center p-5 rounded border hover:shadow-md hover:scale-105 transition-all">
                    <div className=" flex items-center gap-5 justify-center">
                        <div className=" p-4 bg-cyan-100 rounded-full">
                            <CalendarCheck size={32} />
                        </div>
                        <div className=" flex gap-1">
                            <p className=" text-5xl font-bold font-serif">
                                <CountUp start={0} end={11} duration={5} />
                            </p>
                            <PlusIcon className=" w-6 h-6 align-super mr-2" />
                        </div>
                    </div>
                    <h5 className=" text-current pt-4">Years of Experience</h5>
                </div>
                <div className=" col-span-4 lg:col-span-1 text-center p-5 rounded border hover:shadow-md hover:scale-105 transition-all">
                    <div className=" flex items-center gap-5 justify-center">
                        <div className=" p-4 bg-cyan-100 rounded-full">
                            <Briefcase size={32} />
                        </div>
                        <div className=" flex gap-1">
                            <p className=" text-5xl font-bold font-serif">
                                <CountUp start={0} end={100} duration={5} />
                            </p>
                            <PlusIcon className=" w-6 h-6 align-super mr-2" />
                        </div>
                    </div>
                    <h5 className=" text-current pt-4">On Demanded Products</h5>
                </div>
                <div className=" col-span-4 lg:col-span-1 text-center p-5 rounded border hover:shadow-md hover:scale-105 transition-all">
                    <div className=" flex items-center gap-5 justify-center">
                        <div className=" p-4 bg-cyan-100 rounded-full">
                            <Coffee size={32} />
                        </div>
                        <div className=" flex gap-1">
                            <p className=" text-5xl font-bold font-serif">
                                <CountUp start={0} end={150} duration={5} />
                            </p>
                            <PlusIcon className=" w-6 h-6 align-super mr-2" />
                        </div>
                    </div>
                    <h5 className=" text-current pt-4">Happy Clients</h5>
                </div>
                <div className=" col-span-4 lg:col-span-1 text-center p-5 rounded border hover:shadow-md hover:scale-105 transition-all">
                    <div className=" flex items-center gap-5 justify-center">
                        <div className=" p-4 bg-cyan-100 rounded-full">
                            <Certificate size={32} />
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
