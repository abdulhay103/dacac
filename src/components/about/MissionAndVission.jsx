import Image from "next/image";
import MissionImg from "/public/others/mission.png";
export default function MissionAndVission() {
    return (
        <div className=" container flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16 xl:gap-24 2xl:gap-36 py-10 xl:py-16 2xl:py-20 ">
            <div className=" w-full lg:w-1/2">
                <div className=" w-full">
                    <Image
                        src={MissionImg}
                        width="auto"
                        height="auto"
                        className=" object-cover"
                        alt="Mission-Image"
                    />
                </div>
            </div>
            <div className=" w-full lg:w-1/2">
                <div className=" relative">
                    <div className=" bg-deep-orange-300 py-[6px] w-[262px] absolute top-4"></div>
                    <h3 className=" absolute font-bold">Mission & Vission:</h3>
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
