import ModalReceiver from "./ModalReceiver";

export default function NoticeList({ latestNotice }) {
    return (
        <div className=" py-16 lg:py-24 2xl:py-32">
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className=" col-span-12 lg:col-span-9">
                        <h2 className=" w-5/6 text-blue-500 pb-3 mb-6 xl:mb-10 2xl:mb-16  border-b-2 border-blue-500">
                            Our Latest Notices
                        </h2>
                        {latestNotice.map((notice) => (
                            <div
                                key={notice.id}
                                className=" xl:w-5/6 grid lg:grid-flow-col gap-6 lg:gap-10 justify-between items-center p-6 border mb-6 xl:mb-10 rounded-md hover:bg-gray-50 transition-all"
                            >
                                <div>
                                    <p>Notice Id: {notice.id}</p>
                                    <h4 className=" py-2">{notice.title}</h4>
                                    <p className=" py-1">
                                        Published At:{" "}
                                        {notice.createdAt.toLocaleDateString()}
                                    </p>
                                    <p>
                                        Published By:{" "}
                                        <span className=" font-bold">
                                            DACAC
                                        </span>
                                    </p>
                                </div>
                                <ModalReceiver id={notice.id} />
                            </div>
                        ))}
                    </div>
                    <div className=" col-span-12 lg:col-span-3 border">
                        Hello-3
                    </div>
                </div>
            </div>
        </div>
    );
}
