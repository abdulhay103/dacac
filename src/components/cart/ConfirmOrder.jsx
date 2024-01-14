"use client";
import { ErrorToast, SuccessToast } from "@/utils/formHelper";
import { useState } from "react";
import SubmitBtn from "../utils/SubmitBtn";
import Link from "next/link";
import { Tooltip } from "@material-tailwind/react";

export default function ConfirmOrder({ orderConfirmData }) {
    let userDetails = orderConfirmData.userDetails;
    let productDatas = orderConfirmData.cartItems;
    const [submit, setSubmit] = useState(false);

    const priceCalculations = productDatas.reduce(
        (total, item) => {
            const totalPrice = item.qtr * item.product.price;
            const totalDiscount = (totalPrice * item.product.discount) / 100;
            const itemTotal = totalPrice - totalDiscount;

            const grandTotal = total.grandTotal + itemTotal;
            const updatedTotal = {
                totalPrice: total.totalPrice + totalPrice,
                totalDiscount: total.totalDiscount + totalDiscount,
                grandTotal: grandTotal,
            };

            return updatedTotal;
        },
        { totalPrice: 0, totalDiscount: 0, grandTotal: 0 }
    );

    const placeOrder = async (id) => {
        setSubmit(true);
        let jsonBody = {
            userId: id,
        };
        try {
            const config = {
                method: "PATCH",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(jsonBody),
            };
            const req = await fetch("/api/orders", config);
            let res = await req.json();
            if (res.status === "Fail, Internal Error!") {
                ErrorToast(res.status);
            } else {
                SuccessToast(res.status);
                window.location.href = "/cart/confirm";
            }
        } catch (e) {
            console.log(e.toString());
        } finally {
            setSubmit(false);
        }
    };
    return (
        <div className="grid justify-center gap-8 xl:gap-12 mt-10">
            <div className=" w-full border p-6 rounded">
                <h4 className=" text-center">Your Chosen Product List</h4>
                <div className=" py-4">
                    <p className=" underline underline-offset-2 pb-1">
                        Customer Details:
                    </p>
                    <div className="flex gap-5">
                        <p>Name:</p>
                        <p>
                            {userDetails.firstName + " " + userDetails.lastName}
                        </p>
                    </div>
                    <div className="flex gap-5">
                        <p>Phone:</p>
                        <p>{userDetails.phone}</p>
                    </div>
                    <div className="flex gap-5 max-w-lg">
                        <p>Address:</p>
                        <p>{userDetails.address}</p>
                    </div>
                    <div className="flex gap-5">
                        <p>Regular Price:</p>
                        <p>{priceCalculations.totalPrice.toString()}</p>
                    </div>
                    <div className="flex gap-5">
                        <p>Discount</p>
                        <p>{priceCalculations.totalDiscount.toString()}</p>
                    </div>
                    <div className="flex gap-5">
                        <p>Grand Total</p>
                        <p>{priceCalculations.grandTotal.toString()}</p>
                    </div>
                    <div className="mt-5 flex justify-end">
                        {userDetails.address === "0" ? (
                            <div className=" flex gap-6">
                                <Link
                                    href="/profile"
                                    className=" px-4 py-2 bg-blue-400 rounded text-white hover:bg-blue-500 transition-all"
                                >
                                    Update profile
                                </Link>
                                <Tooltip
                                    content="Update Your delivery address"
                                    className="bg-blue-500"
                                >
                                    <p className=" px-4 py-2 bg-blue-400 rounded opacity-50 text-white hover:bg-red-500 transition-all">
                                        Confirm Order
                                    </p>
                                </Tooltip>
                            </div>
                        ) : (
                            <SubmitBtn
                                onClick={() => {
                                    placeOrder(userDetails.id);
                                }}
                                submit={submit}
                                className=" px-4 py-2 bg-blue-400 rounded text-white hover:bg-blue-500 transition-all"
                                text="Confirm Order"
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
