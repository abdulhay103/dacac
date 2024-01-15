"use client";
import { useState } from "react";
import { Button, Dialog, DialogFooter } from "@material-tailwind/react";
import { Eye, EyeSlash } from "@phosphor-icons/react";

export function ReadMassageModal({ modalData }) {
    let { id, name, email, massage, status } = modalData;
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    const inputValues = {
        id: id,
        status: "read",
    };

    const massageHandler = async () => {
        try {
            const config = {
                method: "PATCH",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(inputValues),
            };
            const req = await fetch("/api/massages", config);
            const res = await req.json();
            if (res.status === "Successfully read your massage.") {
                setOpen(!open);
            }
        } catch (e) {
            console.log(e.toString());
        }
    };

    const closeHandler = () => {
        setOpen(!open);
        window.location.reload();
    };

    return (
        <>
            {status === "unread" ? (
                <EyeSlash
                    onClick={massageHandler}
                    className=" w-6 h-6 cursor-pointer text-red-500"
                />
            ) : (
                <Eye
                    onClick={handleOpen}
                    className=" w-6 h-6 cursor-pointer text-deep-orange-500"
                />
            )}

            <Dialog open={open} handler={handleOpen} size="md">
                <h4 className="text-center py-3 border-b text-deep-orange-500">
                    Email Details
                </h4>
                <div className=" p-6">
                    <h6 className=" pb-2">
                        Mail Sender: <span className="pl-2">{name}</span>
                    </h6>
                    <h6 className=" pb-2">
                        Sender Email: <span className=" pl-2">{email}</span>
                    </h6>
                    <h6>Massage:</h6>
                    <p className=" px-6">{massage}</p>
                </div>
                <DialogFooter className="space-x-2">
                    <Button
                        variant="text"
                        color="deep-orange-gray"
                        onClick={closeHandler}
                        className=" border "
                    >
                        Close
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}
