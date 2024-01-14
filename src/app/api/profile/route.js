import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    const headerList = headers();
    let id = headerList.get("id");
    try {
        const prisma = new PrismaClient();
        const reqBody = await req.json();
        let hashedPassword = await bcrypt.hash(reqBody.password, 10);
        let uniqueUser = await prisma.users.findUnique({
            where: { id: id },
        });
        if (uniqueUser === null) {
            return NextResponse.json({
                status: "User dosen't exist.",
            });
        } else {
            let updateUser = await prisma.users.update({
                where: { id: id },
                data: {
                    firstName: reqBody.firstName,
                    lastName: reqBody.lastName,
                    profession: reqBody.profession,
                    bio: reqBody.bio,
                    avater: reqBody.avater,
                    email: reqBody.email,
                    phone: reqBody.phone,
                    address: reqBody.address,
                    password: hashedPassword,
                    otp: "0",
                },
            });
            return NextResponse.json({
                status: "Successfully Update User.",
                data: updateUser,
            });
        }
    } catch (e) {
        return NextResponse.json({
            status: "Update Fail",
            data: e.toString(),
        });
    }
}
