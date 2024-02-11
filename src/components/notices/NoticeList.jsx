import ModalReceiver from "./ModalReceiver";

export default function NoticeList({ noticeDatas }) {
    let latestNotice = noticeDatas.latestNotice;
    let recentNotice = noticeDatas.recentNotice;
    return (
        <div className=" py-16 lg:py-24 2xl:py-32">
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="xl:w-5/6 col-span-12 lg:col-span-8">
                        <h2 className=" text-blue-500 pb-3 mb-6 xl:mb-8 2xl:mb-12 border-b-2 border-blue-500">
                            Our Latest Notices
                        </h2>
                        {latestNotice.map((notice) => (
                            <div
                                key={notice.id}
                                className=" grid lg:grid-flow-col gap-6 lg:gap-10 justify-between items-center p-6 border mb-6 xl:mb-10 rounded-md hover:bg-gray-50 transition-all duration-300"
                            >
                                <div>
                                    <p>
                                        Notice Status:{" "}
                                        <span
                                            className={
                                                notice.status === "open"
                                                    ? "text-green-500 "
                                                    : "text-red-500 "
                                            }
                                        >
                                            {notice.status}
                                        </span>
                                    </p>
                                    <h4 className=" py-2">{notice.title}</h4>
                                    <p className=" py-1">
                                        Published Date:{" "}
                                        {notice.createdAt.toLocaleDateString(
                                            "en-US",
                                            {
                                                month: "short",
                                                day: "2-digit",
                                                year: "numeric",
                                            }
                                        )}
                                    </p>
                                    <p>
                                        Published By:
                                        <span className=" pl-2 font-bold">
                                            DACAC
                                        </span>
                                    </p>
                                </div>
                                <ModalReceiver id={notice.id} />
                            </div>
                        ))}
                    </div>
                    <div className=" col-span-12 lg:col-span-4 border rounded-lg overflow-hidden">
                        <h4 className=" text-center py-7 bg-gray-100">
                            Recent Notices:
                        </h4>
                        <div className=" p-6">
                            {recentNotice.map((notice) => (
                                <div
                                    className="bg-gray-50 p-5 mb-6 border rounded-md"
                                    key={notice.id}
                                >
                                    <div>
                                        <p className=" font-bold">
                                            {notice.title}
                                        </p>
                                        <p className=" py-1">
                                            Published Date:{" "}
                                            {notice.createdAt.toLocaleDateString(
                                                "en-US",
                                                {
                                                    month: "short",
                                                    day: "2-digit",
                                                    year: "numeric",
                                                }
                                            )}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
