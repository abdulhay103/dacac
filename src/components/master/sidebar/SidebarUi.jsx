"use client";
import {
    Card,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    Typography,
    AccordionBody,
} from "@material-tailwind/react";
import {
    UserCircleIcon,
    InboxIcon,
    PowerIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import mecLogoTitle from "/public/brands/mec-nav-logo.png";
import Image from "next/image";
import Link from "next/link";
import { FolderStar, Graph } from "@phosphor-icons/react";
import { useState } from "react";

export function SidebarUi({ totalMassage }) {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    return (
        <Card className="h-[100vh] w-80 2xl:w-96  p-4 shadow-xl shadow-deep-orange-gray-900/5">
            <Link href="/" className=" w-11/12 p-5">
                <Image
                    src={mecLogoTitle}
                    width="auto"
                    height="auto"
                    className=" object-cover"
                    alt="logo"
                />
            </Link>
            <List>
                <ListItem>
                    <ListItemPrefix>
                        <Graph size={22} />
                    </ListItemPrefix>
                    <Link href="/dashboard">Analytics</Link>
                </ListItem>
                <Accordion
                    open={open === 1}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${
                                open === 1 ? "rotate-180" : ""
                            }`}
                        />
                    }
                >
                    <ListItem className="p-0" selected={open === 1}>
                        <AccordionHeader
                            onClick={() => handleOpen(1)}
                            className="border-b-0 p-3"
                        >
                            <ListItemPrefix>
                                <ShoppingBagIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography
                                color="deep-orange-gray"
                                className="mr-auto font-normal"
                            >
                                <Link href="#" className="w-full">
                                    Orders
                                </Link>
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0">
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon
                                        strokeWidth={3}
                                        className="h-3 w-5"
                                    />
                                </ListItemPrefix>
                                <Link
                                    href="/dashboard/orders/pending"
                                    className=" w-full"
                                >
                                    Pending Orders
                                </Link>
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon
                                        strokeWidth={3}
                                        className="h-3 w-5"
                                    />
                                </ListItemPrefix>
                                <Link
                                    href="/dashboard/orders/approved"
                                    className=" w-full"
                                >
                                    Approved Orders
                                </Link>
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon
                                        strokeWidth={3}
                                        className="h-3 w-5"
                                    />
                                </ListItemPrefix>
                                <Link
                                    href="/dashboard/orders/on-delivary"
                                    className=" w-full"
                                >
                                    On Delivery
                                </Link>
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon
                                        strokeWidth={3}
                                        className="h-3 w-5"
                                    />
                                </ListItemPrefix>
                                <Link
                                    href="/dashboard/orders/cancel"
                                    className=" w-full"
                                >
                                    Rejected Orders
                                </Link>
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>
                <ListItem>
                    <ListItemPrefix>
                        <FolderStar weight="fill" className="h-5 w-5" />
                    </ListItemPrefix>
                    <Link href="/dashboard/products" className="w-full">
                        Products
                    </Link>
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <InboxIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Link href="/dashboard/inbox" className="w-full">
                        Inbox
                    </Link>
                    <ListItemSuffix>
                        {totalMassage !== 0 && (
                            <Chip
                                value={totalMassage}
                                size="sm"
                                variant="ghost"
                                color="deep-orange-gray"
                                className="rounded-full"
                            />
                        )}
                    </ListItemSuffix>
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <UserCircleIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Link href="/dashboard/profile" className="w-full">
                        Profile
                    </Link>
                </ListItem>
                <ListItem className=" text-red-400 hover:text-red-500 transition-all">
                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Link href="/user/logout" className="w-full">
                        Log Out
                    </Link>
                </ListItem>
            </List>
        </Card>
    );
}