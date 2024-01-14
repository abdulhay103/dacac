import { Eye } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";

export default function OrderHistoryCard({ text, color, totalPendingOrder }) {
    return (
        <div
            className={` border rounded col-span-1 overflow-hidden border-${color}-500`}
        >
            <p className={`px-6 py-3 bg-${color}-500 text-center text-white`}>
                <span className=" capitalize">{text}</span> Orders
            </p>
            <div className="py-5 2xl:py-8 flex justify-around items-center">
                <h4 className={`text-${color}-500`}>
                    Total: <span>{totalPendingOrder}</span>
                </h4>
                <Link href={`/dashboard/orders/${text}`}>
                    <Eye size={24} />
                </Link>
            </div>
        </div>
    );
}
