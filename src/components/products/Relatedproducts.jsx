import Image from "next/image";
import Link from "next/link";

export default async function Relatedproducts({ relatedproducts }) {
    return (
        <div className=" py-8 lg:py-10 xl:py-12 2xl:py-16">
            <h4 className=" pb-4">Similar Product also you may like..</h4>

            <div className=" grid grid-cols-4 gap-6 lg:gap-8 xl:gap-10">
                {relatedproducts.map((product) => (
                    <Link
                        key={product.id}
                        href={`/products/details/${product.id}`}
                        className=" col-span-4 lg:col-span-2 xl:col-span-1 bg-gray-100 rounded-lg -skew-x-2 border-r-2 border-b-3 hover:border-r-2 hover:border-b-3 hover:border-blue-500 transition-all"
                    >
                        <div>
                            <Image
                                src={product.img1}
                                width="300"
                                height="300"
                                alt={product.title}
                                className=" object-cover p-6 hover:scale-105 transition-all"
                            />
                        </div>
                        <h5 className=" p-5">{product.title}</h5>
                    </Link>
                ))}
            </div>
        </div>
    );
}
