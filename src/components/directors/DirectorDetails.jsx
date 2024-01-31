import { DevicePhoneMobileIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import {
    FacebookLogo,
    InstagramLogo,
    LinkedinLogo,
    TwitterLogo,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

export default function DirectorDetails({ directorData }) {
    let { director, directors } = directorData;
    return (
        <div className=" py-16 lg:py-24 2xl:py-32">
            <div className="container">
                <div>
                    <div className=" flex gap-2 items-center justify-center pb-3">
                        <div className=" w-3 h-3 bg-blue-500"></div>
                        <h5 className=" uppercase text-blue-500 px-2 font-normal">
                            {director.designation}
                        </h5>
                        <div className=" w-3 h-3 bg-blue-500"></div>
                    </div>
                    <p className=" text-justify">
                        <span className="font-medium">{director.name}</span>,
                        with her background in
                        <span className="pl-1 font-medium">
                            {director.profession}
                        </span>
                        , brings a wealth of experience and innovative ideas to
                        our Dream Angels Center for Autistic Children (DACAC)
                        community. She is known for her visionary leadership
                        style and ability to inspire and motivate both students
                        and staff.
                        <span className="pl-1 font-medium">
                            {director.name}
                        </span>
                        is deeply committed to fostering a culture of excellence
                        and continuous improvement, ensuring that every student
                        receives a high-quality education that prepares them for
                        success in the future.
                    </p>
                </div>
                <div className=" flex flex-col lg:flex-row-reverse gap-10 lg:gap-20 2xl:gap-32 py-10 lg:py-16 2xl:py-24 justify-center items-center">
                    <div className=" rounded-3xl overflow-hidden border-2 border-dashed border-gray-500 p-6 lg:p-10 2xl:p-14">
                        <Image
                            src={director.img}
                            width="1000"
                            height="500"
                            className=" object-cover rounded-xl border-2 border-gray-300"
                            alt={director.name}
                        />
                    </div>
                    <div className=" w-full">
                        <h2 className=" text-deep-orange-500 pb-3">
                            {director.name}
                        </h2>
                        <h5 className="">
                            <span className=" pr-2 font-medium">
                                Qualification:
                            </span>
                            {director.qualification}
                        </h5>
                        <h5 className=" py-2">{director.profession}</h5>
                        <h5>{director.designation}</h5>
                        <div className=" flex gap-4 py-3">
                            <DevicePhoneMobileIcon className=" w-6 h-6" />
                            <h5>{director.phone}</h5>
                        </div>
                        <div className=" flex gap-4">
                            <EnvelopeIcon className=" w-6 h-6" />
                            <h5>{director.email}</h5>
                        </div>
                        <div className=" flex gap-5 py-6">
                            <Link href="#" target="_blank">
                                <FacebookLogo
                                    size={28}
                                    className=" text-blue-800 rounded-full hover:scale-125 hover:skew-x-3 transition-all duration-150"
                                />
                            </Link>
                            <Link href="#" target="_blank">
                                <InstagramLogo
                                    size={28}
                                    className=" text-pink-500 rounded-full hover:scale-125 hover:skew-x-3 transition-all duration-150"
                                />
                            </Link>
                            <Link href="#" target="_blank">
                                <LinkedinLogo
                                    size={28}
                                    className=" text-blue-800 rounded-full hover:scale-125 hover:skew-x-3 transition-all duration-150"
                                />
                            </Link>
                            <Link href="#" target="_blank">
                                <TwitterLogo
                                    size={28}
                                    className=" text-cyan-500 rounded-full hover:scale-125 hover:skew-x-3 transition-all duration-150"
                                />
                            </Link>
                        </div>
                        <div className=" pt-6">{director.details}</div>
                    </div>
                </div>
                <div className=" pt-8">
                    <h3 className="border-b-2 border-deep-orange-500">
                        Learn more about our anothr icons:
                    </h3>
                    <div className=" grid grid-cols-12 gap-6 lg:gap-10 2xl:gap-14 py-8 -skew-x-6">
                        {directors.map((item) => (
                            <Link
                                href={`/directors/${item.id}`}
                                key={item.id}
                                className=" col-span-4 lg:col-span-2 p-3 bg-gray-100 rounded-xl border border-blue-500"
                            >
                                <div className="">
                                    <Image
                                        src={item.img}
                                        width="400"
                                        height="400"
                                        className=" object-cover rounded-lg"
                                        alt={item.name}
                                    />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
