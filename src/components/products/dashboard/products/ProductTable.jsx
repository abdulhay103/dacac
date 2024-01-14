"use client";
import { Card, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
const TABLE_HEAD = [
    "Product Image",
    "Product Name",
    "Category",
    "Type",
    "Price",
    "Discount",
    "Action",
];

export function ProductTable(props) {
    const productsData = props.productsData;
    let products = productsData.latestproduct;
    return (
        <Card className="h-full w-full overflow-hidden">
            <table className="w-full min-w-max table-auto text-left">
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
                    {products.map(
                        (
                            {
                                id,
                                title,
                                category,
                                img1,
                                type,
                                price,
                                discount,
                            },
                            index
                        ) => {
                            const isLast = index === products.length - 1;
                            const classes = isLast
                                ? "p-4"
                                : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={id}>
                                    <td className={`pl-8 ${classes}`}>
                                        <Image
                                            src={img1}
                                            height="48"
                                            width="48"
                                            alt={title}
                                            className=" object-cover"
                                        />
                                    </td>
                                    <td className={` w-80 ${classes}`}>
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
                                            {category["name"]}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {type}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {price}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {discount}%
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Link
                                            href={`/dashboard/products/update/${id}`}
                                        >
                                            Edit
                                        </Link>
                                    </td>
                                </tr>
                            );
                        }
                    )}
                </tbody>
            </table>
        </Card>
    );
}
