import { cookies } from "next/headers";
import { VerifyToken } from "./jwtHelper";
import { PrismaClient } from "@prisma/client";

//user Data
export async function getUser() {
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
// Get Single User
export async function getSingleUser(id) {
    const prisma = new PrismaClient();
    return await prisma.users.findUnique({
        where: { id: id },
    });
}

// Count all unreaded massage
export async function countUnreadedMassages(status) {
    const prisma = new PrismaClient();
    return await prisma.massages.count({ where: { status: status } });
}
