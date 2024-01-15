"use client";
import {
    MinusIcon,
    PlusIcon,
    ReceiptRefundIcon,
    ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import { ShoppingCart } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    Tooltip,
} from "@material-tailwind/react";
import Relatedproducts from "./Relatedproducts";
import HTMLReactParser from "html-react-parser";
import { useRouter } from "next/navigation";
import { ErrorToast, SuccessToast } from "@/utils/formHelper";
import Link from "next/link";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${
                id === open ? "rotate-180" : ""
            } h-5 w-5 transition-transform`}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
        </svg>
    );
}

export default function SingleProduct({ data }) {
    const router = useRouter();
    let product = data.productDetails;
    let relatedproducts = data.relatedProducts;
    let user = data.user;
    const [open, setOpen] = useState(1);
    const [qtr, setQtr] = useState(1);
    const incrementQtr = () => {
        if (qtr < 20) {
            setQtr((qtr) => qtr + 1);
        }
    };
    const decrementQtr = () => {
        if (qtr > 1) {
            setQtr((qtr) => qtr - 1);
        }
    };
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    const addtoCartHadler = async (e) => {
        e.preventDefault();
        if (user === null) {
            ErrorToast("Login Reqire!");
            router.push("/user/login");
        } else {
            const addToCartValues = {
                userId: user.id,
                productId: product.id,
                qtr: qtr,
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
                    router.push("/cart");
                } else {
                    ErrorToast(res.status);
                }
            } catch (error) {
                console.log(error);
            }
        }
    };
    return (
        <div className=" container py-10 lg:py-12 xl:py-16 2xl:py-20">
            <div className=" grid grid-cols-2 gap-6 lg:gap-12 xl:gap-24 2xl:gap-32">
                <div className="grid col-span-2 lg:col-span-1 gap-6 lg:gap-8 xl:gap-10">
                    <div className=" p-6 bg-gray-100 rounded-lg">
                        <Image
                            src={product.img1}
                            width="600"
                            height="600"
                            className=" object-cover hover:scale-105 transition-all"
                            alt={product.title}
                        />
                    </div>
                    <div className=" flex gap-6 lg:gap-8 xl:gap-10">
                        <div className=" bg-gray-100 rounded-lg p-5">
                            <Image
                                src={product.img2}
                                width="600"
                                height="600"
                                className=" object-cover hover:scale-105 transition-all"
                                alt={product.title}
                            />
                        </div>
                        <div className=" bg-gray-100 rounded-lg p-5">
                            <Image
                                src={product.img3}
                                width="600"
                                height="600"
                                className=" object-cover hover:scale-105 transition-all"
                                alt={product.title}
                            />
                        </div>
                    </div>
                </div>
                <div className=" col-span-2 lg:col-span-1">
                    <div>
                        <h3 className=" pb-2">{product.title}</h3>
                        <div className=" flex gap-5">
                            {parseInt(product.discount) > 0 && (
                                <p>
                                    Offer Price:
                                    <span className=" text-xl font-bold pl-3 pr-1">
                                        {Math.floor(
                                            parseInt(product.price) -
                                                (parseInt(product.price) *
                                                    parseInt(
                                                        product.discount
                                                    )) /
                                                    100
                                        )}
                                    </span>
                                    &#2547;
                                </p>
                            )}
                            <p className=" text-red-500 line-through">
                                Regular Price:
                                <span className=" pr-1">
                                    {parseInt(product.price)}
                                </span>
                                &#2547;
                            </p>
                        </div>

                        <div className=" flex gap-5 items-center py-6">
                            <div className="flex gap-3 justify-center items-center bg-deep-orange-300 rounded-md border-2 border-deep-orange-300">
                                <p
                                    className={
                                        qtr > 1
                                            ? " font-bold text-lg px-2 cursor-pointer"
                                            : " hidden"
                                    }
                                    onClick={decrementQtr}
                                >
                                    <MinusIcon className=" w-6 h-6 text-white" />
                                </p>

                                <input
                                    readOnly
                                    type="text"
                                    name="qtr"
                                    id="qtr"
                                    value={qtr}
                                    className="px-3 py-[6px] w-16 focus:outline-none rounded text-center text-deep-orange-500"
                                />
                                <p
                                    onClick={incrementQtr}
                                    className={
                                        qtr < 20
                                            ? " font-bold text-lg px-2 cursor-pointer"
                                            : " hidden"
                                    }
                                >
                                    <PlusIcon className=" w-6 h-6 text-white" />
                                </p>
                            </div>
                            <button
                                onClick={(e) => addtoCartHadler(e)}
                                type="submit"
                                className=" flex items-center bg-orange-500 hover:opacity-75 rounded text-white px-5 py-2 transition-all"
                            >
                                <ShoppingBagIcon className=" w-6 h-6" />
                                <p className=" pl-2">Order Now</p>
                            </button>
                        </div>

                        <div>
                            <Accordion
                                open={open === 1}
                                icon={<Icon id={1} open={open} />}
                            >
                                <AccordionHeader onClick={() => handleOpen(1)}>
                                    Description
                                </AccordionHeader>
                                <AccordionBody>
                                    {product.short_desc}
                                </AccordionBody>
                            </Accordion>
                            <Accordion
                                open={open === 2}
                                icon={<Icon id={2} open={open} />}
                            >
                                <AccordionHeader onClick={() => handleOpen(2)}>
                                    Support And Care
                                </AccordionHeader>
                                <AccordionBody>
                                    {product.support_n_care}
                                </AccordionBody>
                            </Accordion>
                            <Accordion
                                open={open === 3}
                                icon={<Icon id={3} open={open} />}
                            >
                                <AccordionHeader onClick={() => handleOpen(3)}>
                                    How Setup / Installation
                                </AccordionHeader>
                                <AccordionBody>
                                    {product.how_to_setup}
                                </AccordionBody>
                            </Accordion>
                            <Accordion
                                open={open === 4}
                                icon={<Icon id={4} open={open} />}
                            >
                                <AccordionHeader onClick={() => handleOpen(4)}>
                                    FAQ
                                </AccordionHeader>
                                <AccordionBody>{product.faq}</AccordionBody>
                            </Accordion>
                        </div>
                        <div className=" grid grid-cols-2 gap-6 pt-6 lg:pt-8 xl:pt-12 2xl:pt-14">
                            <div className=" col-span-2 lg:col-span-1 p-6 bg-orange-100 rounded-lg">
                                <ReceiptRefundIcon className=" w-6 h-6" />
                                <h6 className=" py-2">Free Shipping</h6>
                                <p>On order over &#2547;2000</p>
                            </div>
                            <div className=" col-span-2 lg:col-span-1 p-6 bg-deep-orange-100 rounded-lg">
                                <ReceiptRefundIcon className=" w-6 h-6" />
                                <h6 className=" py-2">Free Shipping</h6>
                                <p>On order over &#2547;2000</p>
                            </div>
                            <div className=" col-span-2 lg:col-span-1 p-6 bg-deep-orange-100 rounded-lg">
                                <ReceiptRefundIcon className=" w-6 h-6" />
                                <h6 className=" py-2">Free Shipping</h6>
                                <p>On order over &#2547;2000</p>
                            </div>
                            <div className=" col-span-2 lg:col-span-1 p-6 bg-orange-100 rounded-lg">
                                <ReceiptRefundIcon className=" w-6 h-6" />
                                <h6 className=" py-2">Free Shipping</h6>
                                <p>On order over &#2547;2000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-6 lg:pt-8 xl:pt-10 2xl:pt-12">
                <h4 className="pb-4 font-semibold">Product Details</h4>
                <div>{HTMLReactParser(product.details)}</div>
            </div>
            <Relatedproducts relatedproducts={relatedproducts} />
        </div>
    );
}
