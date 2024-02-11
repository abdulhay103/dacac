import { UpdateNotice } from "@/components/notices/UpdateNotice";
import { getNoticesDetails } from "@/utils/assetsData";
import React from "react";

export default async function NoticeUpdatePage({ params }) {
    let id = parseInt(params.noticeId);
    let details = await getNoticesDetails(id);
    return <UpdateNotice details={details} />;
}
