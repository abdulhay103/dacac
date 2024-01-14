import UserProfile from "@/components/profile/UserProfile";
import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";

export async function getUser(id) {
    const prisma = new PrismaClient();
    return await prisma.users.findUnique({ where: { id: id } });
}

export default async function Profile() {
    const headerList = headers();
    let userId = parseInt(headerList.get("id"));
    const user = await getUser(userId);
    return (
        <div className=" xl:pt-12 2xl:pt-48">
            <UserProfile user={user} />
        </div>
    );
}
