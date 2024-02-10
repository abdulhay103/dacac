import Image from "next/image";
import Link from "next/link";

export default function BlogList(props) {
    return (
        <section className={`${props.bgColor} py-16 lg:py-24 2xl:py-32`}>
            <div className="container">
                <div className=" w-full lg:w-3/5 mx-auto pb-20">
                    <div className=" flex gap-2 items-center justify-center pb-3">
                        <div className=" w-3 h-3 bg-blue-500"></div>
                        <h5 className=" uppercase text-blue-500 px-2 font-normal">
                            Blog for you
                        </h5>
                        <div className=" w-3 h-3 bg-blue-500"></div>
                    </div>
                    <div>
                        <h2 className=" text-center text-[28px] lg:text-[36px]">
                            Accelerate your knowledge by following our blogs.
                        </h2>
                    </div>
                </div>
                <div className=" grid grid-cols-3 gap-6 lg:gap-10 2xl:gap-20">
                    {props.blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className=" col-span-3 lg:col-span-1 bg-white border-2 shadow-md hover:border-deep-orange-500 rounded-xl overflow-hidden transition-all duration-300"
                        >
                            <div className=" h-52 2xl:h-60 overflow-hidden">
                                <Link
                                    href={`/blogs/${blog.id}`}
                                    className="hover:bg-opacity-85"
                                >
                                    <Image
                                        src={blog.image}
                                        width="650"
                                        height="700"
                                        className=" object-cover hover:scale-105 transition-all duration-500"
                                        alt={blog.title}
                                    />
                                </Link>
                            </div>

                            <div className=" py-6">
                                <div className=" px-5">
                                    <Link
                                        href={`/blogs/${blog.id}`}
                                        className=" text-lg font-bold text-gray-800"
                                    >
                                        {blog.title}
                                    </Link>
                                    <p className=" text-justify py-5">
                                        {blog.short_desc.slice(0, 200)}...আরও
                                        পড়ুন ।
                                    </p>
                                </div>
                                <div className=" px-6 text-right">
                                    <p>
                                        {blog.createdAt.toLocaleDateString(
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
                    ))}
                </div>
            </div>
        </section>
    );
}
