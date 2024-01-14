"use client";
import { Typography } from "@material-tailwind/react";
import { OrdersModal } from "./OrdersModal";

const TABLE_HEAD = [
    "Order Id",
    "Product Name",
    "Quantity",
    "Regular Price",
    "Total Discount",
    "Sub Total",
    "Customer Name",
    "Mobile No",
    "Shiping Address",
    "Action",
];

export default function OrdersList({ allOrders, text, color }) {
    return (
        <div className="p-10 2xl:p-16">
            <div
                className={`border border-${color}-500 rounded-md overflow-hidden`}
            >
                <h4 className={`py-4 text-center bg-${color}-500 text-white`}>
                    All {text} Order List
                </h4>
                <table className=" w-full table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className={`border-t border-b border-${color}-200 bg-blue-gray-50 p-4`}
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
                        {allOrders.map(({ id, product, user, qtr }, index) => {
                            let totalPrice =
                                BigInt(product.price) * BigInt(qtr);
                            let totalDiscount =
                                ((BigInt(product.price) *
                                    BigInt(product.discount)) /
                                    100n) *
                                BigInt(qtr);

                            const isLast = index === allOrders.length - 1;
                            const classes = isLast
                                ? "p-4"
                                : "p-4 border-b border-blue-gray-50";
                            return (
                                <tr key={id}>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {id}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {product.title}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {qtr}pcs
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {totalPrice}&#2547;
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {totalDiscount}&#2547;
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {totalPrice - totalDiscount}
                                            &#2547;
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {user.firstName +
                                                " " +
                                                user.lastName}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {user.phone}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {user.address}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <OrdersModal
                                            modalData={{
                                                id,
                                                product,
                                                user,
                                                qtr,
                                                color,
                                                text,
                                            }}
                                        />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
