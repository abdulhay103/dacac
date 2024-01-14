import {
    Envelope,
    Phone,
    UserCircleGear,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import UpdateUser from "./UpdateUser";

export default function UserProfile({ user }) {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className=" w-full lg:w-2/3 p-6 xl:p-10 2xl:p-14 border border-blue-200 shadow-lg rounded-xl">
                <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
                    <div className=" w-28 h-28">
                        {user.avater === "0" ? (
                            <UserCircleGear size={100} weight="fill" />
                        ) : (
                            <Image
                                src={user.avater}
                                alt={user.firstName}
                                width={100}
                                height={100}
                                className=" border-2 rounded-full border-blue-600 object-cover h-full w-full"
                            />
                        )}
                    </div>
                    <div className="">
                        <h3 className=" text-blue-600">
                            {user.firstName}
                            <span className=" pl-1">{user.lastName}</span>
                        </h3>
                        <p className="py-2">{user.profession}</p>
                    </div>
                </div>
                <div className=" pt-5">
                    <p className=" py-2 text-justify">
                        <span className=" font-bold pr-1">Biography:</span>
                        {user.bio}
                    </p>
                    <p className=" py-2">
                        <span className=" font-bold pr-1">Address:</span>
                        {user.address}
                    </p>
                    <div className=" py-2">
                        <p className="font-bold pb-3">Contact Info:</p>
                        <div className=" flex flex-col lg:flex-row gap-3 lg:gap-6">
                            <div className=" flex gap-2">
                                <Phone size={24} />
                                <p>{user.phone}</p>
                            </div>
                            <div className=" flex gap-2">
                                <Envelope size={24} />
                                <p>{user.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <UpdateUser user={user} />
            </div>
        </div>
    );
}
