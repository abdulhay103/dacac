import Image from "next/image";
import Link from "next/link";

export default function BlogDetails({ blogDatas }) {
    let data = blogDatas.blogDetails;
    let latestBlogs = blogDatas.latestBlogs;
    let services = blogDatas.services;
    let directors = blogDatas.directors;
    let relatedBlogs = blogDatas.relatedBlogs;
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
                        <div className=" pt-8">
                            <h3 className="border-b-2 border-deep-purple-500">
                                Read more about related posts:
                            </h3>
                            <div className=" grid grid-cols-12 gap-6 lg:gap-10 2xl:gap-14 py-8 -skew-x-6">
                                {relatedBlogs.map((item) => (
                                    <Link
                                        href={`/blogs/${item.id}`}
                                        key={item.id}
                                        className=" col-span-4 lg:col-span-3 p-3 bg-gray-100 rounded-xl border border-deep-purple-300 hover:scale-105 hover:shadow-md transition-all duration-300"
                                    >
                                        <div className=" lg:h-20 rounded-lg overflow-hidden">
                                            <Image
                                                src={item.image}
                                                width="400"
                                                height="400"
                                                className=" object-cover"
                                                alt={item.name}
                                            />
                                        </div>
                                        <p className=" py-3 font-bold">
                                            {item.title}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-4 border rounded-xl shadow-md bg-gray-50">
                        <div className="p-6">
                            <h4 className=" underline underline-offset-4 text-center text-deep-orange-500 pb-4">
                                Latest Post:
                            </h4>
                            {latestBlogs.map((blog) => (
                                <Link
                                    key={blog.id}
                                    href={`/blogs/${blog.id}`}
                                    className=" flex gap-5 items-center my-4 shadow rounded-md p-3 border bg-white hover:scale-105 transition-all duration-300"
                                >
                                    <div className=" w-1/3 h-16 rounded-md overflow-hidden ">
                                        <Image
                                            src={blog.image}
                                            width="150"
                                            height="150"
                                            className=" object-cover rounded-md"
                                            alt={blog.title}
                                        />
                                    </div>
                                    <p className=" w-2/3">{blog.title}</p>
                                </Link>
                            ))}
                        </div>
                        <div className="p-6">
                            <h4 className=" underline underline-offset-4 text-center text-blue-500 pb-4">
                                Exclusive Services:
                            </h4>
                            {services.map((service) => (
                                <Link
                                    key={service.id}
                                    href={`/services/${service.id}`}
                                    className=" flex gap-5 items-center justify-center my-4 shadow rounded-md p-3 border bg-white hover:scale-105 transition-all duration-300"
                                >
                                    <div className=" w-1/4 h-16 rounded-md overflow-hidden ">
                                        <Image
                                            src={service.img}
                                            width="150"
                                            height="150"
                                            className=" object-cover rounded-md"
                                            alt={service.title}
                                        />
                                    </div>
                                    <p className=" w-3/4">{service.title}</p>
                                </Link>
                            ))}
                        </div>
                        <div className="p-6">
                            <h4 className=" underline underline-offset-4 text-center text-deep-purple-500 pb-4">
                                Our Consultants:
                            </h4>
                            {directors.map((director) => (
                                <Link
                                    key={director.id}
                                    href={`/directors/${director.id}`}
                                    className=" flex gap-5 items-center my-4 shadow rounded-md p-3 border bg-white hover:scale-105 transition-all duration-300"
                                >
                                    <div className=" w-1/4 h-16 rounded-md overflow-hidden ">
                                        <Image
                                            src={director.img}
                                            width="150"
                                            height="150"
                                            className=" object-cover rounded-md"
                                            alt={director.name}
                                        />
                                    </div>
                                    <div className="">
                                        <p className=" w-3/4 text-blue-600 font-bold">
                                            {director.name}
                                        </p>
                                        <p>{director.profession}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
