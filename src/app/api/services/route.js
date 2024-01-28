import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };

    try {
        const prisma = new PrismaClient();
        const reqBody = await req.json();

        let createService = await prisma.services.create({ data: reqBody });
        return NextResponse.json({
            status: "Successfully Create Service",
            data: createService,
        });
    } catch (e) {
        return NextResponse.json({
            status: "Internal Error!!",
            data: e.toString(),
        });
    }
}
