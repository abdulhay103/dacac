import Image from "next/image";
import FounderImage from "/public/users/Founder-image.jpg";
import brandLogo from "/public/brands/mec_logo_slug.png";
import CtaBtn from "../utils/CtaBtn";
export default function FounderUi() {
    return (
        <section className=" bg-gradient-to-br to-purple-100 from-cyan-50">
            <div className=" container py-10 xl:py-20 2xl:py-28">
                <div className=" grid grid-flow-row lg:grid-flow-col grid-cols-8 gap-10 xl:gap-20 2xl:gap-32 items-center">
                    <div className=" col-span-8 lg:col-span-3 border-3 border-white rounded relative">
                        <div className="w-full rounded overflow-hidden">
                            <Image
                                src={FounderImage}
                                width="auto"
                                height="auto"
                                className=" object-cover"
                                alt="Founder-Image"
                            />
                        </div>
                        <div className=" bg-white absolute bottom-5 right-5 px-4 lg:px-5 py-4 rounded flex gap-3 lg:gap-4 items-center">
                            <div className=" w-16 lg:w-20 ">
                                <Image
                                    src={brandLogo}
                                    width="auto"
                                    height="auto"
                                    className=" object-cover"
                                    alt="Founder-Image"
                                />
                            </div>
                            <div>
                                <h5 className=" text-lg xl:text-xl">
                                    Engr. Md Kamrul Hasan
                                </h5>
                                <p className=" text-deep-orange-500">
                                    Proprietor
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className=" col-span-8 lg:col-span-5">
                        <h5 className=" text-2xl py-2">
                            One of the pioneers in healthcare equipment import
                            and export.
                        </h5>
                        <p className=" text-gray-800 py-2">
                            "Under Engr. Md Kamrul Hasan's leadership, we have
                            created a trusted brand value in the market. He
                            brings his extensive experience and expertise to
                            ensure that MEC Trade-Link continues to be a trusted
                            name in the healthcare industry."
                        </p>
                        <p className=" py-2 text-gray-800">
                            In the year 2013, the company started marketing
                            disposable and other medical-related items. Our
                            marketed brands are well known in the market and in
                            some cases, we are leading the market.
                        </p>
                        <p className=" py-2 text-gray-800">
                            <span className=" font-semibold">Experience:</span>{" "}
                            16 years in Supply & Maintenance Servicing of
                            medical equipments.
                        </p>
                        <p className=" py-2 text-gray-800">
                            <span className=" font-semibold">Training:</span> 15
                            times overseas training on different types of
                            Medical Equipments
                        </p>
                        <div className=" py-6">
                            <CtaBtn href="/about" text="View Details" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
