import Link from "next/link";
import React from "react";

export default function CtaSection(props) {
    return (
        <div className=" bg-gradient-to-t from-gray-200 to-gray-50 pt-10">
            <div className="container py-10 xl:py-16 2xl:py-20 ">
                <div className=" w-full xl:w-4/5 mx-auto pb-6">
                    <h2 className=" text-center pb-6 text-deep-orange-500 underline underline-offset-8">
                        {props.title}
                    </h2>
                </div>
                <div>
                    <p className=" text-lg font-medium text-justify">
                        {props.para1}
                    </p>
                    <p className=" text-lg font-medium pt-3 text-justify">
                        {props.para2 && props.para2}
                    </p>
                    <div className=" flex justify-center py-10 lg:pt-16 xl:py-20">
                        <Link
                            href="/contact"
                            className=" py-3 lg:py-4 lg:px-10 px-8 text-lg font-medium bg-gradient-to-tr from-deep-orange-500 to-purple-300 rounded-full text-white hover:scale-105 transition-all"
                        >
                            {props.ctaText}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
