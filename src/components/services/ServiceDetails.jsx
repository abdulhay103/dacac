import Image from "next/image";
import React from "react";

export default function ServiceDetails({ service }) {
    return (
        <div className=" container py-14 lg:py-20 2xl:py-32">
            <div className=" flex flex-col lg:flex-row gap-10 lg:gap-20 xl:gap-36 2xl:gap-52 justify-center items-center">
                <div className=" w-full">
                    <h2>{service.title}</h2>
                    <p className=" pt-2 text-blue-500">{service.subTitle}</p>
                    <p className=" text-justify pt-5">{service.shortDetails}</p>
                    <p className=" pt-4 text-yellow-900">
                        If you have any query for this service please call-
                        01678690707 (9am to 3pm)
                    </p>
                </div>
                <div className=" w-full bg-blue-gray-100 flex justify-center items-center rounded-3xl">
                    <Image
                        src={service.img}
                        width={400}
                        height={200}
                        className=" object-cover hover:scale-110 transition-all p-10"
                        alt={service.title}
                    />
                </div>
            </div>
            <div className=" text-justify py-10 xl:mt-10">
                {service.details}
            </div>
        </div>
    );
}
