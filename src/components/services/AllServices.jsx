import Image from "next/image";
import CtaBtn from "../utils/CtaBtn";
export default function ({ services }) {
    return (
        <div className=" container py-10">
            <div className="grid grid-flow-row grid-cols-12 services-center gap-8 lg:gap-10 xl:gap-12 py-10 lg:py-12 xl:py-16 2xl:py-20">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className=" p-5 lg:p-6 col-span-12 lg:col-span-4 gap-6 lg:gap-8 xl:gap-10 min-h-[430px] border rounded-md bg-white shadow-lg hover:shadow-xl hover:border-deep-orange-500 hover:scale-105 transition-all duration-300"
                    >
                        <div className=" flex flex-col gap-5 items-center justify-center">
                            <div className=" w-28 h-28 lg:w-32 lg:h-32 overflow-hidden bg-white rounded-full border">
                                <Image
                                    src={service.img}
                                    width="1000"
                                    height="1000"
                                    className=" object-cover"
                                    alt={service.title}
                                />
                            </div>
                            <div className=" text-center">
                                <h4 className="pt-2 capitalize">
                                    {service.title.slice(0, 25)}
                                </h4>
                                <p className="font-semibold">
                                    {service.subTitle}
                                </p>
                            </div>
                        </div>
                        <p className=" py-3 text-justify">
                            {service.shortDetails.slice(0, 200)}
                        </p>
                        <div className=" flex justify-center py-5">
                            <CtaBtn
                                href={`/services/${service.id}`}
                                text="Read More"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
