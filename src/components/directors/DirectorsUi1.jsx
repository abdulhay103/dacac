import Image from "next/image";
import MD from "/public/directors/anima-nupur.jpg";
import ED from "/public/directors/razia-sultana.jpg";

export default function DirectorsUi1() {
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
                <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-20 xl:gap-40 2xl:gap-52 py-10 xl:py-16 2xl:py-20 ">
                    <div className=" w-full lg:w-1/2">
                        <div className=" w-full rounded-3xl overflow-hidden">
                            <Image
                                src={MD}
                                width="auto"
                                height="auto"
                                className=" object-cover"
                                alt="MD of DACAC"
                            />
                        </div>
                    </div>
                    <div className=" w-full lg:w-1/2">
                        <div className=" relative">
                            <div className=" bg-deep-orange-300 py-[6px] w-[262px] absolute top-4"></div>
                            <h3 className=" absolute font-bold">
                                Maneging Derector:
                            </h3>
                        </div>
                        <div className=" pt-10 text-justify">
                            <p className="py-2">
                                Dream Angels Centre for Autistic Children
                                (DACAC) is a specialized centre for physically
                                and mentally challenged children between the
                                ages of 2- 8 years especially with symptoms of
                                AUTISM. DACAC is run and managed by professional
                                speech therapists, occupational therapists,
                                physiotherapists and special educators ably
                                supported by caregivers and administrative
                                staff.
                            </p>
                        </div>
                    </div>
                </div>
                <div className=" grid grid-flow-row lg:grid-flow-col grid-cols-2 items-center gap-10 lg:gap-28 xl:gap-40 2xl:gap-52 py-10 xl:py-16 2xl:py-20 ">
                    <div className=" col-span-2 lg:col-span-1">
                        <div className=" w-full rounded-3xl overflow-hidden">
                            <Image
                                src={ED}
                                width="auto"
                                height="auto"
                                className=" object-cover"
                                alt="ED Of Dacac"
                            />
                        </div>
                    </div>
                    <div className=" col-span-2 lg:col-span-1 ">
                        <div className=" relative">
                            <div className=" bg-deep-orange-300 py-[6px] w-[300px] absolute top-4"></div>
                            <h3 className=" absolute font-bold">
                                Executive Director:
                            </h3>
                        </div>
                        <div className=" pt-10 text-justify">
                            <p className="py-2">
                                Realizing the lack of proper educational
                                institutions/ facilities for children with
                                Autism, couple of qualified Occupational
                                Therapists ventured to set up the school under
                                the name and style of” Dream Angels School “ in
                                March, 2011 in rented premises in Mirpur.
                                Starting with a handful of pupils this school
                                now has 31 students running on a two shift basis
                                with a combined teaching staff of 6 who are
                                adequately trained to handle such students. The
                                minimum educational levels of the
                                teachers/instructors are either a Bachelors
                                degree or a Masters degree and possessing
                                special training for handling the students with
                                this condition.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
