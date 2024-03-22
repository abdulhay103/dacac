import { Book } from "@phosphor-icons/react/dist/ssr";
import React from "react";

export default function AcademicInfo() {
  return (
    <div className=" py-14 lg:py-20 xl:py-32 2xl:py-36">
      <div className=" container">
        <div className=" w-full xl:w-1/2 mx-auto">
          <div className=" flex gap-2 items-center justify-center pb-3">
            <div className=" w-3 h-3 bg-blue-500"></div>
            <h5 className=" uppercase text-light-blue-700 px-2 font-normal">
              our academic activities
            </h5>
            <div className=" w-3 h-3 bg-blue-500"></div>
          </div>
          <div>
            <h2 className=" text-center text-[28px] lg:text-[36px]">
              Our successful procedures that are tailored to special children.
            </h2>
          </div>
        </div>
        <div className=" grid grid-flow-row grid-cols-3 gap-10 pt-14 xl:pt-24">
          <div className=" col-span-3 xl:col-span-1 flex flex-row items-center hover:text-white">
            <div className="-mr-10 z-10 w-20 h-20 p-5 flex items-center justify-center bg-deep-purple-400 rounded-full">
              <Book size={40} className=" text-white" />
            </div>
            <div className="px-10 py-6 bg-blue-50 rounded-md -skew-x-6 border-l-4 border-deep-purple-400 hover:bg-blue-400 transition-all duration-300">
              <h5 className=" text-deep-purple-400">Occupational Therapists</h5>
              <p className=" pl-3 text-justify pt-2">
                Occupational therapists help individuals develop or regain the
                skills needed for daily activities and participation in
                meaningful tasks. They play a crucial role in promoting
                independence, improving motor skills, and enhancing the quality
                of life for people of all ages and abilities.
              </p>
            </div>
          </div>
          <div className=" col-span-3 xl:col-span-1 flex flex-row items-center hover:text-white">
            <div className="-mr-10 z-10 w-20 h-20 p-5 flex items-center justify-center bg-lime-600 rounded-full">
              <Book size={40} className=" text-white" />
            </div>
            <div className="px-10 py-6 bg-blue-50 rounded-md -skew-x-6 border-l-4 border-lime-600 hover:bg-blue-400 transition-all duration-300">
              <h5 className=" text-lime-600">Speech & Language Therapists</h5>
              <p className=" pl-3 text-justify pt-2">
                Speech and language therapists work with individuals who have
                communication difficulties, helping them improve their speech,
                language, and communication skills. They also address swallowing
                disorders and provide support for individual problems.
              </p>
            </div>
          </div>
          <div className=" col-span-3 xl:col-span-1 flex flex-row items-center hover:text-white">
            <div className="-mr-10 z-10 w-20 h-20 p-5 flex items-center justify-center bg-deep-orange-400 rounded-full">
              <Book size={40} className=" text-white" />
            </div>
            <div className="px-10 py-6 bg-blue-50 rounded-md -skew-x-6 border-l-4 border-deep-orange-400 hover:bg-blue-400 transition-all duration-300">
              <h5 className=" text-deep-orange-400">Modern supporting tools</h5>
              <p className=" pl-3 text-justify pt-2">
                Modern supporting tools, such as assistive technology devices
                and adaptive equipment, provide invaluable support for
                individuals with disabilities. These tools help improve
                accessibility, independence, and participation in daily
                activities, and education and maximize their potential.
              </p>
            </div>
          </div>
          <div className=" col-span-3 xl:col-span-1 flex flex-row items-center hover:text-white">
            <div className="-mr-10 z-10 w-20 h-20 p-5 flex items-center justify-center bg-deep-orange-400 rounded-full">
              <Book size={40} className=" text-white" />
            </div>
            <div className="px-10 py-6 bg-blue-50 rounded-md -skew-x-6 border-l-4 border-deep-orange-400 hover:bg-blue-400 transition-all duration-300">
              <h5 className=" text-deep-orange-400">Pediatrician</h5>
              <p className=" pl-3 text-justify pt-2">
                Pediatricians specialize in the medical care of infants,
                children, and adolescents, providing comprehensive healthcare
                services to support their physical, emotional, and developmental
                well-being. They play a critical role in the formative years.
              </p>
            </div>
          </div>
          <div className=" col-span-3 xl:col-span-1 flex flex-row items-center hover:text-white">
            <div className="-mr-10 z-10 w-20 h-20 p-5 flex items-center justify-center bg-deep-purple-400 rounded-full">
              <Book size={40} className=" text-white" />
            </div>
            <div className="px-10 py-6 bg-blue-50 rounded-md -skew-x-6 border-l-4 border-deep-purple-400 hover:bg-blue-400 transition-all duration-300">
              <h5 className=" text-deep-purple-400">1:1 Teaching System</h5>
              <p className=" pl-3 text-justify pt-2">
                1:1 teaching systems, such as individualized education plans
                (IEPs) and personalized learning approaches, provide tailored
                instruction and support for students with diverse learning
                needs. These systems allow educators to address students' unique
                strengths and challenges.
              </p>
            </div>
          </div>
          <div className=" col-span-3 xl:col-span-1 flex flex-row items-center hover:text-white">
            <div className="-mr-10 z-10 w-20 h-20 p-5 flex items-center justify-center bg-lime-600 rounded-full">
              <Book size={40} className=" text-white" />
            </div>
            <div className="px-10 py-6 bg-blue-50 rounded-md -skew-x-6 border-l-4 border-lime-600 hover:bg-blue-400 transition-all duration-300">
              <h5 className=" text-lime-600">Physiotherapist</h5>
              <p className="pl-3 text-justify pt-2">
                Physiotherapists specialize in optimizing movement and physical
                function, helping individuals improve mobility, strength, and
                flexibility. They provide rehabilitation services for people
                recovering from injuries, surgeries, or neurological conditions,
                promoting recovery, independence, and overall well-being.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
