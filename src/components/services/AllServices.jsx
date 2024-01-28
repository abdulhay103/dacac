import Image from "next/image";
import CtaBtn from "../utils/CtaBtn";
import { assetData } from "../utils/essentialObejct";
export default function () {
    let servicesArray = assetData.servicesArray;
    return (
        <div className=" container py-10">
            <div className="grid grid-flow-row grid-cols-12 items-center gap-8 lg:gap-10 xl:gap-12 py-10 lg:py-12 xl:py-16 2xl:py-20">
                {servicesArray.map((item, index) => (
                    <div
                        key={index}
                        className=" p-5 lg:p-6 col-span-12 lg:col-span-4 gap-6 lg:gap-8 xl:gap-10 min-h-[430px] border rounded-md bg-white shadow-lg hover:shadow-xl hover:border-deep-orange-500 hover:scale-105 transition-all"
                    >
                        <div className=" flex flex-col gap-5 items-center justify-center">
                            <div className=" w-28 h-28 lg:w-32 lg:h-32 overflow-hidden bg-white rounded-full">
                                <Image
                                    src={item.img}
                                    width="auto"
                                    height="auto"
                                    className=" object-cover"
                                    alt="Product Consultation"
                                />
                            </div>
                            <div className=" text-center">
                                <h4 className="pt-2 capitalize">
                                    {item.title}
                                </h4>
                                <p className="font-semibold">{item.subTitle}</p>
                            </div>
                        </div>
                        <p className=" py-3 text-justify">{item.details}</p>
                        <div className=" flex justify-center py-5">
                            <CtaBtn
                                href={`/services/${item.id}`}
                                text="Read More"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
