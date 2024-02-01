import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

// Create Notice
export async function POST(req) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };
    try {
        let prisma = new PrismaClient();
        let reqBody = await req.json();
        reqBody.status = "open";
        let createNotice = await prisma.notices.create({ data: reqBody });

        return NextResponse.json({
            status: "Successfully Create Notice",
            data: createNotice,
        });
    } catch (e) {
        return NextResponse.json({
            status: "Fail, Internal Error!",
            data: e.toString(),
        });
    }
}

// Delete Item From Cart
export async function DELETE(req) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };
    try {
        let prisma = new PrismaClient();
        let reqBody = await req.json();
        let deleteOrder = await prisma.orders.deleteMany({ where: reqBody });

        return NextResponse.json({
            status: "Successfully Remove Item from Queue",
            data: deleteOrder,
        });
    } catch (e) {
        return NextResponse.json({
            status: "Fail, Internal Error!",
            data: e.toString(),
        });
    }
}

// Update Item/Order From Cart by user
export async function PATCH(req) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };
    try {
        let prisma = new PrismaClient();
        let reqBody = await req.json();
        let placeOrder = await prisma.orders.updateMany({
            where: { userId: reqBody.userId, status: "white Listed" },
            data: { status: "pending" },
        });

        return NextResponse.json({
            status: "Successfully placed order.",
            data: placeOrder,
        });
    } catch (e) {
        return NextResponse.json({
            status: "Fail, Internal Error!",
            data: e.toString(),
        });
    }
}
// confirm Item/Order From Cart admin
export async function PUT(req) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };
    try {
        let prisma = new PrismaClient();
        let reqBody = await req.json();
        let confirmOrder = await prisma.orders.updateMany({
            where: { id: reqBody.id },
            data: { status: reqBody.status },
        });
        if (reqBody.status === "Aproved") {
            return NextResponse.json({
                status: "Successfully approved the order.",
                data: confirmOrder,
            });
        } else if (reqBody.status === "On Delivary") {
            return NextResponse.json({
                status: "Order Send in delivary system.",
                data: confirmOrder,
            });
        } else if (reqBody.status === "Compleate") {
            return NextResponse.json({
                status: "All process successfully done.",
                data: confirmOrder,
            });
        } else {
            return NextResponse.json({
                status: "Rejected the order.",
                data: confirmOrder,
            });
        }
    } catch (e) {
        return NextResponse.json({
            status: "Fail, Internal Error!",
            data: e.toString(),
        });
    }
}
