import Image from "next/image";
import Link from "next/link";

export default function DirectorsUi({ directors }) {
    return (
        <div className=" py-16 lg:py-24 2xl:py-32">
            <div className="container">
                <div className=" w-full lg:w-3/5 mx-auto pb-20">
                    <div className=" flex gap-2 items-center justify-center pb-3">
                        <div className=" w-3 h-3 bg-blue-500"></div>
                        <h5 className=" uppercase text-blue-500 px-2 font-normal">
                            Our visionary leaders
                        </h5>
                        <div className=" w-3 h-3 bg-blue-500"></div>
                    </div>
                    <div>
                        <h2 className=" text-center text-[28px] lg:text-[36px]">
                            Our directors work collaboratively to uphold the
                            values of DACAC
                        </h2>
                    </div>
                </div>
                <div className="grid grid-flow-row grid-cols-3 gap-16 2xl:gap-24">
                    {directors.map((director) => (
                        <div
                            key={director.id}
                            className=" col-span-3 lg:col-span-1 p-6 shadow rounded-3xl hover:shadow-lg border hover:bg-gray-100 border-l-2 border-b-4 border-gray-400 hover:border-deep-orange-500 hover:scale-[102%] transition-all"
                        >
                            <div className=" w-full h-72 rounded-2xl overflow-hidden">
                                <Image
                                    src={director.img}
                                    width="500"
                                    height="200"
                                    className=" object-cover"
                                    alt="MD of DACAC"
                                />
                            </div>
                            <div className=" py-8">
                                <h4>{director.name}</h4>
                                <h5 className=" py-1">{director.profession}</h5>
                                <h6>{director.designation}</h6>
                            </div>
                            <div className=" flex justify-center pb-5">
                                <Link
                                    href={`/directors/${director.id}`}
                                    className=" hover:text-deep-orange-500 text-lg font-medium border-b-2 border-transparent hover:border-deep-orange-500 transition-all duration-150"
                                >
                                    See Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
