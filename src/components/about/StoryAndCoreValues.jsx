import Image from "next/image";
import VissionImage from "/public/others/vission.png";
export default function StoryAndCoreValues() {
    return (
        <div className=" container grid grid-flow-row lg:grid-flow-col grid-cols-2 items-center gap-10 lg:gap-16 xl:gap-24 2xl:gap-36 py-10 xl:py-16 2xl:py-20 ">
            <div className=" col-span-2 lg:col-span-1">
                <div className=" w-full">
                    <Image
                        src={VissionImage}
                        width="auto"
                        height="auto"
                        className=" object-cover"
                        alt="Vision-Image"
                    />
                </div>
            </div>
            <div className=" col-span-2 lg:col-span-1 ">
                <div className=" relative">
                    <div className=" bg-deep-orange-300 py-[6px] w-[300px] absolute top-4"></div>
                    <h3 className=" absolute font-bold">
                        Story & Core Values:
                    </h3>
                </div>
                <div className=" pt-10 text-justify">
                    <p className="py-2">
                        The company was established in 2013. The company has
                        created tradition on account of its treatment expertise
                        and approach. "Mec Trade Link" is headed by a proprietor
                        Md Kamrul Hasan who has completed BSC of EEE Dhaka
                        International University of the batch 2006. An
                        Electro-Medical Engineer Md. AL MAMUM, B.Bc (Mechanical
                        from the Philippines), Dhaka has advised the owner on
                        technical matters relating to planning, preparation of
                        technical specifications, installation, and management
                        of after-sales services for medical equipment. Looking
                        for very far development in the health sector of our
                        country, it decided to trade into hospital and medical
                        equipment, instruments, and furniture.
                    </p>
                    <p className="py-2">
                        The company is known for its approach and service. In
                        the year 2013, the company started marketing disposable
                        and other medical-related items. Our marketed brands are
                        well known in the market and in some cases, we are
                        leading the market.
                    </p>
                    <p className="py-2">
                        The company was established in 2013. The company has
                        created tradition on account of its treatment expertise
                        and approach. Our company is headed by a proprietor Md
                        Kamrul Hasan who has completed BSC of EEE Dhaka
                        International University of the batch 2006. An
                        Electro-Medical Engineer Md. AL MAMUM, B.Sc (Mechanical
                        from the Philippines), Dhaka has advised the owner on
                        technical matters relating to planning, preparation of
                        technical specifications, installation, and management
                        of after-sales services for medical equipment.
                    </p>
                </div>
            </div>
        </div>
    );
}
