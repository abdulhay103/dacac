import Image from "next/image";
import Link from "next/link";
import confirmOrder from "/public/cart/confirm-order.png";

export default function page() {
    return (
        <div className=" w-full flex flex-col justify-center items-center min-h-screen p-6">
            <div className=" grid gap-6 justify-center">
                <Image
                    src={confirmOrder}
                    height="500"
                    width="500"
                    className=" object-cover"
                />
                <p className=" text-center pt-5">
                    Successfuly Placed your order. Thanks for with us!
                </p>
                <Link
                    className=" px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-500 transition-all text-center"
                    href="/"
                >
                    Go Back to Home
                </Link>
            </div>
        </div>
    );
}
