import UserProfile from "@/components/profile/UserProfile";
import { VerifyToken } from "@/utils/jwtHelper";
import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";
async function getData() {
    const allCookies = cookies();
    let token = allCookies.get("token");
    try {
        if (token) {
            let userData = await VerifyToken(token["value"]);
            const prisma = new PrismaClient();
            let user = await prisma.users.findUnique({
                where: { id: userData.id },
            });
            return user;
        } else {
            throw new Error("Token not found");
        }
    } catch (error) {
        return null;
    }
}

export default async function Profile() {
    const user = await getData();
    return (
        <div className=" container py-8 lg:py-10 xl:py-16 2xl:py-20">
            <UserProfile user={user} />
        </div>
    );
}
