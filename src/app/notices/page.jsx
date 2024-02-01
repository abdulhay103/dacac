import NoticeList from "@/components/notices/NoticeList";
import SectionHeader from "@/components/utils/SectionHeader";
import { getNotices } from "@/utils/assetsData";

export default async function Notices() {
    const latestNotice = await getNotices();
    return (
        <>
            <SectionHeader pathName="notices" title="Notice Board" />
            <NoticeList latestNotice={latestNotice} />
        </>
    );
}
