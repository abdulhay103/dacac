import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    try {
        const prisma = new PrismaClient();
        const reqBody = await req.json();
        const hashedPassword = await bcrypt.hash(reqBody.password, 10);
        let uniqueUser = await prisma.users.count({
            where: { email: reqBody.email },
        });

        if (uniqueUser === 1) {
            return NextResponse.json({
                status: "Email already exists.",
            });
        } else {
            let createUser = await prisma.users.create({
                data: {
                    firstName: reqBody.firstName,
                    lastName: reqBody.lastName,
                    profession: "0",
                    bio: "0",
                    avater: "https://ucarecdn.com/0b2cf336-fb74-444a-8d97-781c09dbf43f/dumpyuser.jpg",
                    email: reqBody.email,
                    phone: reqBody.phone,
                    address: "0",
                    password: hashedPassword,
                    otp: "0",
                    type: "user",
                },
            });
            return NextResponse.json({
                status: "Successfully created user.",
                data: createUser,
            });
        }
    } catch (e) {
        return NextResponse.json({
            status: "Registration Fail",
            data: e.toString(),
        });
    }
}
