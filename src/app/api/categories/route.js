import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
    let headerList = headers();
    console.log(headerList);
    try {
        let prisma = new PrismaClient();
        let reqBody = await req.json();
        let uniqueCategory = await prisma.categories.findUnique({
            where: { name: reqBody["name"] },
        });
        if (uniqueCategory === null) {
            let createCategory = await prisma.categories.create({
                data: reqBody,
            });
            return NextResponse.json({
                status: "Successfully Create Category",
                data: createCategory,
            });
        } else {
            return NextResponse.json({ status: "Duplicate Category" });
        }
    } catch (e) {
        return NextResponse.json({ status: "Fail", data: e.toString() });
    }
}
