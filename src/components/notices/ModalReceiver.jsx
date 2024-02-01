import React from "react";
import { ReadNotice } from "./ReadNotice";
import { getNoticesDetails } from "@/utils/assetsData";

export default async function ModalReceiver({ id }) {
    let noticeDetails = await getNoticesDetails(id);
    return <ReadNotice details={noticeDetails} />;
}
