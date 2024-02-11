"use client";
import { Button, Dialog, DialogFooter } from "@material-tailwind/react";
import HTMLReactParser from "html-react-parser";
import { useState } from "react";

export function ReadNotice({ details, className }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    return (
        <>
            <Button onClick={handleOpen} className={className}>
                read more
            </Button>

            <Dialog
                open={open}
                handler={handleOpen}
                className=" p-6 lg:p-10 2xl:p-12"
            >
                <h3 className=" border-b-2 border-gray-600">{details.title}</h3>
                <p className=" text-blue-500 pt-1">
                    Published Date:{" "}
                    {details.createdAt.toLocaleDateString("en-US", {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                    })}
                </p>
                <div className=" py-6">
                    <p className=" text-justify">
                        {HTMLReactParser(details.details)}
                    </p>
                    <h5 className=" pt-8 xl:pt-10">
                        Published By: DACAC Authority
                    </h5>
                    <p className=" py-2">
                        Please call 01678-696907 for any query.
                    </p>
                </div>

                <DialogFooter className="space-x-2">
                    <Button
                        variant="gradient"
                        color="green"
                        onClick={handleOpen}
                    >
                        Close
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}
