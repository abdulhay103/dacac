import React from "react";

export default function OverViewCard({ bgColor, header, contents }) {
    return (
        <div className=" col-span-6 lg:col-span-3 2xl:col-span-2 rounded shadow-md overflow-hidden">
            <h6 className={`text-center py-2  text-white ${bgColor}`}>
                {header}
            </h6>
            <div className=" p-4">
                {contents.map((item, index) => (
                    <p key={index}>
                        {item.subTitle}:
                        <span className="pl-2 font-bold">{item.counts}</span>
                    </p>
                ))}
            </div>
        </div>
    );
}
