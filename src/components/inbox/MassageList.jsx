"use client";
import { Typography } from "@material-tailwind/react";
import { ReadMassageModal } from "./ReadMassageModal";
import { Trash } from "@phosphor-icons/react";
import { ErrorToast, SuccessToast } from "@/utils/formHelper";

const TABLE_HEAD = ["Sender", "Address", "Massage", "Action"];

export default function MassageList({ allMassage }) {
    const deleteMassageHandler = async (id) => {
        try {
            const config = {
                method: "DELETE",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id: id }),
            };
            const req = await fetch("/api/massages", config);
            const res = await req.json();
            if (res.status === "Successfully delete the massage.") {
                SuccessToast(res.status);
                window.location.reload();
            } else if (res.status === "Fail! Internal Error") {
                ErrorToast(res.status);
            }
        } catch (e) {
            console.log(e.toString());
        }
    };
    return (
        <div className="p-10 2xl:p-16">
            <div className="border-2 border-deep-orange-500 rounded-md overflow-hidden">
                <h4 className="py-4 text-center bg-deep-orange-500 text-white">
                    All Massages
                </h4>
                <table className=" w-full table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-t-2 border-b-2 border-deep-orange-500 bg-gray-300 p-4"
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
                        {allMassage.map(
                            ({ id, name, email, massage, status }, index) => {
                                const isLast = index === allMassage.length - 1;
                                const classes =
                                    status === "unread"
                                        ? "p-4 bg-orange-50 border-b border-deep-orange-gray-100"
                                        : "p-4 border-b bg-white border-deep-orange-gray-100";
                                return (
                                    <tr key={id}>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="deep-orange-gray"
                                                className="font-normal"
                                            >
                                                {name}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="deep-orange-gray"
                                                className="font-normal"
                                            >
                                                {email}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="deep-orange-gray"
                                                className="font-normal"
                                            >
                                                {massage}
                                            </Typography>
                                        </td>
                                        <td className={`${classes} flex gap-5`}>
                                            <ReadMassageModal
                                                modalData={{
                                                    id,
                                                    name,
                                                    email,
                                                    massage,
                                                    status,
                                                }}
                                            />
                                            <Trash
                                                size={22}
                                                className=" text-red-500 cursor-pointer"
                                                onClick={() =>
                                                    deleteMassageHandler(id)
                                                }
                                            />
                                        </td>
                                    </tr>
                                );
                            }
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
