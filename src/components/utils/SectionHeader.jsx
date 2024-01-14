import React from "react";

export default function SectionHeader(props) {
    return (
        <div className=" bg-gradient-to-br from-amber-50 to-cyan-50 py-10 xl:py-16 2xl:py-20">
            <div className=" container">
                <div className=" w-full lg:w-3/4 mx-auto flex justify-center flex-col">
                    <h2 className="pb-1 border-b-2 text-blue-500 border-blue-500 inline-block mx-auto capitalize">
                        {props.title}
                    </h2>
                    <p className=" text-justify pt-4">{props.desc}</p>
                </div>
            </div>
        </div>
    );
}
