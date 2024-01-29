import Link from "next/link";
import React from "react";

export default function CtaSection() {
    return (
        <div className=" bg-gray-100 pt-10">
            <div className="container py-10 xl:py-16 2xl:py-20 ">
                <div className=" w-full xl:w-4/5 mx-auto">
                    <p className=" text-lg font-medium text-justify">
                        At Dream Angels Center for Autistic Children (DACAC), we
                        believe that every child has the potential to thrive and
                        succeed. Our dedicated team of educators is committed to
                        providing a nurturing and inclusive learning environment
                        where students can grow academically, socially, and
                        emotionally.
                    </p>
                    <p className=" text-lg font-medium pt-2 text-justify">
                        Whether you're a prospective parent exploring our school
                        for the first time or a current member of our community,
                        we're delighted to have you here. From our rigorous
                        academic programs to our enriching extracurricular
                        activities, we offer a diverse range of opportunities to
                        inspire and empower every student.
                    </p>
                    <div className=" flex justify-center py-10 lg:pt-16 xl:py-20">
                        <Link
                            href="/contact"
                            className=" py-3 px-8 bg-gradient-to-tr from-deep-orange-500 to-purple-300 rounded-full text-white hover:scale-105 transition-all"
                        >
                            Contact to us!
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
