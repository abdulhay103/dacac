"use client";
import { ErrorToast, SuccessToast } from "@/utils/formHelper";
import { useState } from "react";
import {
    Button,
    Dialog,
    DialogFooter,
    Option,
    Select,
} from "@material-tailwind/react";
import { DotsThreeCircleVertical } from "@phosphor-icons/react";

const orderStatus = [
    { id: 1, status: "Aproved" },
    { id: 2, status: "On Delivary" },
    { id: 3, status: "Compleate" },
    { id: 4, status: "Rejected" },
];

export function OrdersModal({ modalData }) {
    let { id, product, qtr, user, color, text } = modalData;
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    const [inputValues, setInputValues] = useState({
        id: id,
        status: "",
    });

    const onChangeHandler = (name, value) => {
        setInputValues({ ...inputValues, [name]: value });
    };

    const onUpdateHandler = async () => {
        try {
            const config = {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(inputValues),
            };
            const req = await fetch("/api/orders", config);
            const res = await req.json();
            if (!req.ok) {
                ErrorToast("Connection Fail");
            } else if (res.status === "Fail, Internal Error!") {
                ErrorToast(res.status);
            } else if (res.status === "Rejected the order.") {
                ErrorToast(res.status);
                window.location.reload();
            } else {
                SuccessToast(res.status);
                window.location.reload();
            }
        } catch (e) {
            console.log(e.toString());
        }
    };

    return (
        <>
            {color === "red" ? (
                <div>
                    <DotsThreeCircleVertical
                        size={24}
                        className={`cursor-not-allowed text-${color}-500 opacity-50`}
                    />
                </div>
            ) : (
                <div onClick={handleOpen}>
                    <DotsThreeCircleVertical
                        size={24}
                        className={` cursor-pointer text-${color}-500 opacity-80`}
                    />
                </div>
            )}

            <Dialog open={open} handler={handleOpen} size="md" className=" p-8">
                <h4
                    className={`text-center pb-4 border-b text-${color}-500`}
                >{`Change ${text} Order Status`}</h4>
                <div className="grid grid-flow-col gap-5 p-6 items-center">
                    <div className=" grid gap-2">
                        <p>{product.title}</p>
                        <p>
                            Quantity: <span>{qtr}</span>pcs
                        </p>
                        <p>
                            Buyer:{" "}
                            <span>{user.firstName + " " + user.lastName}</span>
                        </p>
                        <p>
                            Shipping: <span>{user.address}</span>
                        </p>
                        <p>
                            Contact: <span>{user.phone}</span>
                        </p>
                    </div>
                    <div className=" p-5 border-l-2 border-dotted">
                        <Select
                            label="Order Status"
                            onChange={(e) => onChangeHandler("status", e)}
                        >
                            {orderStatus.map((item) => (
                                <Option
                                    key={item.id}
                                    className={
                                        item.status === "Aproved"
                                            ? `text-green-500`
                                            : item.status === "On Delivary"
                                            ? `text-orange-500`
                                            : item.status === "Compleate"
                                            ? `text-green-500`
                                            : "text-red-500"
                                    }
                                    value={item.status}
                                >
                                    {item.status}
                                </Option>
                            ))}
                        </Select>
                    </div>
                </div>
                <DialogFooter className="space-x-2">
                    <Button
                        variant="text"
                        color="blue-gray"
                        onClick={handleOpen}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleOpen}
                        className={` bg-${color}-500 hover:opacity-75 rounded transition-all`}
                    >
                        <p onClick={() => onUpdateHandler()}>Confirm</p>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}
