import Link from "next/link";
import React from "react";

export default function CtaSection() {
    return (
        <div>
            <div className=" bg-gray-50">
                <div className="container py-10 xl:py-16 2xl:py-20 ">
                    <div className=" w-full lg:w-2/3 mx-auto">
                        <p className=" text-lg font-medium">
                            From product consultation to ongoing support, MEC
                            Trade Link is your dedicated partner in elevating
                            healthcare standards. Our services are designed to
                            not only meet but exceed your expectations. Discover
                            the MEC Trade Link difference today.
                        </p>
                        <div className=" flex justify-center py-6 lg:py-8 xl:py-10">
                            <Link
                                href="/contact"
                                className=" py-3 px-8 bg-gradient-to-tr from-blue-500 to-purple-300 rounded-full text-white hover:scale-105 transition-all"
                            >
                                Explore Our Services
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
