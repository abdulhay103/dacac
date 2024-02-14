import OverViewCard from "@/components/dashboard/OverViewCard";
import { getUser } from "@/utils/assetsData";

export default async function Dashboard() {
    let user = await getUser();
    return (
        <section className=" px-8 py-8 2xl:px-10 2xl:py-12">
            <div className=" pb-6">
                <p className=" text-lg">
                    Welcome{" "}
                    <span className=" font-semibold">
                        {user.firstName + " " + user.lastName}
                    </span>
                </p>
                <p>See information about your software.</p>
            </div>
            <div className=" flex flex-col lg:flex-row gap-8">
                <div className=" w-full lg:w-2/3 border shadow-md rounded-lg overflow-hidden">
                    <h4 className=" text-center underline underline-offset-4 bg-gray-700 py-4 text-white ">
                        Page Insite Overviews
                    </h4>
                    <div className=" grid grid-cols-6 gap-5 p-6">
                        <OverViewCard
                            bgColor="bg-blue-400"
                            header="Blog Details"
                            contents={[
                                {
                                    subTitle: "Total Published Blog",
                                    counts: 3,
                                },
                                {
                                    subTitle: "Existing Category",
                                    counts: 5,
                                },
                            ]}
                        />
                        <OverViewCard
                            bgColor="bg-purple-400"
                            header="Service Details"
                            contents={[
                                {
                                    subTitle: "Available Services",
                                    counts: 6,
                                },
                                {
                                    subTitle: "Upcomming Services",
                                    counts: 2,
                                },
                            ]}
                        />

                        <OverViewCard
                            bgColor="bg-lime-500"
                            header="Notice Details"
                            contents={[
                                {
                                    subTitle: "Open Notice",
                                    counts: 4,
                                },
                                {
                                    subTitle: "Close Notice",
                                    counts: 3,
                                },
                                {
                                    subTitle: "Total Notices",
                                    counts: 15,
                                },
                            ]}
                        />
                        <OverViewCard
                            bgColor="bg-indigo-500"
                            header="Review Details"
                            contents={[
                                {
                                    subTitle: "Open Reviews",
                                    counts: 6,
                                },
                                {
                                    subTitle: "Total Reviews",
                                    counts: 20,
                                },
                                {
                                    subTitle: "rejected Reviews",
                                    counts: 5,
                                },
                            ]}
                        />
                        <OverViewCard
                            bgColor="bg-pink-400"
                            header="Staff Details"
                            contents={[
                                {
                                    subTitle: "Mangement",
                                    counts: 4,
                                },
                                {
                                    subTitle: "Therapist",
                                    counts: 3,
                                },
                                {
                                    subTitle: "Special Teacher",
                                    counts: 15,
                                },
                                {
                                    subTitle: "Supporting Staff",
                                    counts: 3,
                                },
                            ]}
                        />
                    </div>
                </div>
                <div className=" w-full lg:w-1/3 border shadow overflow-hidden rounded-lg">
                    <h4 className=" text-center underline underline-offset-4 bg-gray-700 py-4 text-white ">
                        Incoming Overviews
                    </h4>
                    <div className=" p-6 grid gap-6">
                        <div className=" w-full 2xl:w-3/4 mx-auto rounded shadow-md overflow-hidden">
                            <h6 className=" text-center py-2 bg-green-500 text-white">
                                Subcribers
                            </h6>
                            <div className=" p-4">
                                <p>
                                    Valid Subscriber
                                    <span className="pl-2 font-bold">{6}</span>
                                </p>
                                <p>
                                    Invalid Subscriber
                                    <span className="pl-2 font-bold">{3}</span>
                                </p>
                            </div>
                        </div>
                        <div className=" w-full 2xl:w-3/4 mx-auto rounded shadow-md overflow-hidden">
                            <h6 className=" text-center py-2 bg-blue-500 text-white">
                                Massages
                            </h6>
                            <div className=" p-4">
                                <p>
                                    Unreaded Massages:
                                    <span className="pl-2 font-bold">{7}</span>
                                </p>
                                <p>
                                    Total Massages
                                    <span className="pl-2 font-bold">
                                        {113}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
