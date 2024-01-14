import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

//Create New Product
export async function POST(req) {
    let allHeader = headers();
    let userId = parseInt(allHeader.get("id"));
    try {
        const prisma = new PrismaClient();
        const reqBody = await req.json();
        reqBody.userId = userId;
        let createProduct = await prisma.products.create({ data: reqBody });
        return NextResponse.json({
            status: "Successfully Add Product.",
            data: createProduct,
        });
    } catch (e) {
        return NextResponse.json({
            starus: "Internal Error!",
            data: e.toString(),
        });
    }
}

//Get Single Product
export async function PUT(req) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };
    try {
        const prisma = new PrismaClient();
        const reqBody = await req.json();
        let singleProduct = await prisma.products.findUnique({
            where: reqBody,
        });
        return NextResponse.json({
            status: "Successfully get the product.",
            data: singleProduct,
        });
    } catch (e) {
        return NextResponse.json({
            status: "Internal Error!",
            data: e.toString(),
        });
    }
}
//Update Product
export async function PATCH(req) {
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };
    try {
        const prisma = new PrismaClient();
        const reqBody = await req.json();
        let updateProduct = await prisma.products.update({
            where: { id: reqBody.id },
            data: {
                title: reqBody.title,
                short_desc: reqBody.short_desc,
                details: reqBody.details,
                img1: reqBody.img1,
                img2: reqBody.img2,
                img3: reqBody.img3,
                origin: reqBody.origin,
                price: reqBody.price,
                discount: reqBody.discount,
                status: reqBody.status,
                type: reqBody.type,
                support_n_care: reqBody.support_n_care,
                how_to_setup: reqBody.how_to_setup,
                faq: reqBody.faq,
                categoryId: reqBody.categoryId,
            },
        });
        return NextResponse.json({
            status: "Successfully Update Product.",
            data: updateProduct,
        });
    } catch (e) {
        return NextResponse.json({
            status: "Internal Error!",
            data: e.toString(),
        });
    }
}
