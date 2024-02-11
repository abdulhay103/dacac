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
                        <div className=" col-span-6 lg:col-span-3 2xl:col-span-2 rounded shadow-md overflow-hidden">
                            <h6 className=" text-center py-2 bg-blue-400 text-white">
                                Blog details
                            </h6>
                            <div className=" p-4">
                                <p>
                                    Total Published Blog:
                                    <span className="pl-2 font-bold">{3}</span>
                                </p>
                                <p>
                                    Existing Category:
                                    <span className="pl-2 font-bold">{5}</span>
                                </p>
                            </div>
                        </div>
                        <div className=" col-span-6 lg:col-span-3 2xl:col-span-2 rounded shadow-md overflow-hidden">
                            <h6 className=" text-center py-2 bg-purple-400 text-white">
                                Service details
                            </h6>
                            <div className=" p-4">
                                <p>
                                    Available Services:
                                    <span className="pl-2 font-bold">{6}</span>
                                </p>
                                <p>
                                    Upcomming Services:
                                    <span className="pl-2 font-bold">{2}</span>
                                </p>
                            </div>
                        </div>
                        <div className=" col-span-6 lg:col-span-3 2xl:col-span-2 rounded shadow-md overflow-hidden">
                            <h6 className=" text-center py-2 bg-pink-400 text-white">
                                Staff Details
                            </h6>
                            <div className=" p-4">
                                <p>
                                    Mangement:
                                    <span className="pl-2 font-bold">{4}</span>
                                </p>
                                <p>
                                    Therapist:
                                    <span className="pl-2 font-bold">{3}</span>
                                </p>
                                <p>
                                    Special Teacher:
                                    <span className="pl-2 font-bold">{15}</span>
                                </p>
                                <p>
                                    Supporting Staff:
                                    <span className="pl-2 font-bold">{3}</span>
                                </p>
                            </div>
                        </div>
                        <div className=" col-span-6 lg:col-span-3 2xl:col-span-2 rounded shadow-md overflow-hidden">
                            <h6 className=" text-center py-2 bg-lime-500 text-white">
                                Notice Details
                            </h6>
                            <div className=" p-4">
                                <p>
                                    Open Notice:
                                    <span className="pl-2 font-bold">{4}</span>
                                </p>
                                <p>
                                    Close Notice:
                                    <span className="pl-2 font-bold">{3}</span>
                                </p>
                                <p>
                                    Total Notices:
                                    <span className="pl-2 font-bold">{15}</span>
                                </p>
                            </div>
                        </div>
                        <div className=" col-span-6 lg:col-span-3 2xl:col-span-2 rounded shadow-md overflow-hidden">
                            <h6 className=" text-center py-2 bg-indigo-500 text-white">
                                Review Details
                            </h6>
                            <div className=" p-4">
                                <p>
                                    Open Reviews:
                                    <span className="pl-2 font-bold">{6}</span>
                                </p>
                                <p>
                                    Pending Reviews:
                                    <span className="pl-2 font-bold">{3}</span>
                                </p>
                                <p>
                                    Total Reviews:
                                    <span className="pl-2 font-bold">{15}</span>
                                </p>
                            </div>
                        </div>
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
                                    Valid Subscriber:
                                    <span className="pl-2 font-bold">{6}</span>
                                </p>
                                <p>
                                    Invalid Subscriber:
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
                                    Total Massages:
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
