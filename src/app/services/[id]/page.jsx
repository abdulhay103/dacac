import SectionHeader from "@/components/utils/SectionHeader";
import { getSingleService } from "@/utils/assetsData";
import Image from "next/image";
import React from "react";

export default async function SingleService({ params }) {
    let serviceId = parseInt(params.id);
    let service = await getSingleService(serviceId);
    return (
        <div>
            <SectionHeader
                pathName="services"
                title="services Details"
                desc="Elevating Healthcare through Comprehensive Solutions, At MEC Trade Link, we go beyond being a medical equipment supplier. Our range of services is designed to enhance your healthcare experience."
            />
            <div className=" container py-10 lg:py-16 2xl:py-20">
                <div className=" flex flex-col lg:flex-row gap-10 2xl:gap-20 justify-center items-center">
                    <div className=" w-full">
                        <h2>{service.title}</h2>
                        <p>{service.subTitle}</p>
                        <p>{service.shortDetails}</p>
                    </div>
                    <div className=" w-full bg-blue-gray-100 flex justify-center items-center rounded-3xl">
                        <Image
                            src={service.img}
                            width={400}
                            height={200}
                            className=" object-cover"
                            alt={service.title}
                        />
                    </div>
                </div>
                <div className=" py-10">
                    <p>{service.details}</p>
                </div>
            </div>
        </div>
    );
}
