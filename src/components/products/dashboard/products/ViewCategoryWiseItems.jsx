import { Dialog, DialogBody, Typography } from "@material-tailwind/react";
import Image from "next/image";
import { useState } from "react";
import { MinusCircle } from "@phosphor-icons/react";
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

export default function ViewCategoryWiseItems(props) {
    let products = props.products;
    let text = props.text;
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    return (
        <div className=" scroll-auto">
            <div className=" flex w-full justify-center">
                <p
                    onClick={handleOpen}
                    className=" hover:text-deep-orange-500 cursor-pointer inline-block relative transition-all duration-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[3px] before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-l before:from-amber-500 before:to-deep-orange-500 hover:before:w-full hover:before:opacity-100 "
                >
                    All Items
                </p>
            </div>
            <Dialog size="lg" open={open} handler={handleOpen} className=" p-6">
                <div className=" flex justify-between pr-5">
                    <h4>
                        All <span>{text}:</span>
                    </h4>
                    <MinusCircle
                        onClick={handleOpen}
                        size={25}
                        className=" cursor-pointer"
                    />
                </div>
                <DialogBody className=" h-[30rem] overflow-y-auto">
                    <table className="w-full min-w-max table-auto text-left rounded-md overflow-hidden">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th
                                        key={head}
                                        className="border-b border-deep-orange-gray-100 bg-deep-orange-gray-50 p-4"
                                    >
                                        <Typography
                                            variant="small"
                                            color="deep-orange-gray"
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
                                    const isLast =
                                        index === products.length - 1;
                                    const classes = isLast
                                        ? "p-4"
                                        : "p-4 border-b border-deep-orange-gray-50";
                                    return (
                                        <tr key={id}>
                                            <td className={classes}>
                                                <Image
                                                    src={img1}
                                                    height="48"
                                                    width="48"
                                                    alt={title}
                                                    className=" object-cover"
                                                />
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="deep-orange-gray"
                                                    className="font-normal"
                                                >
                                                    {title}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="deep-orange-gray"
                                                    className="font-normal"
                                                >
                                                    {category["name"]}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="deep-orange-gray"
                                                    className="font-normal"
                                                >
                                                    {type}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="deep-orange-gray"
                                                    className="font-normal"
                                                >
                                                    {price}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="deep-orange-gray"
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
                </DialogBody>
            </Dialog>
        </div>
    );
}
