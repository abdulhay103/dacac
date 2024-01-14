import Image from "next/image";
import Certificate from "/public/others/Certificate-of-Achievement.jpg";
import CtaBtn from "../utils/CtaBtn";
import SectionHeader from "../utils/SectionHeader";

export default function CertificatesUi() {
    return (
        <section className="py-8 lg:py-10 xl:py-20 2xl:py-28">
            <SectionHeader
                title="Achieving something special for us"
                desc="During this long journey we have worked with various
                        organizations, we have had to face various types of
                        transactions and contracts with them to facilitate the
                        work through which we have acquired various experience
                        certificates. Here are some examples to gain the
                        satisfaction and trust of our new clients."
            />

            <div className=" container grid grid-flow-row lg:grid-flow-col grid-cols-3 gap-6 xl:gap-10 2xl0:gap-16 py-10 xl:py-16 2xl:py-20">
                <div className=" col-span-3 lg:col-span-1 min-h-[500px] border-b-3 border-e-3 border hover:border-blue-500 rounded hover:shadow-lg transition-all">
                    <div className=" w-ful border-b-3 border-white hover:border-blue-500 rounded-b-lg transition-all">
                        <div className=" w-full p-6 overflow-hidden">
                            <Image
                                src={Certificate}
                                width="auto"
                                height="auto"
                                className=" object-cover overflow-hidden rounded hover:scale-105 hover:skew-x-1 transition-all"
                                alt="Certificate"
                            />
                        </div>
                    </div>
                    <div className="p-6">
                        <h5>Best Buyer</h5>
                        <p className="py-1">
                            <span className=" font-semibold pr-1">
                                Organization:
                            </span>
                            Medikal 2000, TURKEY
                        </p>
                        <p className="py-1">
                            <span className=" font-semibold pr-1">Year:</span>
                            2023
                        </p>
                        <p className=" text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quam labore facere veniam distinctio officiis
                            impedit architecto reprehenderit quas error
                            consectetur porro, dicta ducimus fugit fugiat quae?
                            Id distinctio ipsum harum.
                        </p>
                    </div>
                    <div className=" flex justify-center pb-10 pt-3">
                        <CtaBtn href="/about" text="Learn More" />
                    </div>
                </div>
                <div className=" col-span-3 lg:col-span-1 min-h-[500px] border-b-3 border-e-3 border hover:border-blue-500 rounded hover:shadow-lg transition-all">
                    <div className=" w-ful border-b-3 border-white hover:border-blue-500 rounded-b-lg transition-all">
                        <div className=" w-full p-6 overflow-hidden">
                            <Image
                                src={Certificate}
                                width="auto"
                                height="auto"
                                className=" object-cover overflow-hidden rounded hover:scale-105 hover:skew-x-1 transition-all"
                                alt="Certificate"
                            />
                        </div>
                    </div>
                    <div className="p-6">
                        <h5>Best Buyer</h5>
                        <p className="py-1">
                            <span className=" font-semibold pr-1">
                                Organization:
                            </span>
                            Medikal 2000, TURKEY
                        </p>
                        <p className="py-1">
                            <span className=" font-semibold pr-1">Year:</span>
                            2023
                        </p>

                        <p className=" text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quam labore facere veniam distinctio officiis
                            impedit architecto reprehenderit quas error
                            consectetur porro, dicta ducimus fugit fugiat quae?
                            Id distinctio ipsum harum.
                        </p>
                    </div>
                    <div className=" flex justify-center pb-10 pt-3">
                        <CtaBtn href="/about" text="Learn More" />
                    </div>
                </div>
                <div className=" col-span-3 lg:col-span-1 min-h-[500px] border-b-3 border-e-3 border hover:border-blue-500 rounded hover:shadow-lg transition-all">
                    <div className=" w-ful border-b-3 border-white hover:border-blue-500 rounded-b-lg transition-all">
                        <div className=" w-full p-6 overflow-hidden">
                            <Image
                                src={Certificate}
                                width="auto"
                                height="auto"
                                className=" object-cover overflow-hidden rounded hover:scale-105 hover:skew-x-1 transition-all"
                                alt="Certificate"
                            />
                        </div>
                    </div>
                    <div className="p-6">
                        <h5>Best Buyer</h5>
                        <p className="py-1">
                            <span className=" font-semibold pr-1">
                                Organization:
                            </span>
                            Medikal 2000, TURKEY
                        </p>
                        <p className="py-1">
                            <span className=" font-semibold pr-1">Year:</span>
                            2023
                        </p>

                        <p className=" text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quam labore facere veniam distinctio officiis
                            impedit architecto reprehenderit quas error
                            consectetur porro, dicta ducimus fugit fugiat quae?
                            Id distinctio ipsum harum.
                        </p>
                    </div>
                    <div className=" flex justify-center pb-10 pt-3">
                        <CtaBtn href="/about" text="Learn More" />
                    </div>
                </div>
            </div>
        </section>
    );
}
