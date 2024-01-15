import SectionHeader from "../utils/SectionHeader";

export default function WhyChoseUs() {
    return (
        <section className=" py-6 lg:py-8 xl:py-16 2xl:py-20 bg-gradient-to-br from-amber-50 to-cyan-50 mt-8 lg:mt-16 xl:mt-20 2xl:mt-28">
            <div className=" container w-full xl:w-2/3">
                <div className="flex justify-center">
                    <h3 className=" inline-block relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[3px] before:rounded-full before:opacity-100 before:bg-gradient-to-l before:from-amber-500 before:to-deep-orange-500">
                        Why Chose Us!
                    </h3>
                </div>
                <p className="pt-6">
                    At MEC Trade Link, we stand out as your premier choice for
                    medical equipment supply. Our commitment to excellence,
                    unwavering quality standards, and customer-centric approach
                    set us apart. Here's why you should choose MEC Trade Link.
                </p>
            </div>
            <div className="container grid grid-flow-row grid-cols-12 items-center gap-6 lg:gap-8 xl:gap-10 py-6 lg:py-8 xl:py-16 2xl:py-20">
                <div className=" col-span-12 lg:col-span-4 xl:col-span-3 border-2 border-gray-400 rounded-lg min-h-[200px] bg-gradient-to-bl from-deep-orange-50 via-white to-red-100">
                    <h1 className=" pt-3 px-6 text-right">01</h1>
                    <div className=" px-5 pb-5">
                        <p className=" text-lg font-bold">Quality Assurance:</p>
                        <p className=" text-justify py-2">
                            We prioritize the highest standards of quality. Our
                            products undergo rigorous testing to ensure
                            reliability and precision.
                        </p>
                    </div>
                </div>
                <div className=" col-span-12 lg:col-span-3 border-2 border-gray-400 rounded-lg min-h-[200px] bg-gradient-to-bl from-deep-orange-50 via-white to-red-100">
                    <h1 className=" pt-3 px-6 text-right">02</h1>
                    <div className=" px-5 pb-5">
                        <p className=" text-lg font-bold">
                            Extensive Product Range:
                        </p>
                        <p className=" text-justify py-2">
                            Discover a comprehensive range of medical equipment
                            catering to diverse needs. From diagnostic tools to
                            surgical instruments, we have you covered.
                        </p>
                    </div>
                </div>
                <div className=" col-span-12 lg:col-span-4 xl:col-span-3 border-2 border-gray-400 rounded-lg min-h-[200px] bg-gradient-to-bl from-deep-orange-50 via-white to-red-100">
                    <h1 className=" pt-3 px-6 text-right">03</h1>
                    <div className=" px-5 pb-5">
                        <p className=" text-lg font-bold">Expert Guidance:</p>
                        <p className=" text-justify py-2">
                            Our knowledgeable team is here to assist you.
                            Whether you have specific product inquiries or need
                            advice, count on us for expert guidance.
                        </p>
                    </div>
                </div>
                <div className=" col-span-12 lg:col-span-4 xl:col-span-3 border-2 border-gray-400 rounded-lg min-h-[200px] bg-gradient-to-bl from-deep-orange-50 via-white to-red-100">
                    <h1 className=" pt-3 px-6 text-right">04</h1>
                    <div className=" px-5 pb-5">
                        <p className=" text-lg font-bold">Timely Delivery:</p>
                        <p className=" text-justify py-2">
                            We value your time. Our efficient logistics ensure
                            timely delivery, so you can focus on providing the
                            best care for your patients.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
