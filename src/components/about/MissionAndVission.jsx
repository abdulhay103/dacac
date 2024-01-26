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
                        Dream Angels Centre for Autistic Children (DACAC) is a
                        specialized centre for physically and mentally
                        challenged children between the ages of 2- 8 years
                        especially with symptoms of AUTISM. DACAC is run and
                        managed by professional speech therapists, occupational
                        therapists, physiotherapists and special educators ably
                        supported by caregivers and administrative staff.
                    </p>
                    <p className="py-2">
                        Dream Angels Center for Autistic Children (a Unit of
                        Dream Angels Limited), the Founders being inspired by
                        the ideals of service towards a segment of society who
                        were deprived of certain physical abilities/attributes
                        since birth and guided by the skills, knowledge and
                        experiences gained from reputable institution in this
                        field, decided to dedicate themselves to the cause of
                        improving the lot of the aforesaid segment of the
                        society. In this mission and goal they were supported by
                        some segments of society whose mission was to develop
                        this nascent initiative by the Founders and take it to
                        bigger heights and enlarge their sphere of activities by
                        providing all kinds of support so that the Institution
                        gets both National and International recognition.
                    </p>
                    <p className="py-2">
                        To materialize the Mission stated above Dream Angels
                        Center for Autistic Children envisions partnering with
                        similar types of institutions globally actualizing the
                        physical and mental formation of the students to a level
                        that will establish them in line with other normal
                        students and effecting a social transformation in the
                        country.
                    </p>
                </div>
            </div>
        </div>
    );
}
