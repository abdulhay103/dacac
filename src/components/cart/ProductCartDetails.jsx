"use client";
import { ErrorToast, SuccessToast } from "@/utils/formHelper";
import { Card, Typography } from "@material-tailwind/react";
import { Trash } from "@phosphor-icons/react";
import ConfirmOrder from "./ConfirmOrder";

const TABLE_HEAD = [
    " Product",
    "Quantity",
    "Price",
    "Discount",
    "Sub Total",
    "Delete",
];

export function ProductCartDetails({ orderDatas }) {
    let userDetails = orderDatas.userDetails;
    let cartItems = orderDatas.cartItems;
    const result = cartItems.reduce((acc, entry) => {
        const { qtr } = entry;
        const { title, price, discount } = entry.product;
        if (!acc[title]) {
            acc[title] = {
                count: 1,
                totalPrice: parseInt(price * qtr),
                totalDiscount: parseInt(price - (price * discount) / 100),
                totalQtr: parseInt(qtr),
            };
        } else {
            acc[title].count += 1;
            acc[title].totalPrice += parseInt(price * qtr);
            acc[title].totalDiscount += parseInt(
                price - (price * discount) / 100
            );
            acc[title].totalQtr += parseInt(qtr);
        }
        return acc;
    }, {});

    const cartItemsArray = Object.keys(result).map((title) => ({
        userId: cartItems.find((item) => item.product.title === title).userId,
        productId: cartItems.find((item) => item.product.title === title)
            .productId,
        title,
        count: result[title].count,
        totalPrice: result[title].totalPrice,
        totalDiscount: result[title].totalDiscount,
        totalQtr: result[title].totalQtr,
    }));
    const deleteItem = async (productId, userId) => {
        let jsonBody = {
            productId: productId,
            userId: userId,
        };
        try {
            const config = {
                method: "DELETE",
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
                window.location.reload();
            }
        } catch (e) {
            console.log(e.toString());
        }
    };
    return (
        <div>
            <Card className="h-full w-full">
                <table className="w-full table-auto text-left overflow-hidden">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {cartItemsArray.map(
                            (
                                {
                                    userId,
                                    productId,
                                    title,
                                    totalQtr,
                                    totalPrice,
                                    totalDiscount,
                                },
                                index
                            ) => {
                                const isLast = index === cartItems.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";
                                return (
                                    <tr key={index}>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {title}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {totalQtr}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {totalPrice}
                                                <span> &#2547;</span>
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {totalDiscount}
                                                <span> &#2547;</span>
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {totalPrice - totalDiscount}
                                                <span> &#2547;</span>
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Trash
                                                onClick={() => {
                                                    deleteItem(
                                                        productId,
                                                        userId
                                                    );
                                                }}
                                                size={20}
                                                color="red"
                                                className=" cursor-pointer"
                                            />
                                        </td>
                                    </tr>
                                );
                            }
                        )}
                    </tbody>
                </table>
            </Card>
            <ConfirmOrder orderConfirmData={{ userDetails, cartItems }} />
        </div>
    );
}
