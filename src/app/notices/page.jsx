import NoticeList from "@/components/notices/NoticeList";
import SectionHeader from "@/components/utils/SectionHeader";
import { getNotices } from "@/utils/assetsData";

export default async function Notices() {
    let latestNoticePromise = getNotices(0, 2);
    let recentNoticePromise = getNotices(2, 5);
    let [latestNotice, recentNotice] = await Promise.all([
        latestNoticePromise,
        recentNoticePromise,
    ]);

    return (
        <>
            <SectionHeader pathName="notices" title="Notice Board" />
            <NoticeList noticeDatas={{ latestNotice, recentNotice }} />
        </>
    );
}
