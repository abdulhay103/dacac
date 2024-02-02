import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    let headerList = headers();
    let id = parseInt(headerList.get("id"));

    try {
        let prisma = new PrismaClient();
        let reqBody = await req.json();
        // reqBody.userId = id;
        let createCategory = await prisma.categories.create({
            // connect: { userId: id },
            data: { ...reqBody, users: { connect: { id: id } } },
        });
        return NextResponse.json({
            status: "Successfully Create Category",
            data: createCategory,
        });
    } catch (e) {
        return NextResponse.json({
            status: "Fail! Internal Error.",
            data: e.toString(),
        });
    }
}
