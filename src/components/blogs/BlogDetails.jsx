import Image from "next/image";

export default function BlogDetails({ blogDetails }) {
    let data = blogDetails;
    return (
        <div className="py-16 lg:py-24 2xl:py-32">
            <div className="container">
                <div className=" grid grid-flow-row lg:grid-flow-col grid-cols-12 gap-6 lg:gap-16 2xl:gap-20">
                    <div className="col-span-12 lg:col-span-8">
                        <div className="">
                            <h4>{data.title}</h4>
                            <p className=" py-6 text-justify">
                                {data.short_desc}
                            </p>
                            <div className=" py-6">
                                <Image
                                    src={data.image}
                                    width="1000"
                                    height="650"
                                    className=" object-cover rounded-2xl"
                                    alt={data.title}
                                />
                            </div>
                            <div className="py-6 text-justify">
                                {data.details}
                            </div>
                            <div>
                                <p>
                                    <span className=" pr-3 font-bold">
                                        Author:
                                    </span>
                                    {data.users["firstName"] +
                                        " " +
                                        data.users["lastName"]}
                                </p>
                                <p>
                                    <span className=" pr-3 font-bold">
                                        Post Published:
                                    </span>
                                    {data.createdAt.toLocaleDateString(
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
                    </div>
                    <div className="col-span-12 lg:col-span-4 border">
                        <div>
                            <h4>Our Services:</h4>
                            <p>fe</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
