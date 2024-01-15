import Image from "next/image";
import React from "react";
import EmptyImage from "/public/others/empty-list.png";

export default function EmptyOrderList() {
    return (
        <div className=" flex w-full min-h-screen items-center justify-center inset-0">
            <div>
                <Image
                    src={EmptyImage}
                    width="400"
                    height="400"
                    className=" object-cover"
                    alt="Empty Order List"
                />
                <h3 className=" text-center text-deep-orange-500 pt-10">
                    The List Is Empty
                </h3>
            </div>
        </div>
    );
}
