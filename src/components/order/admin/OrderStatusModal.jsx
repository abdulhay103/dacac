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
    { id: 2, status: "Rejected" },
];

export function OrderStatusModal({ modalData }) {
    let orderId = modalData.id;
    let product = modalData.product;
    let qtr = modalData.qtr;
    let user = modalData.user;
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    const [inputValues, setInputValues] = useState({
        id: orderId,
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
            <div onClick={handleOpen}>
                <DotsThreeCircleVertical
                    size={26}
                    className=" cursor-pointer text-blue-500"
                />
            </div>

            <Dialog open={open} handler={handleOpen} size="md">
                <h4 className=" text-center py-3 border-b">
                    Order Confirmation
                </h4>
                <div className="grid grid-flow-col gap-5 p-5 items-center">
                    <div className=" grid gap-2">
                        <p>{product.title}</p>
                        <p>
                            Quantity: <span>{qtr}</span>pcs
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
                        className=" bg-green-400 hover:bg-green-500 rounded transition-all"
                    >
                        <p onClick={() => onUpdateHandler()}>Confirm</p>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}
