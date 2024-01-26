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
                        Realizing the lack of proper educational institutions/
                        facilities for children with Autism, couple of qualified
                        Occupational Therapists ventured to set up the school
                        under the name and style of” Dream Angels School “ in
                        March, 2011 in rented premises in Mirpur. Starting with
                        a handful of pupils this school now has 31 students
                        running on a two shift basis with a combined teaching
                        staff of 6 who are adequately trained to handle such
                        students. The minimum educational levels of the
                        teachers/instructors are either a Bachelors degree or a
                        Masters degree and possessing special training for
                        handling the students with this condition.
                    </p>
                    <p className="py-2">
                        Considering the limitations of the existing facilities
                        to service the students adequately and in a true
                        professional manner the school was given a Corporate
                        structure whereby the school became a Unit of Dream
                        Angels Limited, a limited liability company registered
                        under the Companies ACT, 1994 obtaining its certificate
                        of incorporation bearing Number C-100516/ 12 dated 29th
                        March, 2012 issued by the Registrar of Joint Stock
                        Companies & Firms, Bangladesh. Both the Founders of the
                        school became the members of the Board of Directors
                        along with the remaining three who came from various
                        backgrounds-the Chairman being a Chartered Accountant
                        from the Institute of England & Wales, UK having a wide
                        range of experience in various capacities both
                        nationally and internationally. With this Corporate
                        structure in place the institution will have the
                        flexibility and resources to expand in an organized
                        manner and will be well placed to better serve the
                        community within Mirpur and the adjoining areas.
                    </p>
                </div>
            </div>
        </div>
    );
}
