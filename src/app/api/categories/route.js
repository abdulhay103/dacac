import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
    let headerList = headers();
    let id = parseInt(headerList.get("id"));

    try {
        let prisma = new PrismaClient();
        let reqBody = await req.json();
        reqBody.userId = id;
        let createCategory = await prisma.categories.create({
            data: reqBody,
        });
        return NextResponse.json({
            status: "Successfully Create Category",
            data: createCategory,
        });
    } catch (e) {
        return NextResponse.json({ status: "Fail", data: e.toString() });
    }
}
