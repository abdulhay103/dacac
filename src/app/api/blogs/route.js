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
        let data = {
            title: reqBody["title"],
            short_desc: reqBody["short_desc"],
            image: reqBody["image"],
            details: reqBody["details"],
            usersId: userId,
            categoryId: reqBody["categoryId"],
        };
        let createBlog = await prisma.blogs.create({
            data: data,
        });
        return NextResponse.json({
            status: "Successfully Create Blogs.",
            data: createBlog,
        });
    } catch (e) {
        return NextResponse.json({
            starus: "Internal Error!",
            data: e.toString(),
        });
    }
}
