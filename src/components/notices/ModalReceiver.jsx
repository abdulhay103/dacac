import React from "react";
import { ReadNotice } from "./ReadNotice";
import { getNoticesDetails } from "@/utils/assetsData";

export default async function ModalReceiver({ id }) {
    let noticeDetails = await getNoticesDetails(id);
    return (
        <ReadNotice
            details={noticeDetails}
            className="py-2 2xl:py-3 px-10 bg-blue-500 text-base text-white border-2 border-blue-500 rounded-md text-center hover:bg-transparent hover:text-blue-500 transition-all"
        />
    );
}
