import SectionHeader from "../utils/SectionHeader";

export default function WhyWeBest() {
    return (
        <section className=" py-20 xl:py-24 2xl:py-32">
            <div className=" container w-full">
                <div className=" w-full xl:w-3/4 mx-auto">
                    <div className=" flex gap-2 items-center justify-center pb-3">
                        <div className=" w-3 h-3 bg-blue-500"></div>
                        <h5 className=" uppercase text-blue-500 px-2 font-normal">
                            Why we best!
                        </h5>
                        <div className=" w-3 h-3 bg-blue-500"></div>
                    </div>

                    <h2 className=" text-center text-deep-orange-500 text-[28px] lg:text-[36px]">
                        Committed to action and planning
                    </h2>
                    <p className="pt-6">
                        All the professionals and staff at Dream Angel Center
                        for Autistic Children (DACAC) are universally respectful
                        and dedicated to their work. Success and excellence are
                        our main goals.
                    </p>
                </div>
            </div>
            <div className="container grid grid-flow-row grid-cols-3 items-center gap-6 lg:gap-8 xl:gap-10 py-6 lg:py-8 xl:py-16 2xl:py-20">
                <div className=" col-span-3 lg:col-span-1 border-2 border-deep-orange-500 rounded-lg min-h-[200px] bg-gradient-to-bl from-deep-orange-50 via-white to-red-50">
                    <h1 className=" pt-3 px-6 text-right text-deep-orange-500">
                        01
                    </h1>
                    <div className=" px-5 pb-5">
                        <p className=" text-lg font-bold text-deep-orange-500">
                            Assess Special Needs and Requirements
                        </p>
                        <p className=" text-justify py-2">
                            Understand the specific needs and requirements of
                            the students attending the special school. This may
                            involve assessing various factors such as
                            disabilities, learning styles, emotional needs, and
                            any other special considerations.
                        </p>
                    </div>
                </div>
                <div className=" col-span-3 lg:col-span-1 border-2 border-deep-purple-500 rounded-lg min-h-[200px] bg-gradient-to-bl from-deep-orange-50 via-white to-red-50">
                    <h1 className=" pt-3 px-6 text-right text-deep-purple-500">
                        02
                    </h1>
                    <div className=" px-5 pb-5">
                        <p className=" text-lg font-bold text-deep-purple-500">
                            Develop Individualized Education Plans
                        </p>
                        <p className=" text-justify py-2">
                            Based on the assessments we work closely with
                            teachers, specialists, and parents to create IEPs
                            that address the academic, social, emotional, and
                            behavioral needs of the students, fostering a
                            supportive and inclusive learning environment.
                        </p>
                    </div>
                </div>
                <div className=" col-span-3 lg:col-span-1 border-2 border-blue-500 rounded-lg min-h-[200px] bg-gradient-to-bl from-deep-orange-50 via-white to-red-50">
                    <h1 className=" pt-3 px-6 text-right text-blue-500">03</h1>
                    <div className=" px-5 pb-5">
                        <p className=" text-lg font-bold text-blue-500">
                            Regular Review and Adaptation
                        </p>
                        <p className=" text-justify py-2">
                            Continuously monitor the progress of students and
                            the effectiveness of interventions through ongoing
                            assessment and evaluation. Regularly review IEPs,
                            academic performance data, behavior reports, and
                            make necessary step to support student success.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
