import Image from "next/image";
import { Tooltip } from "@material-tailwind/react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { ErrorToast, SuccessToast } from "@/utils/formHelper";
import { useRouter } from "next/navigation";
export default async function ProductCard({ products, user }) {
    const router = useRouter();
    const addtoCartHadler = async (id) => {
        if (user === null) {
            router.push("/user/login");
        } else {
            const addToCartValues = {
                userId: user.id,
                productId: id,
                qtr: 1,
                status: "white Listed",
            };
            try {
                const req = await fetch("/api/orders", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(addToCartValues),
                });
                let res = await req.json();
                if (res.status === "Successfully added in cart") {
                    SuccessToast(res.status);
                    window.location.reload();
                } else {
                    ErrorToast(res.status);
                }
            } catch (error) {
                console.log(error);
            }
        }
    };
    return (
        <>
            {products !== undefined &&
                products.map((item) => (
                    <div
                        key={item.id}
                        className=" col-span-12 md:col-span-6 lg:col-span-4 2xl:min-h-[580px] 2xl:col-span-3 border rounded-lg overflow-hidden"
                    >
                        <Link href={`/products/details/${item.id}`}>
                            <div className=" flex justify-center items-center py-10 lg:py-14 xl:py-16 px-6 bg-teal-50 relative">
                                {parseInt(item.discount) > 0 && (
                                    <p className=" absolute right-5 z-10 top-5 px-6 py-2 bg-red-400 rounded-full text-white font-medium">
                                        <span>{item.discount}%</span> Off
                                    </p>
                                )}
                                <Image
                                    src={item.img1}
                                    width="200"
                                    height="180"
                                    className=" object-cover hover:scale-110 transition-all"
                                    alt={item.title}
                                />
                            </div>
                            <div className="p-5">
                                <h5>{item.title}</h5>
                                <p className="pt-2">
                                    Country Origin:
                                    <span className=" font-semibold pl-2">
                                        {item.origin}
                                    </span>
                                </p>
                            </div>
                        </Link>
                        <div className=" px-6 pb-6 flex items-center gap-6">
                            <div className=" w-5/6">
                                {parseInt(item.discount) > 0 && (
                                    <p>
                                        Selling Price:
                                        <span className=" text-xl font-bold pl-2 pr-1">
                                            {Math.floor(
                                                parseInt(item.price) -
                                                    (parseInt(item.price) *
                                                        parseInt(
                                                            item.discount
                                                        )) /
                                                        100
                                            )}
                                        </span>
                                        &#2547;
                                    </p>
                                )}
                                <p className=" line-through">
                                    Regular Price:
                                    <span className=" pr-1">
                                        {parseInt(item.price)}
                                    </span>
                                    &#2547;
                                </p>
                            </div>
                            <div
                                onClick={() => addtoCartHadler(item.id)}
                                className="w-1/6"
                            >
                                <Tooltip
                                    content="Add to Cart"
                                    animate={{
                                        mount: { scale: 1, y: 0 },
                                        unmount: { scale: 0, y: 25 },
                                    }}
                                    className="bg-blue-400"
                                >
                                    <ShoppingCartIcon className=" w-7 h-7 cursor-pointer hover:text-blue-500 transition-all" />
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                ))}
        </>
    );
}
