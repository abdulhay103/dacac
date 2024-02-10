import NoticeBoard from "@/components/notices/NoticeBoard";
import { getNotices } from "@/utils/assetsData";
import React from "react";

export default async function Notices_Dash() {
    const notices = await getNotices();
    return <NoticeBoard data={notices} itemsPerPage={4} />;
}
